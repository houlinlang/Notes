/*
  Promise
    resolve:解决/成功
    reject:拒绝/失败
*/

/*
  定义函数：生成随机数，一段时间后返回
  接收两个回调函数，本函数执行结果分别执行不同的回调函数
*/
function test(resolve, reject) {
  let timeOut = Math.random() * 2;
  console.log(`set timeout to: ${timeOut} seconds.`);
  setTimeout(function () {
    if (timeOut < 1) {
      console.log("call resolve()");
      resolve('200 OK');
    }
    else {
      console.log("call reject()");
      reject(`timeout in ${timeOut} seconds.`);
    }
  }, timeOut * 1000);
}

/*
  一个 Promise 对象，负责执行 test 函数
*/
let p1 = new Promise(test);

let p2 = p1.then(function (result) {
  console.log("成功：" + result);
}).catch(function (reason) {
  console.log("失败：" + reason)
});
