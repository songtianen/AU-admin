const express = require('express');
const {
  getAllDepartmentAndRole,
  getAllDepartment,
  addDepartment,
  delDepartment,
  getAllDepartmentTree,
  editDepartment,
} = require('../controllers/department');
const { PermissionCheck } = require('../middleware/PermissionCheck');

const router = express.Router();

router.get(
  '/departmentandrole',
  PermissionCheck({ permission: [''] }),
  (req, res) => {
    getAllDepartmentAndRole({ req, res });
  },
);

router.get(
  '/getAllDepartmentTree',
  PermissionCheck({ permission: [''] }),
  (req, res) => {
    getAllDepartmentTree({ req, res });
  },
);
router.get(
  '/departmentandrole',
  PermissionCheck({ permission: [''] }),
  (req, res) => {
    getAllDepartmentAndRole({ req, res });
  },
);
router.get('/', PermissionCheck({ permission: [''] }), (req, res) => {
  getAllDepartment({ req, res });
});
router.post(
  '/adddepartment',
  PermissionCheck({ permission: [''] }),
  (req, res) => {
    addDepartment({ req, res });
  },
);
router.post(
  '/deldepartment',
  PermissionCheck({ permission: [''] }),
  (req, res) => {
    delDepartment({ req, res });
  },
);
router.post(
  '/editdepartment',
  PermissionCheck({ permission: [''] }),
  (req, res) => {
    editDepartment({ req, res });
  },
);
module.exports = router;
