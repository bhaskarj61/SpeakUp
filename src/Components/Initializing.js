import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage
} from 'react-native';
// import { goToAuth, goHome } from '../Components/Navigation'
import { USER_KEY } from '../Utilities/Config'
import { Navigation } from 'react-native-navigation';

const goToAuth = () => Navigation.setRoot({
  root: {
    bottomTabs: {
      id: 'BottomTabsId',
      children: [
        {
          component: {
            name: 'SignIn',
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'Sign In',
                icon: require('../Assets/Images/SignIn.png')
              }
            }
          },
        },
        {
          component: {
            name: 'SignUp',
            options: {
              bottomTab: {
                text: 'Sign Up',
                fontSize: 12,
                icon: require('../Assets/Images/SignUp.png')
              }
            }
          },
        },
      ],
    }
  }
});

 const goHome = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'App',
      children: [
        {
          component: {
            name: 'Home',
          }
        }
    ],
    }
  }
})


export default class Initializing extends React.Component {
    async componentDidMount() {
      try {
        const user = await AsyncStorage.getItem(USER_KEY)
        console.log('user: ', user)
        if (user) {
          goHome()
        } else {
          goToAuth()
        }
      } catch (err) {
        console.log('error: ', err)
        goToAuth()
      }
    }
  
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Loading...</Text>
        </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    welcome: {
      fontSize: 28
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })