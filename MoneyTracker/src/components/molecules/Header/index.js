import { Image, StyleSheet, Text, View, TouchableOpacity, Touchable } from 'react-native'
import React from 'react'
import IcBack from '../../../assets/icons/arrow_back.png'
import IcProf from '../../../assets/icons/ic_profile_normal.png'

const Header = ({isProfile,onBack,title}) => {
  return (
    <View style = {styles.mrgn}>
      {onBack && (    
        <TouchableOpacity onPress={onBack}>
          <View style={styles.back} >
            <Image source={IcBack}/>
          </View>
        </TouchableOpacity>
      )}
      <View style={styles.headerView}>
        <Text style = {styles.txt}>{title}</Text>
        {isProfile && (
          <View>  
            <Text style = {styles.subHead}>Track Your Money</Text>
            <Image style = {styles.image} source={IcProf}/>
          </View>
        )}
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    mrgn : {
      height : 108,
      alignItems : 'center',
      flexDirection : 'row',
      backgroundColor : '#FFFFFF'
    },
    back : {
      marginLeft : 24,
      padding : 10,
    },

    headerView : {
      paddingLeft : 24
    },

    txt : {
        fontFamily : 'Poppins',
        fontStyle : 'normal',
        fontWeight : 500,
        fontSize : 27,
        color : '#020202',
    },

    subHead : {
      fontFamily : 'Poppins',
      fontStyle : 'normal',
      fontWeight : 300,
      fontSize : 17,
      lineHeight : 21
    },

    image : {
      position : 'absolute',
      height : 50,
      width : 50,
      borderRadius : 5,
      left : 300,
      bottom : 5
    }
})