import { Component} from "react";
import { View,StyleSheet,Image,Text, TouchableOpacity, } from "react-native";
import { NavigationContainer, useNavigationContainerRef,navigation } from '@react-navigation/native';
import SignupScreen from "../Signup/SignupScreen";

 export default function Main({navigation}) {
    
    
        
        
        
        return(
            <View style={styles.container}>
                <View style={styles.box}>
                    <Image source={require('./../../assets/carA.png')}
                    style={styles.Image}></Image>
                </View>
                <Text style={styles.text}>Bienvenue sur LP mobile</Text>
                
                 <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Signup')}
                >
                    <Text style={styles.text2}>Commencer</Text>
                </TouchableOpacity>
                
            </View>

        )
    }



const styles = StyleSheet.create({
 container : {
    backgroundColor:'#FFFFFF',
    flex:1
 },
 box: {
    
    
width: 420,
height: 264,
left: 0,
top: 0,
backgroundColor:'#1E0258',
borderTopStartRadius:0,
borderTopEndRadius:0,
borderBottomStartRadius:155,
borderBottomEndRadius:155,



 },
 text:{
    position:"relative",
    marginTop:200,
    textAlign:"center",
    fontFamily:'GothicA1_B',
    fontSize:24,
    backgroundColor:'#FFFFFF'
 },
 Image :{
    marginLeft:120
 },
 button:{
    backgroundColor:'#1E0258',
    width:273,
    height:43,
    position:'absolute',
    left:68,
    top:578,
    borderRadius:32,
    color:'#1E0258'
    
 },
 text2:{
    color:'#FFFFFF',
    fontSize:20,
    position:'absolute',
    left:90,
    top:9,
    fontFamily:'Inconsolata',
    width:90,
    height:21,
    
 }
})


 

