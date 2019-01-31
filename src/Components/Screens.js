import {Navigation} from 'react-native-navigation';
import Home from '../Screens/Home'
import Initializing from './Initializing'
import SignIn from '../Screens/SignIn'
import SignUp from '../Screens/SignUp'
import Chat from '../Screens/Chat'

export function registerScreens() {
    Navigation.registerComponent('Home', () => Home);
    Navigation.registerComponent('Initializing', (sc) => Initializing);
    Navigation.registerComponent('SignIn', () => SignIn);
    Navigation.registerComponent('SignUp', () => SignUp);
    Navigation.registerComponent('Chat', () => Chat);
}