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
import TrashEmptyScreen from './src/trashemptyscreen/TrashEmptyScreen';
import OpenScreen from './src/navigation/screens/Open/OpenScreen';


const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);


  const WholeStack = createNativeStackNavigator()

  return (
  <NavigationContainer>
    <WholeStack.Navigator>
        <WholeStack.Screen name="OpenScreen"
          component={OpenScreen}
          options={{ headerShown: false }}
          />
        <WholeStack.Screen 
        component={HomeStackNavigator}
        name="HomeStack"/>
    </WholeStack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
