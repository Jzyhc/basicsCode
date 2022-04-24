/*
 * @Author: jincheng
 * @Date: 2022-04-24 14:49:23
 * @FilePath: /basicsCode/interview/promise/promise.js
 */

class Promise {
  // executor  执行者
  constructor(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("need id a function");
    }
    this.init();

    executor(this.resolve, this.reject);
  }

  init = () => {
    this.state = "pending";
    this.value = null;
    this.reason = null;
  };

  reject = (reason) => {
    // 失败后执行
    if (this.state === "pending") {
      this.state = "rejected";
      this.reason = reason;
    }
  };

  resolve = (value) => {
    // 成功后执行 状态改变不可逆
    if (this.state === "pending") {
      this.state = "fulfilled";
      this.value = value;
    }
  };

  then = (onFulFilled, onRejected) => {
    // 参数检查
    if (typeof onFulFilled !== "function") {
      onFulFilled = (value) => {
        return value;
      };
    }
    if (onRejected !== "function") {
      onRejected = (reason) => {
        return reason;
      };
    }

    if(this.state === 'fulfilled'){
        onFulFilled(this.value)
    }

    if(this.state === 'rejected'){
        onRejected(this.reason) 
    }
  };
}

module.exports = Promise;
