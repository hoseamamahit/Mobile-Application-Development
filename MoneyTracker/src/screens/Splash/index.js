import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import logo from '../../assets/icons/logo.png'

const Splash = () => {
    return(
        <SafeAreaView style = {styles.bg}>
            <Image source = {logo} />
          <Text style = {styles.txt}>Money Tracker</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create ({
    bg : {
        backgroundColor : '#02CF8E',
        height : 750, 
        width : 420,
        alignItems : 'center',
        justifyContent : 'center'
    },
    txt : {
        fontFamily : 'Poppins',
        fontStyle : 'normal',
        fontWeight : 500,
        fontSize : 32,
        lineHeight : 48,
        color : '#020202'
    }

})
export default Splash;