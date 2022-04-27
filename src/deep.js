/**
 * 对象深度查找
 * @param {*} target
 * @param  {...any} args
 * @returns
 */
const deepQuery  = function (target, ...args) {
  return args.reduce((obj, props) => (obj ? obj[props] : obj), target);
};
export default deepQuery
