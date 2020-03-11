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
  '/getAllDepartmentTree',
  PermissionCheck({ permission: ['department_view'] }),
  (req, res) => {
    getAllDepartmentTree({ req, res });
  },
);
router.get(
  '/departmentandrole',
  PermissionCheck({ permission: ['department_view'] }),
  (req, res) => {
    getAllDepartmentAndRole({ req, res });
  },
);
router.get(
  '/',
  PermissionCheck({ permission: ['department_view'] }),
  (req, res) => {
    getAllDepartment({ req, res });
  },
);
router.post(
  '/adddepartment',
  PermissionCheck({ permission: ['department_add'] }),
  (req, res) => {
    addDepartment({ req, res });
  },
);
router.post(
  '/deldepartment',
  PermissionCheck({ permission: ['department_del'] }),
  (req, res) => {
    delDepartment({ req, res });
  },
);
router.post(
  '/editdepartment',
  PermissionCheck({ permission: ['department_edit'] }),
  (req, res) => {
    editDepartment({ req, res });
  },
);
module.exports = router;
