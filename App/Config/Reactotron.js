import Reactotron from 'reactotron-react-native'
import { NativeModules } from 'react-native'

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