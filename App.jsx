import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";

import Home from "./src/components/screens/Home"
import Contact from "./src/components/screens/Contact"
import Profile from "./src/components/screens/Profile"

const Drawer = createDrawerNavigator();

 function App() {
  
  return (
    <NavigationContainer>
      <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Contact" component={Contact} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
<StatusBar style='auto'/>
    </NavigationContainer>
  )}
  export default App;