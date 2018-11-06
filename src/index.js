//index.js 
import './css/style.css'
import './css/blue.scss'
import React from 'react'
import {render} from 'react-dom'
import Hello from './hello'

// const hello = require('./hello.js');
// document.querySelector("#root").appendChild(hello());


render(<Hello />, document.getElementById('root'))
