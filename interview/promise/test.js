/*
 * @Author: jincheng
 * @Date: 2022-04-24 15:24:58
 * @FilePath: /basicsCode/interview/promise/test.js
 */
const Promise = require("./promise");

new Promise((resolve, reject) => {
  console.log("开始");
  resolve(1);
}).then(
  (value) => {
    console.log(value, 1);
  },
  (reason) => {
    console.log("reason", 2);
  }
);
