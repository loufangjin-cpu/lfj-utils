/**
 * 对象深度查找
 * @param {*} target
 * @param  {...any} args
 * @returns
 */
const deepQuery  = function (target, ...args) {
  return args.reduce((obj, props) => (obj ? obj[props] : obj), target);
};

/**
 * 判断字符串是否是十六进制的颜色值
 * @param value
 */
const isColor = function(value) {
  return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value);
};

const ltools = {
  deepQuery,
  isColor
};

export { deepQuery, ltools as default, isColor };
