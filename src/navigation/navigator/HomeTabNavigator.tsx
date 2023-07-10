import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SvgHomeIcon from '../../assets/HomeIcon';
import {HomeStackNavigator} from '../stack/HomeStack';
import SvgFavoriteIcon from '../../assets/FavoriteIcon';
import FavoritesScreen from '../screens/FavoritesScreen';
import SvgProfile from '../../assets/ProfileIcon';
import MyPlantsScreen from '../screens/MyPlantsScreen';

const Tab = createBottomTabNavigator();
export const HomeTabNavigator: React.FC = () => {
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
