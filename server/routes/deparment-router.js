const express = require('express');
const { getAllDepartment } = require('../controllers/department');
const { PermissionCheck } = require('../middleware/PermissionCheck');

const router = express.Router();

router.get('/', PermissionCheck({ permission: [''] }), (req, res) => {
  getAllDepartment({ req, res });
});
module.exports = router;
