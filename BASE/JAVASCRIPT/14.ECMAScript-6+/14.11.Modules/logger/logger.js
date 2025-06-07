import { TYPE_LOG, TYPE_WARN, TYPE_ERROR } from "../constants.js";

function logger(log, type = TYPE_LOG) {
  console[type](log);
}

// 1. Default Export (xuất mặc định):
// - Chỉ một giá trị default được export trong mỗi module.
export default logger;
