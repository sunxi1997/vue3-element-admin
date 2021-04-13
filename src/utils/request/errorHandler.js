/**
 * axios 服务器响应异常处理
 */

import { ElMessage } from "element-plus";

import { INFO, USE_CONSOLE, useStyle } from "@/utils/console";

// 默认处理, 提取错误信息, 并展示
function defaultHandler(error) {
  USE_CONSOLE && console.log(useStyle("请求错误: 使用默认异常处理"), INFO.red);
  let message = error.message || "Error";

  const { /* status, statusText,*/ data } = error.response || {};

  if (data) {
    message = `Error response`;
  }

  showError(message);
}

// 特殊异常处理
const handlers = {};

// 请求超时处理
function timeoutHandler() {
  USE_CONSOLE && console.log(useStyle("请求错误: 请求超时处理!"), INFO.red);
  showError("请求超时");
}

// 错误处理
export default function(error) {
  const { code, message, config, response } = error;
  if (code === "ECONNABORTED" && message.includes("timeout") && !config._retry) {
    return timeoutHandler();
  }

  const { status } = response || {};
  const handle = handlers[status] || defaultHandler;
  return handle(error);
}

// 展示错误信息
function showError(message) {
  ElMessage({
    message,
    type: "error",
    duration: 5 * 1000,
  });
}

