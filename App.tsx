import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import OnboardingScreen from './src/navigation/screens/OnboardingScreen';
import {HomeTabNavigator} from './src/navigation/navigator/HomeTabNavigator';
import {Provider} from 'react-redux';
import store from './src/redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const App = () => {
  const [firstTime, setFirstTime] = useState<boolean>(true);
  useEffect(() => {
    AsyncStorage.getItem('FIRST_TIME').then(res => {
      console.log(res, typeof res);

      if (res == 'null') {
        setFirstTime(true);
      }
    });

    SplashScreen.hide();
  }, []);

  if (firstTime) {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Onboarding">
            <Stack.Screen
              name="Onboarding"
              component={OnboardingScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="HomeMain"
              component={HomeTabNavigator}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="HomeMain">
            <Stack.Screen
              name="Onboarding"
              component={OnboardingScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="HomeMain"
              component={HomeTabNavigator}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
};

export default App;
