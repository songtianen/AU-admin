/* eslint-disable handle-callback-err */
const express = require('express')
const { getAccessMenuList, getMenuList, saveMenu } = require('../controllers/menu')

const router = express.Router()
// 无需权限验证
router.get('/getaccessmenu', (req, res) => {
  getAccessMenuList({ req, res })
})
router.get('/', (req, res) => {
  getMenuList({ req, res })
})
router.post('/savemenu', (req, res) => {
  // eslint-disable-next-line no-dupe-keys
  saveMenu({ req, res })
})
module.exports = router
