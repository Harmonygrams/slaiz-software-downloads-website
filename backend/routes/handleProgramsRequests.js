const router = require('express').Router() 
const multer = require('multer')
const path = require('path')
const uploadImage = multer.diskStorage({
    destination : (req, file, cb) => {
        console.log('saving it')
        cb(null, path.basename(__dirname + '/program_images'))
    },
    filename : (req, file, cb) => {
        cb(null, file.fieldname)
    }
})
const upload = multer({storage : uploadImage})
const postPrograms = require('../utils/postPrograms')
const fetchPrograms = require('../utils/fetchPrograms')
const recordDownloads = require('../utils/recordDownloads')
const fetchProgram = require('../utils/fetchProgram')
const fetchCustomPrograms = require('../utils/fetchCustomPrograms')
router
    .get('/popular-software', fetchPrograms)
    .get('/custom-software', fetchCustomPrograms)
    .get('/graphics-software', (req, res, next) => {
    })
    .get('/accounting-software', (req, res, next) => {
    })
    .get('/video-editing-software', (req, res, next) => {
    })
    .post('/review', fetchProgram)
    .post('/software', postPrograms)
    .post('/download', recordDownloads)
    .post('/post-image', (req, res, next) => {
        upload.single('image')(req, res, err => {
            if(err) return res.status(200).json({success : false, message : "An error occuess" , error : err})
            res.status(200).json({success : true, message : 'Image has been saved'})
        })
    })

module.exports = router

// path.basename(__dirname + '/program_images')
