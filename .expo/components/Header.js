import React from "react"
import { View, Image } from "react-native"


export const Cabecalho = () => {

        return (

            <View style = {{ alignItems: 'center', justifyContent: 'center', }} >
        <Image source = { require("../../assets/prime.png") }
        style = {{ width: 80, height: 80, resizeMode: "contain", alignItems: "center", marginTop: 10 }}/>   
         </View>

         ); }