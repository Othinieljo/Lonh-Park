import { createStackNavigator } from '@react-navigation/stack';
import Main from '../../Containers/App/Main';
import LoginScreen from '../../Containers/Login/LoginScreen';
import SignupScreen from '../../Containers/Signup/SignupScreen';
import DestinationScreen from '../../Containers/Destination/DestinationScreen';
import MapScreen from '../../Containers/Map/MapScreen';
import ChoiceScreen from '../../Containers/Choice/ChoiceScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

 function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main}  options= {{headerShown:false}} />
      <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown:false}} />
      <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown:false}} />
      <Stack.Screen name="Destination" component={DestinationScreen}  options={{headerShown:false}} />
      <Stack.Screen name="Map" component={MapScreen}  options={{headerShown:false}} />
      <Stack.Screen name="Choice" component={ChoiceScreen}  options={{headerShown:false}} />


    </Stack.Navigator>
  );
}

export default function Navigator(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}