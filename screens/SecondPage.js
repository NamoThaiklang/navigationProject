import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { styles } from '../components/style'

const SecondPage = ({navigation}) => {
  return (
    <View style = {styles.constainer}>
    <Text style = {styles.textTopStyle}>
      This is The Second Page
    </Text>
    <Button
    title='GO TO FIRST PAGE'
    onPress={()=>navigation.navigate('First')} 
    />
    <Button
    title='GO TO THIRD PAGE'
    onPress={()=>navigation.navigate('Third')}
    />
    <Text style = {styles.textBottomStyle}>
        Thai-Nichi Institute of Technology
      </Text>
  </View>
  )
}

export default SecondPage
