const { getUserInfoById } = require('../services/userService')
const { PermissionCheck } = require('../util/PermissionCheck')
const { MenuList, AccessMenuList, findAccessMenuList, postSaveMenu } = require('../services/menuService')
const { businessError, success } = require('../lib/responseTemplate')

// 无需权限
const getAccessMenuList = ({ req, res }) => {
  getUserInfoById(req.user.userId).then((userInfo) => {
    findAccessMenuList().then(doc => {
      let menuList = AccessMenuList(req, userInfo, doc)
      return success(res, menuList)
    })
  })
}

const getMenuList = ({ req, res }) => {
  getUserInfoById(req.user.userId).then((result) => {
    PermissionCheck({ result, req, res, permission: ['menu_view'], role: [] }).then((rs) => {
      if (rs) {
        findAccessMenuList().then(doc => {
          let menuList = MenuList(doc)
          return success(res, menuList)
        })
      } else {
        return businessError(res, '您可能没有权限')
      }
    })
  }).catch(() => {
    businessError(res, '服务器错误')
  })
}

const saveMenu = ({ req, res }) => {
  const menu = req.body
  if (menu.name === '') {
    return businessError(res, '名称不能为空!')
  }
  if (menu.title === '') {
    return businessError(res, '标题不能为空!')
  }
  if (menu.icon === '') {
    return businessError(res, '请选择图标!')
  }
  getUserInfoById(req.user.userId).then((result) => {
    PermissionCheck({ result, req, res, permission: ['menu_edit'], role: [] }).then((rs) => {
      if (rs) {
        findAccessMenuList().then(doc => {
          return postSaveMenu(res, menu, doc)
        })
      } else {
        return businessError(res, '您可能没有权限')
      }
    })
  }).catch(() => {
    businessError(res, '服务器错误')
  })
}

module.exports = {
  getAccessMenuList,
  getMenuList,
  saveMenu,
}
