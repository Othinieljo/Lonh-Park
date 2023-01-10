import React, { Component } from "react";
import { View,Text,StyleSheet,KeyboardAvoidingView,TouchableWithoutFeedback,
    Keyboard,TextInput,TouchableOpacity,Image} from "react-native";


export default class NumberScreen extends Component{
    render(){
        return(
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} onPress={Keyboard.dismiss}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
                        <View>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Parking')}>
                            <Image source={require('./../../assets/back.png')}  style={styles.img} ></Image>
                            </TouchableOpacity>
                            <Text style={styles.text}>Entrez le numéro</Text>
                        
               
                     
                        
                            <View style={styles.inner}>
                                    <TextInput placeholder="+255" keyboardType="numeric" style={styles.textInput} />

                            </View>
                            <TouchableOpacity style={styles.inner1} 
                                onPress = {()=>this.props.navigation.navigate('Payment')} >
                                    <Text style={styles.TextS} >Continuer</Text>

                                </TouchableOpacity>
                        </View>
                
                </TouchableWithoutFeedback>
                  

                </KeyboardAvoidingView>
            
        )
    }
}



const styles = StyleSheet.create({
      container : {
        flex:1,
        backgroundColor:'#FFFFFF'
      },
      text:{
        fontSize:32,
        fontFamily:'GothicA1_B',
        left:64,
        top:58
      },
      inner:{
        position:'relative',
        backgroundColor:'#EAEBEF',
        width:273,
        borderRadius:32,
        height:43,
        left:58,
        top:318,
        borderColor:'#C8C1C1',
        borderWidth:1
      },
      textInput:{
        color:'#8E7A7A',
        fontFamily:'Inconsolata',
        fontSize:14,
        top:12,
        left:10

      },
      inner1:{
        position:'relative',
        backgroundColor:'#1E0258',
        width:273,
        height:43,
        top:350,
        left:58,
        borderRadius:32
      },
      TextS:{
        fontFamily:'Inconsolata',
        fontSize:20,
        color:'#FFFFFF',
        position:'relative',
        top:10,
        textAlign:'center'
      },
      img:{
        left:10,
        top:30

      }
})