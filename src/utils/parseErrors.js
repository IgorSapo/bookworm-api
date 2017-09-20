export default function(errors) {
  // const result = {};
  // Object.keys(errors).forEach(key => {
  //   result[key] = errors[key].message;
  // });
  // return result;
  return Object.keys(errors).reduce((acc, key) => {
    acc[key] = errors[key].message;
    return acc;
  }, {});
}

// _.forEach(errors, (val, key) => {
//   result[key] = val.message;
// });
