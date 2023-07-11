import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import MyPlantsScreen from '../screens/MyPlantsScreen';
import HomeDetailsScreen from '../screens/HomeDetailsScreen';

type HomeStackParamList = {
  HomeScreen: undefined;
  HomeDetails: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export const HomeStackNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        // Set the desired background color
      }}>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="HomeDetails"
        component={HomeDetailsScreen}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};
