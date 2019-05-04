const express = require('express')
const { getFunctionPagedList } = require('../controllers/func')

const router = express.Router()

router.get('/pagedlist', (req, res) => {
  getFunctionPagedList({ req, res })
})

module.exports = router
