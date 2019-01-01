// function f() {
//     console.info("xxx");
//     return 0;
// }
// let [x = f]=[];
// alert(x);
let v = [[1, 2], [3, 4]].map(([a, b]) => a + b);
console.info(v);


//函数参数解构赋值
// 1.
function add([x, y]) {
    return x + y;
}

console.info(add([1,2]));

//函数是一个对象,通过对这个对象进行解构.得到变量x和y的值。如果解构失败，x和y等于默认值。
function move({x = 0, y = 0} = {}) {
    return [x, y];
}

console.info(move({x: 3, y: 8})); // [3, 8]
console.info(move({x: 3})); // [3, 0]
console.info(move({})); // [0, 0]
console.info(move()); // [0, 0]


console.info("===============");
function move2({x, y} = { x: 0, y: 0 }) {
    return [x, y];
}
console.info(move2({x: 3, y: 8})); // [3, 8]
console.info(move2({x: 3})); // [3, undefined]
console.info(move2({})); // [undefined, undefined]
console.info(move2()); // [0, 0]

//上面代码是为函数move的参数指定默认值，而不是为变量x和y指定默认值，所以会得到与前一种写法不同的结果。