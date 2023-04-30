import React,{useEffect} from 'react';
import { SafeAreaView,StatusBar,useColorScheme,View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Router from './router';

const App = () => {
  useEffect(()=>{
    SplashScreen.hide();
    },[])
  return (
    <Router/>
  );
}

export default App;
