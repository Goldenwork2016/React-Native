import 'babel-polyfill'
import {AppRegistry} from 'react-native'
import ReactNative from './src'

AppRegistry.registerComponent('reactnative', () => ReactNative)

var app = document.createElement('div')
document.body.appendChild(app)

AppRegistry.runApplication('reactnative', {
  rootTag: app
})
