let businessError = (res, msg) => {
  return res.json({
    statusCode: 500,
    msg: msg,
    data: null,
  });
};

let success = ({ res, data = '', msg = '' }) => {
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
