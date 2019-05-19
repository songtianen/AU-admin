const express = require('express');
const {
  getFunctionPagedList,
  postSaveFunction,
  delFuntion,
  delFuntions,
} = require('../controllers/func');
const { PermissionCheck } = require('../middleware/PermissionCheck');

const router = express.Router();

router.get(
  '/pagedlist',
  PermissionCheck({
    permission: ['function_view'],
    role: ['role_website_admin'],
  }),
  (req, res) => {
    getFunctionPagedList({ req, res });
  },
);
router.post(
  '/save',
  PermissionCheck({ permission: ['function_edit'] }),
  (req, res) => {
    postSaveFunction({ req, res });
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
