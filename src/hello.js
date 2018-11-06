// hello.js
// module.exports = function() {
//   let hello = document.createElement('div');
//   hello.innerHTML = " hello world，Long time no see!  其他命令 webpack-dev-server --open";
//   return hello;
// };

import React, {Component} from 'react'
const name = '_Gong'
export default class Hello extends Component {
  render() {
    return (
     <div>
       {name}
     </div>
    )
  }  
}
