const File = require('../models/file.model')
require('dotenv')
const image_upload_uri = process.env.BACKEND_IMAGE_UPLOAD_URI
const path = require('path') 
const fs = require('fs')
const formidable = require('formidable')
const form = formidable({
    multiples : true, 
    keepExtensions : true, 
    uploadDir : path.join(__dirname, "../uploads/")
})
const postPrograms = (req, res, next ) => {
    //get the incoming requests
    form.parse(req, async(err, fields, files) => {
        if(err) return res.status(400).json({ success : false, msg : err})
        if(fields){
            const { name, description, isFree, downloadUrl, tags} = fields
            //creating a new File 
            const newFile = new File({
                name, 
                description, 
                isFree, 
                downloadUrl, 
                tags,
            })
            const newFileId = newFile._id
            if(files){
                newFile.image = files.image.filepath
                const originalName = files.image.originalFilename
                //renaming the image 
                fs.renameSync(files.image.filepath, path.join(__dirname, `../uploads/${newFileId}-${originalName}`))
                //appending the image path to the file that's to be stored
                newFile.image = path.join(`${image_upload_uri}${newFileId}-${originalName}`)
                try{
                    await newFile.save()
                    return res.status(200).json({ success : true, msg : "File saved successfully", data : newFile})
                }catch(err){
                    res.status(400).json({ success : false, msg : "There was an error uploading file"})
                    return
                }
            }
            return res.status(400).json({ success : false, msg : 'There is no file in the payload'})
        }
        res.status(404).json({ success : false, msg : "The fields are empty"})
    })
}
module.exports = postPrograms