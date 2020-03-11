const express = require('express');
const {
  getFunctionPagedList,
  addFunction,
  delFuntion,
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
  PermissionCheck({ permission: ['function_edit'] }),
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
router.get(
  '/del',
  PermissionCheck({ permission: ['function_edit'] }),
  (req, res) => {
    delFuntion({ req, res });
  },
);
router.get(
  '/batchdel',
  PermissionCheck({ permission: ['function_edit'] }),
  (req, res) => {
    delFuntions({ req, res });
  },
);
module.exports = router;
