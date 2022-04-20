/*
 * @Author: jincheng
 * @Date: 2020-11-02 22:49:46
 * @FilePath: /基础代码/面试题/index.js
 */
// 防抖
// function debounce(fn,ms = 1000) {
//   let timer;
//   return function() {
//     if(timer){
//       clearTimeout(timer);
//       timer = null;
//     }else{
//       timer = setTimeout(()=>{
//         fn.apply(this,arguments);
//       },ms)
//     }
//   }
// }


// function debounce (func,time){
//   let timer = null 
//   return ()=>{
//     clearTimeout(timer)
//     timer = setTimeout(() => {
//       func.apply(this,arguments)
//     }, time);
//   }
// }



// function debounce (func,time) {
//   let timer = null
//   return ()=>{
//     clearTimeout(timer)
//     timer = setTimeout(() => {
//       func.apply(this,arguments)
//     }, time);
    
//   } 
// }


// function debounce (func,time,isFlag){
//   let timer = null;
//   return ()=>{

//     if(timer) clearTimeout(timer)
//     if(isFlag){
//       let nowTime = !timer

//       timer = setTimeout(() => {
//         timer = null
//       }, time);

//       if(nowTime) func.apply(this,arguments)
//     }else{
//       timer = setTimeout(() => {
//         func.apply(this,arguments)
//       }, time)
//     }
//   }
// }


function debounce (func,time,isFalg){

  let tiemr = null;
  let debounced = function (){
    var context = this;
      var args = arguments;
      if(tiemr) clearTimeout(tiemr)
      if(isFalg){
        let nowTime = !tiemr
        tiemr = setTimeout(() => {
          tiemr = null
        }, time);
        if(nowTime) func.apply(context,args)
      }else{
        tiemr = setTimeout(()=>{
          func.apply(context,args)
        },time)
      }
  }

  debounced.cancel = function(){
    clearTimeout(tiemr)
    tiemr = null
  }
  return debounced
}

function test (name){
  console.log('我是处理防抖')
}


window.addEventListener('scroll',debounce(test,10000,true))




function throttle(func, ms = 1000) {
  let canRun = true
  return function (...args) {
    if (!canRun) return
    canRun = false
    setTimeout(() => {
      func.apply(this, args)
      canRun = true
    }, ms)
  }
}

// 测试
const task = () => { console.log('run task') }
const throttleTask = throttle(task, 1000)
window.addEventListener('scroll', throttleTask)


// 手写bind
// 原型上添加myBind方法
Function.prototype.myBind = function( context = globalThis){
  
  const _this = this;

}

// 实现深浅copy
// 浅copy
function qianCopy(obj){
  var nweObj = {}
  for(const key in obj){
    nweObj[key] = obj[key]
  }
  return nweObj
}
var xm={
  name:"xm",
  age:30,
  cars:{
      bmw:"30w",
      bench:"60w"
  }
}

var newXm = qianCopy(xm);
console.log(newXm)

// 深拷贝
function deepCopy(obj) {
  if(typeof obj != "object"){
    return obj
  }
  const newObj = {}
  for(const key in obj){
    newObj[key] = deepCopy(obj[key])
  }
  return newObj
}
var newDeep = deepCopy(xm);
console.log('2121221',newDeep)

newXm.cars.bmw = '90w'

console.log(newXm,xm,newDeep)
