const express = require('express');
const {
  getFunctionPagedList,
  postSaveFunction,
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
module.exports = router;
