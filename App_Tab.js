import { StyleSheet, Text, View,Button} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Ionicons} from '@expo/vector-icons'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from "react-navigation-header-buttons";

const IoniconsHeaderButton = (props) => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const HomeScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="register"
            iconName="person-add"
            onPress={() => alert("ลงทะเบียน")}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Ionicons name="home" size={30} color="#008b8b" />
      <Text>Home Screen</Text>
    </View>
  );
};

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
    <Tab.Navigator
    screenOptions={({route})=>({
      tabBarIcon:(focused,color,size)=>{
        let iconName;
        if(route.name==='Home'){
          iconName = focused
          ?'ios-information-circle'
          :'ios-information-circle-outline'
        }else if(route.name==='Setting'){
          iconName = focused
          ?'ios-list'
          :'ios-list-outline'
        }
        return <Ionicons name={iconName}size={size}color={color}/>
      },
      tabBarActiveTintColor:'tomato',
      tabBarInactiveTintColor:'gray',
    })}
    >
      <Tab.Screen name = "Home" component={HomeScreen}/>
      <Tab.Screen name = "Setting" component={SettingScreen}/>
    </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      // screenOptions ={{
      //   drawerStyle:{
      //     backgroundColor:'blue',
      //     width:240
      //   }
      // }}
    >
      <Drawer.Screen name="Home" component={Mytab} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    
    <NavigationContainer>
      
      <MyDrawer/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})