import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '@screens/Home';
import {PercentPage} from '@screens/PercentPage';

export function AppRouters() {
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="home" component={Home} />
      <Screen name="percentPage" component={PercentPage} />
    </Navigator>
  );
}
