// Modules (modules (mô-đun) là cách để chia mã nguồn thành các phần riêng biệt, dễ tổ chức, tái sử dụng và bảo trì.
// ES6 giới thiệu cú pháp import(nạp vào) và export(xuất ra) để hỗ trợ modules natively
// (một cách chính thức, không cần thư viện ngoài).)

// 1. Import default export:
// - Có thể đặt tên tùy ý cho default import.
// import logger from "./logger/index.js";
// 2. Import named export:
// - Tên phải trùng với tên export và có dấu {}.
// import { TYPE_LOG, TYPE_WARN, TYPE_ERROR } from "./constants.js";

import { logger2 } from "./logger/index.js";
// 3. Import tất cả (namespace import):
// - Toàn bộ module được import dưới dạng object.
import * as constants from "./constants.js";
import logger from "./logger/logger.js";

console.log(constants);

logger2("Test message...", constants.TYPE_ERROR);
