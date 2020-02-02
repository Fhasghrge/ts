"use strict";
var a = 23;
a = 33;
console.log(a);
//定义数组
var arr = [1, 2, 3, 4, 5];
console.log(arr);
var arr2 = [2, 4, 5, 6, 7, 4];
console.log(arr2);
//tuple元组类型
var arr3 = [123, 'zhangshuang'];
console.log(arr3);
//枚举类型
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 0] = "error";
})(Flag || (Flag = {}));
var flag1 = Flag.success;
console.log(flag1);
