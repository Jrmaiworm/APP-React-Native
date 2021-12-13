import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import { Rodape } from "../components/Footer";
import { Cabecalho } from "../components/Header";
import { Filmes, Series,Recomendado,Principal,Acao,Terror,Drama } from "../components/Card";

export const Login = () => {
    const navigation = useNavigation();


    return (

        

    <View style = { styles.container } >
        <Cabecalho/>
     
<ScrollView>

            <View style = {{ width: "100%", height: 50, flexDirection: "row", justifyContent: "center", alignItems: "stretch", margin: 5 }}>
                <View style = {{ flexGrow: 1, justifyContent: "center", alignItems: "center", borderBottomColor: "#fff", borderWidth: 2, borderColor: "#333" }}>
                <Text style = { styles.text } > Página inicial </Text>
                </View>
            
                <View style = {{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style = { styles.text1 } > Séries </Text>
                </View >
            
                <View style = {{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style = { styles.text1 } > Filmes </Text>
                </View >
        
                <View style = {{ flexGrow: 1, justifyContent: "center", alignItems: "center" }} >
                <Text style = { styles.text1 } > Infantil </Text>
                </View >
                <StatusBar style = "light" />
            </View>
                <Principal/>
{/* 
        <View>
        <Image style = {{ width: "100%", height: 200 }}
        source = {{ uri: "https://www.arrobanerd.com.br/wp-content/uploads/2021/11/a-roda-do-tempo-the-wheel-of-time-tv-review-cri%CC%81tica.jpeg" }}/>  
        </View > */}

        <Text style ={styles.incluido}>Incluido com Prime</Text>
        <Text style = { styles.text2 } > Continuar assistindo </Text>
          <Filmes/>
        
       
        <Text style ={styles.incluido}>Incluido com Prime</Text>
        <Text style = { styles.text2 } > Amazon Originals e Exclusivo</Text>
          <Series/>
 
         
        <Text style = { styles.text3 } > Filmes recomendados </Text>
          <Recomendado/>

        <Text style ={styles.incluido}>Incluido com Prime</Text>
        <Text style = { styles.text2 } > Filmes de ação e aventura</Text>
         <Acao/>

        <Text style ={styles.incluido}>Incluido com Prime</Text>
        <Text style = { styles.text2 } > Filmes de terror </Text>
         <Terror/>   
        
        <Text style ={styles.incluido}>Incluido com Prime</Text>
        <Text style = { styles.text2 } > Filmes dramáticos</Text>
         <Drama/>
</ScrollView>

        <Rodape/>


    </View>

        
    );

};










const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        padding: 0


    },
    text: {
        color: "#fff"
    },

    text1: {
        color: "#666"
    },

    img: {
        width: "100%",

        height: 60

    },
    text2: {
        color: "#fff",
        fontSize: 20,
        margin: 0,
        marginBottom:20,
        marginLeft:17,

    },
    incluido:{
        color: "#09d",
        marginLeft: 22,
        marginBottom:0,
    fontSize:12,
    marginTop:20
    },

    text3:{
        color: "#fff",
        fontSize: 20,
       
        margin:20
      

    }
});