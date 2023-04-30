import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { ButtonAT, TextInputAT, Header, Gap } from '../../components'

const SignIn = ({navigation}) => {
  return (
    <ScrollView >
      <Header title = "Sign In"/>
      <View style = {styles.bodyView}>
        <TextInputAT label = "Email Address" placeholder = "Type your email address"/>
        <Gap height={16}/>
        <TextInputAT label = "Password" placeholder = "Type your password"/>
        <Gap height={24}/>
        <ButtonAT text = "Sign In" onPress={()=>navigation.navigate("Home")}/>
        <Gap height={12}/>
        <ButtonAT text = "Create New Account" color='#8D92A3' textColor='#FFFFFF' onPress={()=>navigation.navigate("SignUp")}/>
      </View>
    </ScrollView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  bodyView : {
    flex : 1,
    backgroundColor : "#FFFFFF",
    paddingHorizontal : 24,
    marginTop : 24,
    paddingTop : 26
  }
})