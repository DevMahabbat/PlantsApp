import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import MyPlantsScreen from '../screens/MyPlantsScreen';

type HomeStackParamList = {
  HomeScreen: undefined;
  FavoritesScreen: undefined;
  MyPlantsScreen: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export const HomeStackNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="MyPlantsScreen"
        component={MyPlantsScreen}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};
