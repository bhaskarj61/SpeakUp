/** @format */

import { Navigation } from "react-native-navigation";
import { registerScreens } from './src/Components/Screens'

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: 'Initializing'
        }
      },
    });
  });
