module.exports = {
  checkParametersEmpety: async (data) => {
    let msg = '';
    let keys = [];
    if (data) {
      // let dataArr = [];
      // for (let i in data) {
      //   let l = { [i]: data[i] };
      //   dataArr.push(l);
      // }

      for (let i in data) {
        let v = data[i] + '';
        if (!v.trim()) {
          msg += `,${i}:不能为空`;
          keys.push(i);
        }
      }
      // console.log('dataArr', dataArr);
      // dataArr.forEach((it) => {
      //   let key = Object.keys(it).pop();
      //   let val = it[key].trim();
      //   if (val === '') {
      //     keys.push(key);
      //     msg += `,${key}:不能为空`;
      //   }
      // });
    }
    return {
      msg,
      keys,
    };
  },
};
