const router = require('express').Router() 
const handleProgramsRequests = require('./handleProgramsRequests')
router.use('/programs', handleProgramsRequests)
module.exports = router