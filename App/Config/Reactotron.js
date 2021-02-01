import Reactotron from 'reactotron-react-native'
import Immutable from 'seamless-immutable'
import { NativeModules } from 'react-native'
import { reactotronRedux as reduxPlugin } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

const scriptURL = NativeModules.SourceCode.scriptURL;
const address = scriptURL.split('://')[1].split('/')[0];
const hostname = address.split(':')[0];

Reactotron
  .configure({
    host: hostname
  }) // we can use plugins here -- more on this later
  .connect() // let's connect!
  .clear()

console.tron = Reactotron

export default Reactotron