import React from "react";
import { View,Text,TouchableOpacity} from "react-native";
import { Ionicons, AntDesign,SimpleLineIcons,Feather,FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export const Rodape = () =>{
  
    const navigation = useNavigation();
return(

   
   <View style={{width:"100%",height:70, flexDirection: "row",justifyContent:"center",alignItems:"stretch"}}  >
 
    <TouchableOpacity onPress = {
            () => navigation.navigate("AmazonLogin")}>
    <View style={{flexGrow:1,backgroundColor:"black",justifyContent:'space-between',alignItems:"center", padding:10}} >
    <Feather name="home" size={29} color="#09d" /><Text  style={{fontSize:11, color:"#09d"}}>Início</Text></View>
    </TouchableOpacity>
   
    <View style={{flexGrow:1,backgroundColor:"black",justifyContent:'space-between',alignItems:"center", padding:10}} >
    <SimpleLineIcons name="bag" size={24} color="#fff" /><Text  style={{fontSize:11, color:"#fff"}}>Loja</Text></View>
    
    
    <View style={{flexGrow:1,backgroundColor:"black",justifyContent:'space-between',alignItems:"center", padding:10}} >
    <Ionicons name="search" size={24} color="#fff" /><Text  style={{fontSize:11, color:"#fff"}}>Pesquisar</Text></View>
    
    
    <View style={{flexGrow:1,backgroundColor:"black",justifyContent:'space-between',alignItems:"center", padding:10}} >
    <AntDesign name="download" size={24} color="#fff" /><Text  style={{fontSize:11, color:"#fff"}}>Downloads</Text></View>
    
   
   
    <View  style={{flexGrow:1,backgroundColor:"black",justifyContent:'space-between',alignItems:"center", padding:10}} >
    <FontAwesome  name="user-circle" size={29} color="green" /><Text  style={{fontSize:11, color:"#fff"}}>Minha área</Text>
    </View>
   
    
    </View>




);


}