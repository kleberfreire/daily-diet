import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CreateMeal} from '@screens/CreateMeal';
import {Home} from '@screens/Home';
import {PercentPage} from '@screens/PercentPage';

export function AppRouters() {
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="home" component={Home} />
      <Screen name="percentPage" component={PercentPage} />
      <Screen name="createMeal" component={CreateMeal} />
    </Navigator>
  );
}
