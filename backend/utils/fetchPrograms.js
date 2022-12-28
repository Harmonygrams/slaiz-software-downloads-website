const File = require('../models/file.model')
const fetchPrograms = (req, res, next) => {
    File.find({}).
    then(response => res.status(200).json({success :true, data : response})). 
    catch(err => res.status(200).json({success : false, error : err}))
}
module.exports = fetchPrograms