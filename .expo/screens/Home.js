import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import { Rodape } from "../components/Footer";
import { Cabecalho } from "../components/Header";

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

        <View>
        <Image style = {{ width: "100%", height: 200 }}
        source = {{ uri: "https://www.arrobanerd.com.br/wp-content/uploads/2021/11/a-roda-do-tempo-the-wheel-of-time-tv-review-cri%CC%81tica.jpeg" }}/>  
        </View >

        <Text style = { styles.text2 } > Continuar assistindo </Text>


     
        <View style = {{ flexDirection: "row",margin:10 }}>

        <Image style = {{ width: "60%", height: 130, borderRadius: 5, borderColor: "#fff", borderWidth: 1 ,margin:5 }}
        source = {{ uri: "https://media.press.amazonstudios.com/userfiles/images/Fleabag/Season_2/Key_Art/FLBG_S2_00684_1920x1080_MOCEAN_FINAL_thumb.jpg"}} />  


        <Image style = {{ width: "60%", height: 130, borderRadius: 5, borderColor: "#fff", borderWidth: 1  ,margin:5}}
        source = {{uri: "https://www.oficinadanet.com.br/imagens/post/28028/bosch.jpg"}}/>  

        </View>
       



        <Text style = { styles.text2 } > Amazon Originals e Exclusivos </Text>


 
        <View style = {{ flexDirection: "row",margin:10 }} >

        <Image style = {{ width: "60%", height: 130, borderRadius: 5, borderColor: "#fff", borderWidth: 1 ,margin:5 }}
        source = {{uri: "https://nerdlicious.com.br/wp-content/uploads/2019/08/carnival-row-amazon-prime.jpg" }}/>  


        <Image style = {{ width: "60%", height: 130, borderRadius: 5, borderColor: "#fff", borderWidth: 1 ,margin:5 }}
        source = {{ uri: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/b24f2fb3e36490d6baf0676d156ba47f9e75e0397355a774a309b6572197c67b._UY500_UX667_RI_V_TTW_.jpg"}} />  

        </View>
        

        <Text style = { styles.text2 } > Filmes recomendados </Text>

        

     
        <View style = {{ flexDirection: "row",margin:10 }} >

        <Image style = {{ width: "60%", height: 130, borderRadius: 5, borderColor: "#fff", borderWidth: 1, flexDirection: "row" ,margin:5}}
        source = {{
                uri: "https://www.oficinadanet.com.br/imagens/post/28028/o-patriota.jpg"}} />  


        <Image style = {{ width: "60%", height: 130, borderRadius: 5, borderColor: "#fff", borderWidth: 1 ,margin:5 }}
        source = {{ uri: "https://news.causewaycoastcommunity.co.uk/content/images/2021/06/48145_1_THE_ICE_ROAD_AMAZON_FILM_1920x1080_V5-700x394.jpeg" }}/>  

        </View> 

        {/* <TouchableOpacity onPress = {
            () => navigation.navigate("AmazonLogin")}
        style = {{ backgroundColor: " rgba(235,163,6,1) ", padding: 15, borderRadius: 3, margin: 20, paddingBottom: 20, paddingTop: 15 }} >
        <Text style = {{ textAlign: "center", color: "#fff" }} > Voltar </Text> 
        </TouchableOpacity > */}

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
        margin: 20
    },
});