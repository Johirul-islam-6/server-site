'use strict';
//['page','limit','sortBy','sortOrder']
Object.defineProperty(exports, '__esModule', { value: true });
exports.queryPick = void 0;
const queryPick = (obj, keys) => {
  const finalObj = {};
  for (const key of keys) {
    if (obj && Object.hasOwnProperty.call(obj, key)) {
      finalObj[key] = obj[key];
    }
  }
  return finalObj;
};
exports.queryPick = queryPick;
