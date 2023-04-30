import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { CashonHand, CashonBank, Home, SignIn, SignUp } from '../src/screens';


const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
            name="SignIn" 
            component={SignIn}
            options={{headerShown : false}}
            />
            <Stack.Screen 
            name="SignUp" 
            component={SignUp}
            options={{headerShown : false}}
            />
            <Stack.Screen 
            name="Home" 
            component={Home}
            options={{headerShown : false}}
            />
            <Stack.Screen 
            name="CashonHand" 
            component={CashonHand}
            options={{headerShown : false}}
            />
            <Stack.Screen 
            name="CashonBank" 
            component={CashonBank}
            options={{headerShown : false}}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router