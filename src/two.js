function two() {
  let element = document.createElement('div');
  element.innerHTML = '第二个入口文件';
  return element;
}
function throttle(fn, gapTime) {
  let _lastTime = null;
  console.log(888)
  return function () {
    let _nowTime = + new Date()
    console.log(_nowTime, _lastTime)
    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      fn();
      _lastTime = _nowTime
    }
  }
}

let fn = ()=>{
  console.log('boom')
}
// throttle(fn, 1000)
// setInterval(throttle(fn,5000), 3000)

// 求数组中的最大 最小值
const max = Math.max.apply(null, [1,2,3,4,5,99])
const min = Math.min.apply(null, [1,2,3,4,5,99])
console.log('max：' + max)
console.log('min：' + min)

// 合并两个数组
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const cont = Array.prototype.push.apply(arr1, arr2)
document.getElementById('root').appendChild(two());
