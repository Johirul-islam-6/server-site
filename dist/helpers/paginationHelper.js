'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.HelperPagination = void 0;
// pagination query if user send value Or by deafult resive value
const calculationPagination = Option => {
  const page = Number(Option.page) || 1;
  const limit = Number(Option.limit) || 4;
  const skip = (page - 1) * limit;
  const sortBy = Option.sortBy || 'createdAt';
  const sortOrder = Option.sortOrder || 'desc';
  return {
    page,
    limit,
    skip,
    sortBy,
    sortOrder,
  };
};
exports.HelperPagination = {
  calculationPagination,
};
