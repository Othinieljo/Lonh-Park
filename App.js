
import { FontDisplay, useFonts } from 'expo-font';

import Main from './Containers/App/Main';
import SignupScreen from './Containers/Signup/SignupScreen';
import LoginScreen from './Containers/Login/LoginScreen';
import Navigator from './src/Navigations/Navigator';










const  App = () => {
  const [loaded] = useFonts({
    GothicA1: require('./assets/Fonts/GothicA1-Black.ttf'),
    GothicA1_B: require('./assets/Fonts/GothicA1-Bold.ttf'),
    Inconsolata: require('./assets/Fonts/Inconsolata-Black.ttf'),
    Inconsolata_B: require('./assets/Fonts/Inconsolata-Bold.ttf')
    
    
  });
  
  if (!loaded) {
    return null;
  }
  return(
    <Navigator/>
    
  )
  
   }
   
export default App;


