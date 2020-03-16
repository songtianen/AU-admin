export const actionTypes = {
  INIT_MENU: 'header/INIT_MENU',
};

export const constants = {
  NAME: 'header',
};

// action creators
export const doInitMenu = (data) => {
  return { type: actionTypes.INIT_MENU, payload: data };
};
