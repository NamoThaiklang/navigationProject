import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { styles } from '../components/style'

const FirstPage = ({navigation}) => {
    return (
        <View style = {styles.constainer}>
        <Text style = {styles.textTopStyle}>
          This is The First Page
        </Text>
        <Button
        title='GO TO SECOND PAGE'
        onPress={()=>navigation.navigate('Second')} 
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

export default FirstPage

