const File = require('./../models/file.model')
const fetchCustomPrograms = (req, res, next) => {
    const {searchParams} = req.query
    const searchParamsArray = searchParams.split(' ')
    const regexp = new RegExp(searchParams)
    console.log(searchParamsArray)
    File.find({
        $or : [
        {name : {$regex : regexp, $options : 'ig'}},
        {description : {$regex : regexp, $options : 'ig'}}, 
        {tags : {$all : searchParamsArray}}
        ]
    }).
    then(response => res.status(200).json({"success" : true, data : response})).
    catch(err => console.log(err))
}
module.exports = fetchCustomPrograms