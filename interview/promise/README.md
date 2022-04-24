<!--
 * @Author: jincheng
 * @Date: 2022-04-24 16:50:57
 * @FilePath: /basicsCode/interview/promise/README.md
-->
## 基本实现
// promise 接受两个可选参数 且必须是函数

// 判断 executor 是否为函数

// 定义两个函数让 executor 去调用

// 声命两个函数 resolve reject 

// resolve 接受 成功后的终值 value；reject 接受失败后的拒因 reason

// peomise 三种状态改变 改变是单向的 

####################################################

## then 函数

// 接受两个可选参数 为函数  onFulfilled,onRejected 

// onFulfilled 若不是函数时 将当前值进行包装，从新返回。
// onRejected 若不是函数时 进行包装返回错误

// 当状态为 fulfilled 的时候执行onFulFilled
// 当状态为 rejected 的时候执行 onRejected
