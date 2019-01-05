function two() {
  let element = document.createElement('div');
  element.innerHTML = '第二个入口文件';
  return element;
}


// 求数组中的最大 最小值
const max = Math.max.apply(null, [1,2,3,4,5,99])
const min = Math.min.apply(null, [1,2,3,4,5,99])
console.log('max：' + max)
console.log('min：' + min)

// async await

async function f() {
  let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve('done!'), 2000)
  })
  console.log(1)
  let result = await promise // 直到promise返回一个resolve值（*）
  console.log(result) // 'done!' 
}
f()

document.getElementById('root').appendChild(two());
