import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import icHome from '../../../assets/icons/ic_home.png';
import icListrn from '../../../assets/icons/ic_order_normal.png'
import { Gap } from '../../atoms';

const Footer = () => {
  return (
        <View style = {styles.imgView}>
            <TouchableOpacity>
                <Image style = {styles.icView} source={icHome}/>
            </TouchableOpacity>
            <Gap width={150}/>
            <TouchableOpacity>
                <Image style = {styles.icView} source={icListrn}/>
            </TouchableOpacity>
        </View>
  )
}

styles = StyleSheet.create({
    imgView : {
        height : 60,
        flexDirection : 'row',
        backgroundColor : '#FFFFFF',
        alignItems : 'center',
        justifyContent : 'center',
        marginTop : 25,
    },

    icView : {
        width : 28,
        height : 32,
    },
})

export default Footer;