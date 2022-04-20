// 创建被观察者
class Observable {
  constructor(){
    this.message = '暂无通知'
    this.observerList = []
  }
  
  getMessage(){
    return this.message
  }
  setMessage(message){
    this.message = message
    this.notifyAllObservers()
  }
  // 通知全部观察者
  notifyAllObservers() {
    this.observerList.forEach((observer)=>{
      observer.update()
    })
  }
  // 关联
  attach(observer){
    this.observerList.push(observer)
  }
}

 // 观察者
 class Observer {
   constructor(name, group){
     this.name = name
     this.group = group
     this.group.attach(this)
   }
   update(){
     console.log(`${this.name}收到通知:${this.group.getMessage()}`)
   }
 }
 
 const group = new Observable()

 const a = new Observer('小明',group)
 const b = new Observer('小李',group)
 
 group.setMessage('5:10开需求会')

// 装饰器模式

const Man = function () { 
  this.run = function () {   
     console.log('跑步'); 
  };
};

const Decorator = function (old) { 
  this.oldAbility = old.run; 
  this.fly = function () {
     console.log('具备飞行能力'); 
  }; 
  this.newAbility = function () {   
    this.oldAbility();   
    this.fly(); 
  };
};
const man = new Man();
const superMan = new Decorator(man);

superMan.fly(); // 具备飞行能力
superMan.oldAbility(); // 具备飞行能力

man.run();

// 代理模式

class House {
  constructor(name) {
    this.name = name
  }
}

// 需要找房子的人
const Tenant = {
  name:'小明',
  send(that) {
    that.findHouse(this.name);
  },
}

// 中介
const Intermediary = {
  // 寻找房子
  findHouse(name){
    Landlord.emptyHouse(()=>{
      Landlord.leaseInfo(new House(name + '看房申请'))
    })
  }
}

// 房东
const Landlord = {
  name:'公租婆',
  leaseInfo(info){
    console.log(info)
    console.log(`${this.name}收到出租信息:${info.name}`)
  },
  emptyHouse(fn){
    fn();
  }
}
Tenant.send(Intermediary)


// 函数防抖，频繁操作中不处理，直到操作完成之后（再过 delay 的时间）才一次性处理
function debounce(fn, delay) {
  console.log('delay',)
  
  delay = delay || 200;
  
  var timer = null;

  return function() {
      var arg = arguments;
      // 每次操作时，清除上次的定时器
      clearTimeout(timer);
      timer = null;
      
      // 定义新的定时器，一段时间后进行操作
      timer = setTimeout(function() {
          fn.apply(this, arg);
      }, delay);
  }
};

var count = 0;

// 主体
function scrollHandle(e) {
  console.log(e.type, ++count); // scroll
}

// 代理
function test(){
  return  debounce(scrollHandle, 500)  ;
}

// (
//   function() {
//     return debounce(scrollHandle, 500);
//   }
// );

window.onscroll = test();

// 迭代器模式
console.log('------------迭代器模式------------');

const Iteration = (obj,cb) =>{
  if(Array.isArray(obj)){
    console.log(obj)
    // 
    for (const [val,index] of obj.entries()){
      cb(val, index)
    }
  }else {
    for(const val in obj){
      cb(val, obj[val])
    }
  }
}

const cd = (a,b,)=>{
  console.log(a,b,)
}
const It1 = Iteration([1, 2, 3],cd)
const It2 = Iteration({a: 1, b: 2},cd)
console.log(It2)

console.log('------------组合模式------------');


// function Folder(name) {
//   this.name = name;
//   this.parent = null;
//   this.files = [];
// }

// Folder.prototype = {
//   constructor: Folder,

//   add: function(file) {
//     console.log('add',file);
//       file.parent = this;
//       this.files.push(file);
//       return this;
//   },

//   scan: function() {
//       // 委托给叶对象处理
//       for (var i = 0; i < this.files.length; ++i) {
//           this.files[i].scan();
//       }
//   },

//   remove: function(file) {
//       if (typeof file === 'undefined') {
//           this.files = [];
//           return;
//       }

//       for (var i = 0; i < this.files.length; ++i) {
//           if (this.files[i] === file) {
//               this.files.splice(i, 1);
//           }
//       }
//   }
// };

// // 文件 叶对象
// function File(name) {
//   this.name = name;
//   this.parent = null;
// }

// File.prototype = {
//   constructor: File,

//   add: function() {
//       console.log('文件里面不能添加文件');
//   },

//   scan: function() {
//       var name = [this.name];
//       var parent = this.parent;

//       while (parent) {
//           name.unshift(parent.name);
//           parent = parent.parent;
//       }

//       console.log(name.join(' / '));
//   }
// };
// var web = new Folder('Web');
// var fe = new Folder('前端');
// var css = new Folder('CSS');
// var js = new Folder('js');
// var rd = new Folder('后端');

// web.add(fe).add(rd);

// var file1 = new File('HTML权威指南.pdf');
// var file2 = new File('CSS权威指南.pdf');
// var file3 = new File('JavaScript权威指南.pdf');
// var file4 = new File('MySQL基础.pdf');
// var file5 = new File('Web安全.pdf');
// var file6 = new File('Linux菜鸟.pdf');

// css.add(file2);
// js.add(file5).add(file6);
// fe.add(js).add(file1).add(file3).add(css);

// rd.add(file4).add(file5);

// // web.add(file6);

// // rd.remove(file4);

// // 扫描
// web.scan();

var MenuComponent = function () {
};
// MenuComponent.prototype.getName = function () {
//     throw new Error("该方法必须重写!");
// };
// MenuComponent.prototype.getDescription = function () {
//     throw new Error("该方法必须重写!");
// };
// MenuComponent.prototype.getPrice = function () {
//     throw new Error("该方法必须重写!");
// };
// MenuComponent.prototype.isVegetarian = function () {
//     throw new Error("该方法必须重写!");
// };
// MenuComponent.prototype.print = function () {
//     throw new Error("该方法必须重写!");
// };
// MenuComponent.prototype.add = function () {
//     throw new Error("该方法必须重写!");
// };
// MenuComponent.prototype.remove = function () {
//     throw new Error("该方法必须重写!");
// };
// MenuComponent.prototype.getChild = function () {
//     throw new Error("该方法必须重写!");
// };

var MenuItem = function (sName, sDescription, bVegetarian, nPrice) {
  MenuComponent.apply(this);
  this.sName = sName;
  this.sDescription = sDescription;
  this.bVegetarian = bVegetarian;
  this.nPrice = nPrice;
};
MenuItem.prototype = new MenuComponent();

MenuItem.prototype.getName = function () {
  return this.sName;
};

MenuItem.prototype.getDescription = function () {
  return this.sDescription;
};

MenuItem.prototype.getPrice = function () {
  return this.nPrice;
};

MenuItem.prototype.isVegetarian = function () {
  return this.bVegetarian;
};

MenuItem.prototype.print = function () {
  console.log(this.getName() + ": " + this.getDescription() + "------- " + this.getPrice() + "euros");
};


var Menu = function (sName, sDescription) {
  MenuComponent.apply(this);
  this.aMenuComponents = [];
  this.sName = sName;
  this.sDescription = sDescription;
  // this.createIterator = function () {
  //     throw new Error("This method must be overwritten!");
  // };
};
Menu.prototype = new MenuComponent();

Menu.prototype.add = function (oMenuComponent) {
  console.log('oMenuComponent',oMenuComponent)
  // 添加子菜品
  this.aMenuComponents.push(oMenuComponent);
};
Menu.prototype.remove = function (oMenuComponent) {
  // 删除子菜品
  var aMenuItems = [];
  var nMenuItem = 0;
  var nLenMenuItems = this.aMenuComponents.length;
  var oItem = null;

  for (; nMenuItem < nLenMenuItems; ) {
      oItem = this.aMenuComponents[nMenuItem];
      if (oItem !== oMenuComponent) {
          aMenuItems.push(oItem);
      }
      nMenuItem = nMenuItem + 1;
  }
  this.aMenuComponents = aMenuItems;
};
Menu.prototype.getChild = function (nIndex) {
  console.log('nIndex',nIndex)
  //获取指定的子菜品
  return this.aMenuComponents[nIndex];
};
Menu.prototype.getName = function () {
  return this.sName;
};
Menu.prototype.getDescription = function () {
  return this.sDescription;
};
Menu.prototype.print = function () {
  // 打印当前菜品以及所有的子菜品
  console.log(this.getName() + ": " + this.getDescription());
  console.log("1--------------------------------------------");

  var nMenuComponent = 0;
  var nLenMenuComponents = this.aMenuComponents.length;
  var oMenuComponent = null;

  for (; nMenuComponent < nLenMenuComponents; ) {
      oMenuComponent = this.aMenuComponents[nMenuComponent];
      oMenuComponent.print();
      nMenuComponent = nMenuComponent + 1;
  }
};

// var DinnerMenu = function () {
//   Menu.apply(this);
// };
// DinnerMenu.prototype = new Menu();

// var CafeMenu = function () {
//   Menu.apply(this);
// };
// CafeMenu.prototype = new Menu();

// var PancakeHouseMenu = function () {
//   Menu.apply(this);
// };
// PancakeHouseMenu.prototype = new Menu();




var Mattress = function (aMenus) {
  // console.log('122121',aMenus)
  this.aMenus = aMenus;
};
Mattress.prototype.printMenu = function () {
  console.log('this',this)
  this.aMenus.print();
};

var oPanCakeHouseMenu = new Menu("菜单1", "Breakfast");
var oDinnerMenu = new Menu("菜单2", "Lunch");
var oCoffeeMenu = new Menu("菜单3", "Dinner");
var oAllMenus = new Menu("菜单4", "All menus combined");

oAllMenus.add(oPanCakeHouseMenu);
oAllMenus.add(oDinnerMenu);

oDinnerMenu.add(new MenuItem("Pasta", '内容', false, 3.89));
oDinnerMenu.add(oCoffeeMenu);

// oCoffeeMenu.add(new MenuItem("Express", "Coffee from machine", false, 0.99));

var oMattress = new Mattress(oAllMenus);
console.log("0---------------------------------------------");
oMattress.printMenu();
console.log("0---------------------------------------------");