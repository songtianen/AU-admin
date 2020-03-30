const express = require('express');
const {
  getFunctionPagedList,
  addFunction,
  delFuntions,
  editFunction,
} = require('../controllers/func');
const { PermissionCheck } = require('../middleware/PermissionCheck');

const router = express.Router();

router.get(
  '/pagedlist',
  PermissionCheck({ permission: ['function_edit'] }),
  (req, res) => {
    getFunctionPagedList({ req, res });
  },
);
router.post(
  '/add',
  PermissionCheck({ permission: ['function_add'] }),
  (req, res) => {
    addFunction({ req, res });
  },
);
router.post(
  '/edit',
  PermissionCheck({ permission: ['function_edit'] }),
  (req, res) => {
    editFunction({ req, res });
  },
);
router.post(
  '/del',
  PermissionCheck({ permission: ['function_del'] }),
  (req, res) => {
    delFuntions({ req, res });
  },
);
module.exports = router;
