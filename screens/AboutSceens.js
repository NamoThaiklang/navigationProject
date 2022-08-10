import { View, Text } from 'react-native'
import React from 'react'

const AboutSceens = ({route}) => {
    // const {email} = route.params;
  return (
    <View style ={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>AboutScreen</Text>
      {/* <Text>Email:{email}</Text> */}
      <Text>Email:{route.params.email}</Text>
    </View>
  )
}

export default AboutSceens