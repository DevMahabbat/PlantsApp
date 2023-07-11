import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackNavigator} from './src/navigation/stack/HomeStack';
import {NavigationContainer} from '@react-navigation/native';
import FavoritesScreen from './src/navigation/screens/FavoritesScreen';
import MyPlantsScreen from './src/navigation/screens/MyPlantsScreen';
import SvgHomeIcon from './src/assets/HomeIcon';
import SvgFavoriteIcon from './src/assets/FavoriteIcon';
import SvgProfile from './src/assets/ProfileIcon';
import SplashScreen from 'react-native-splash-screen';

import OnboardingScreen from './src/navigation/screens/OnboardingScreen';


const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);


  const Stack = createNativeStackNavigator()

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeMain"
          component={HomeStackNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
</NavigationContainer>

  );
};

export default App;

