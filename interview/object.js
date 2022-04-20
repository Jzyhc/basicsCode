/*
 * @Author: jincheng
 * @Date: 2022-04-20 10:07:38
 * @FilePath: /basicsCode/interview/object.js
 */

function isEqual(obj1, obj2) {
  // 判断是否为对象
  const isObject =
    toString.call(obj1) === "[object Object]" &&
    toString.call(obj2) === "[object Object]";
  if (!isObject) {
    return false;
  }
  // 判断长度是否相等

  const obj1Lth = Object.keys(obj1).length;
  const obj2Lth = Object.keys(obj2).length;
  if (obj1Lth !== obj2Lth) {
    return false;
  }

  // 判断对象的值是否相等
  for (const key in obj1) {
    //hasOwnProperty表示是否有自己的属性。这个方法会查找一个对象是否有某个属性，但是不会去查找它的原型链。
    if (obj2.hasOwnProperty.call(obj2, key)) {
      const obj1Value = toString.call(obj1[key]);
      const obj2Value = toString.call(obj2[key]);

      if (obj1Value === "[object Object]" && obj2Value === "[object Object]") {
        isEqual(obj1Value, obj2Value);
      } else if (obj1[key] !== obj2[key]) {
        return false;
      }

      return true;
    }
  }
}

const a = {
  name: "li",
  age: 18,
  c: {
    a: 1,
    b:null
  },
};

const b = {
  name: "li",
  age: "18",
  c: {
    a: 1,
    b:null
  },
};
// const b = {
//   name: "wang",
//   age: "22",
// };
console.info(Object.is(a,b));

console.log(isEqual(a, b));
