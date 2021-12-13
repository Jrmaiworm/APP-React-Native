import React, {useState} from "react";
import {View,Text,ScrollView,Image,TextInput,TouchableOpacity,StyleSheet} from "react-native";
import {Link, useNavigation} from "@react-navigation/native"
import Checkbox from 'expo-checkbox';
import {LinearGradient} from 'expo-linear-gradient';
import {Linha} from "../components/Separador";
import UselessTextInputMultiline  from "../components/Input";


export const AmazonLogin=()=>{
const navigation=useNavigation();
const [isChecked, setChecked] = useState(false);

return(

    <View style={{flex:1, backgroundColor:"#363636"}}>
      <ScrollView >   
        <View style={{ resizeMode:"contain" ,alignItems:"center", justifyContent:"center"  }}>
        <Image source={require("../../assets/Amazon.png")}  style={{ width: 100, height: 100,resizeMode:"contain", alignItems:"center" }} />     
        </View>
        
        <View style={{alignItems:"stretch"}}>
        <Text style={{textAlign:"left",color:"#fff",fontSize:30,fontWeight:"bold",marginStart:25 }}>Fazer login</Text>
        </View>   

        <View style={{alignItems:"stretch"}}>
          <Text style={{textAlign:"right",color:"#09d",fontSize:15, marginEnd:25}}>Esqueci a Senha </Text>
          <View style={{alignItems:"center", justifyContent:"center"  }}>
            <TextInput   style={styles.input1}/>
            <TextInput style={styles.input2}/>
            
          </View>
        </View>  

        {/* <UselessTextInputMultiline/> */}

        <View style={styles.section}>
          <Checkbox style={styles.checkbox} value={isChecked} onValueChange ={setChecked} /> 
          <Text style={styles.paragraph}>Mostrar senha</Text> 
        </View>
        
        <TouchableOpacity 
          onPress={()=> navigation.navigate("Login")}
          style={{backgroundColor:" rgba(235,163,6,1) ",padding:5,borderRadius:3,margin:20,paddingBottom:20,paddingTop:15 }}>
          <Text style={{textAlign:"center", color:"#fff"}}>Fazer login</Text>
        </TouchableOpacity>
        
       
        <Text style={{margin:20 , color:"#fff"}}>Ao continuar, você concorda com as <Text style={{color:"#09d"}}>Condições de Uso</Text> Condições de Uso e com a <Text style={{color:"#09d"}}> Política de Privacidade</Text> da Amazon.</Text>
   
       <View style={{flexDirection:"row" ,justifyContent:"space-between",width:"100%", alignItems:"center"}}>
       <Linha/>
          <Text style={{ margin:10 ,textAlign:"center", color:"#fff"}}> É novo na Amazon?</Text>
        <Linha/>
       </View>  
      
        <TouchableOpacity 
          
          style={{borderWidth:1, borderColor:"#808080",backgroundColor:"#4F4F4F",padding:5,borderRadius:3,margin:20,paddingBottom:20,paddingTop:15 }}>
          <Text style={{textAlign:"center", color:"#fff"}}>Criar uma nova conta Amazon</Text>
        </TouchableOpacity>
         
         
        <LinearGradient colors={['#4F4F4F', '#333', '#363636']}>
         <View style={{width:"100%",height:70,marginTop:20, alignItems:"center",justifyContent:"center"}}> 
       
          <Text style={{textAlign:"center", color:"#09d"}}>Condições de Uso         Política de Privacidade</Text>
          <Text style={{textAlign:"center", color:"#09d"}}>Ajuda</Text>
        
         </View>
        </LinearGradient>
       
     
            </ScrollView>  
     </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080',
    justifyContent:"center",
    alignItems:"center",
   
  },
text:{
  color:"white",
 textAlign:"center",
 margin:30 
}, 

checkbox: {
  margin: 8,
},
section: {
  flexDirection: 'row',
  alignItems: 'center',
  margin: 20
},
paragraph: {
  fontSize: 15,color:"#fff"
},


input1:{
  backgroundColor:"#4F4F4F",
  width:300,
  height:40 ,
  marginTop:10,
   borderWidth:1,
   borderColor:"#808080",
    borderRadius:5

},

input2:{
  backgroundColor:"#4F4F4F",
  width:300,
  height:40 ,
  marginTop:10,
   borderWidth:1,
   borderColor:"orange",
    borderRadius:5

},

});