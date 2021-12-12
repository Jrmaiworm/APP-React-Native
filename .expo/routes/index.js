import React from "react";
import {Login} from  "../screens/Home"

import {createStackNavigator} from "@react-navigation/stack";
import {AmazonLogin} from "../screens/Amazon-Login";
const Stack = createStackNavigator();

export const Routes=()=>{
    return(

<Stack.Navigator>

<Stack.Screen
        name="AmazonLogin"
        component={AmazonLogin}
        options={{headerShown:false,}}/>
   

    <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown:false,}}/>
        


</Stack.Navigator>



    );
}