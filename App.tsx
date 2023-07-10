import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackNavigator} from './src/navigation/stack/HomeStack';
import {NavigationContainer} from '@react-navigation/native';
import FavoritesScreen from './src/navigation/screens/FavoritesScreen';
import MyPlantsScreen from './src/navigation/screens/MyPlantsScreen';
import SvgHomeIcon from './src/assets/HomeIcon';
import SvgFavoriteIcon from './src/assets/FavoriteIcon';
import SvgProfile from './src/assets/ProfileIcon';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarStyle: {
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#815CFF',
        tabBarInactiveTintColor: '#444444',
        headerShown: false,
      })}>
      <Tab.Screen
        name="Plants"
        options={{
          tabBarIcon: ({focused}: any) => (
            <SvgHomeIcon
              stroke={focused ? '#815CFF' : '#444444'}
              fill={focused ? '#E5DEFF' : '#fff'}
            />
          ),
        }}
        component={HomeStackNavigator}
      />
      <Tab.Screen
        name="Favorites"
        options={{
          tabBarIcon: ({focused}: any) => (
            <SvgFavoriteIcon
              stroke={focused ? '#815CFF' : '#444444'}
              fill={focused ? '#E5DEFF' : '#fff'}
            />
          ),
        }}
        component={FavoritesScreen}
      />
      <Tab.Screen
        name="My Plants"
        options={{
          tabBarIcon: ({focused}: any) => (
            <SvgProfile
              stroke={focused ? '#815CFF' : '#444444'}
              fill={focused ? '#E5DEFF' : '#fff'}
            />
          ),
        }}
        component={MyPlantsScreen}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeMain">
        <Stack.Screen
          name="HomeMain"
          component={HomeTabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
