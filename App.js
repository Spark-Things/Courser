import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './src/screens/About';
import Contect from './src/screens/Contect';
import Course from './src/screens/Course';
import UserData from './src/screens/UserData';
import Menu from './src/screens/Menu';

import { 
  AveriaLibre_300Light,
  AveriaLibre_300Light_Italic,
  AveriaLibre_400Regular,
  AveriaLibre_400Regular_Italic,
  AveriaLibre_700Bold,
  AveriaLibre_700Bold_Italic 
} from '@expo-google-fonts/averia-libre';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
        {(props) => <Home {...props} cn={"       Spark Education "} />}
        </Stack.Screen>
    
      <Stack.Screen name="About" component={About} 
         options={{
           headerTitleStyle:{
             fontSize: 23,
           },
           headerTitle:"About us",
           headerTitleAlign: "center",
           headerStyle:"AveriaLibre_400Regular"
         }}
      
      />

      <Stack.Screen name="Contact" component={Contect}
             options={{
               headerTitleStyle:{
                 fontSize: 23,
               },
               headerTitleAlign: "center",
             }} />

      <Stack.Screen name="Course" component={Course}
              options={{
                headerTitleStyle:{
                  fontSize: 23,
                },
                headerTitle:"Courses",
                headerTitleAlign: "center",
      }} />

      <Stack.Screen name="User" component={UserData}
               options={{
                 headerTitleStyle:{
                   fontSize: 23,
                 },
                 headerTitle:"Users",
                 headerTitleAlign: "center",
      }} />

    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
