function two() {
  let element = document.createElement('div');
  element.innerHTML = '我是第二个入口文件';
  return element;
}
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
