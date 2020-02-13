let businessError = ({ res, data = '', msg = '', info = '' }) => {
  return res.json({
    statusCode: 500,
    msg: msg,
    data: data,
  });
};

let success = ({ res, data = '', msg = '', info = '' }) => {
  return res.json({
    statusCode: 200,
    msg: msg,
    data: data,
  });
};
module.exports = {
  success,
  businessError,
};
