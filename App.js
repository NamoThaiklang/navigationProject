import { StyleSheet, Text, View,Button} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

function HomeScreen(){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Home!</Text>
      <Button
        title='GO TO SETTING'
        onPress={()=>navigation.navigate('Setting')} 
        />
    </View>
  )
}

function SettingScreen(){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Setting!</Text>
      <Button
        title='GO TO HOME'
        onPress={()=>navigation.navigate('Home')} 
        />
    </View>
  )
}

const Tab = createBottomTabNavigator();

function Mytab(){
  return(
    <Tab.Navigator>
      <Tab.Screen name = "Home" component={HomeScreen}/>
      <Tab.Screen name = "Setting" component={SettingScreen}/>
    </Tab.Navigator>
  )
}

const App_ = () => {
  return (
    <NavigationContainer>
      <Mytab/>
    </NavigationContainer>
  )
}

export default App_

const styles = StyleSheet.create({})