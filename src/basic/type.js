var a = 12122;
console.info(Object.prototype.toString.apply(a));

var arr = [];
function func() {}



var obj = {};
console.info(obj instanceof Object);



console.info(new Object() == new Object());
console.info([1,2] == [1,2]);
console.info(null == undefined);
console.info(0 == undefined);


console.info(typeof Math.abs)


console.info("===============");
function Person(){}

console.info(Person.prototype.__proto__ === Object.prototype);
console.info(Person.prototype.constructor === Person);
console.info(Function.prototype.__proto__ === Object.prototype);
console.info(Object.prototype.__proto__);
console.info(Person.toString())

var p = new Person();
Object.prototype.toString = function() {
    return "error";
};
console.info(p.toString());


console.info((12312.2523).toFixed(2));   // 12312.25 指定保留小数位数四舍五入
console.info(typeof (12312.2523).toFixed());    // string 返回字符串表示法
console.info((222222222222222222222222454222).toFixed());    // 2.222222222222222e+29 位数太多会显示指数计数法
console.info((222222222222222222222222454222).toString());    // 2.222222222222222e+29 方法可把一个 Number 对象转换为一个字符串，并返回结果
console.info((123131).toExponential(2));    // 1.23e+5 返回指数计数法
console.info((123131).toPrecision(2));  // 1.2e+5 超出指定位数转换为指数计数法
var a = 1231231;
console.info(a.valueOf());  // 返回一个 Number 对象的基本数字值。这是js后台调用，一般不用于显示调用，如果不是number会爆TypeError



function sum() {
    console.info(typeof arguments);
    console.info(arguments instanceof Array);
    console.info(Object.prototype.toString.apply(arguments));
}

sum()

let fn = () => console.info("sss");

fn();



