const File = require('../models/file.model')
const recordDownloads = (req, res, next) => {
    const {id} = req.body
    File.findOneAndUpdate({"_id" : id}, {$inc : {downloads : 1}}).
    then(response => res.status(200).json({'success' : true, data : response})).
    catch(err => res.status(200).json({'success' : false, error : err}))
}
module.exports = recordDownloads