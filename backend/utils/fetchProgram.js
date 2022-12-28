const File = require('./../models/file.model')
const fetchProgram = (req, res, next) => {
    const { _id } = req.body
    File.findById(_id). 
    then(response => res.status(200).json({'success' : true, data : response})).
    catch(err => res.status(200).json({'success':false, error : err}))
}
module.exports = fetchProgram