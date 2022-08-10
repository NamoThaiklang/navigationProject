import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import AboutSceens from './screens/AboutSceens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='Home'
      screenOptions={{
        headerStyle:{backgroundColor:'#a52a2a'},
        headerTintColor:'#ffff',
        headerTitleStyle:{fontWeight:'bold',fontSize:30}
      }}
      >
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='About' component={AboutSceens}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

