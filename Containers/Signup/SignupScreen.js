import react from "react";
import { View,StyleSheet, ImageBackground,Image,Text,KeyboardAvoidingView,
    TouchableWithoutFeedback,Platform,Keyboard,TextInput,Button,SafeAreaView} from "react-native";
import { Component } from "react/cjs/react.production.min";



export default class SignupScreen extends Component {
    render(){
        return(
            <View style={styles.Container}>
            <ImageBackground
            source={require('./../../assets/bgd1.png')} resizeMode="cover" style={styles.image}>
                <Image source={require('./../../assets/logo4.png')}
                    style={styles.Image}></Image>
                    <Text style={styles.Text}>S'inscrire</Text>
                    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
                     style={styles.container}>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <View>
                                <View style={styles.inner}>
                                  <TextInput placeholder="Nom & Prénom(s)" style={styles.TextInput}
                                  />
                                </View>
                                <View style={styles.inner2}>
                                    <TextInput placeholder="Immatriculation" style={styles.TextInput}/>


                                </View>
                                <View style={styles.inner3}>
                                    <TextInput placeholder="+255" keyboardType="numeric" style={styles.TextInput} />

                                </View>
                                <View style={styles.inner4}>
                                    <Text style={styles.TextS}>S'INSCRIRE</Text>

                                </View>
                                <Text style={styles.text1}>Déjà un compte ?</Text>
                                
                                <Text style={styles.text2}  onPress={() => this.props.navigation.navigate('Login') } > Se connecter</Text>
                                
                            </View>
                            
                            
                        

                        </TouchableWithoutFeedback>
                  

                    </KeyboardAvoidingView>
            </ImageBackground>
            </View>
        )
    }
}


const styles = StyleSheet.create({
        Container:{
            flex:1,
            },
        image :{
            flex: 1,
            justifyContent: "center",
           },
           Image:{
            position:"relative",
            top:-160,
            left:157
           },
           Text:{
            color:'#FFFFFF',
            fontFamily:'GothicA1_B',
            fontSize:24,
            position:'relative',
            top:-130,
            left:144,
            width:115
           },
           inner:{
            position:'relative',
            backgroundColor:'rgba(240, 238, 244, 0.3)',
            width:273,
            height:43,
            top:-90,
            left:71,
            borderRadius:32

           },
           inner2:{
            position:'relative',
            backgroundColor:'rgba(240, 238, 244, 0.3)',
            width:273,
            height:43,
            top:-70,
            left:71,
            borderRadius:32

           },
           inner3:{
            position:'relative',
            backgroundColor:'rgba(240, 238, 244, 0.3)',
            width:273,
            height:43,
            top:-47,
            left:71,
            borderRadius:32
           },
           inner4:{
            position:'relative',
            backgroundColor:'#FFFFFF',
            width:273,
            height:43,
            top:1,
            left:71,
            borderRadius:32
             
           },
           TextInput :{
            fontFamily:'Inconsolata',
            fontSize:15,
            color:'#B0A5A5',
            position:'relative',
            top:13,
            left:30
           
           },
           TextS:{
            fontFamily:'Inconsolata',
            fontSize:20,
            color:'#1E0258',
            position:'relative',
            top:10,
            textAlign:'center'
           },
           text1:{
             color:'#FFFFFF',
             fontSize:20,
             position:"relative",
             fontFamily:'Inconsolata',
             top:120,
             left:70
           },
           text2:{
            color:'#04FDEE',
            fontSize:20,
            position:"relative",
            fontFamily:'Inconsolata',
            top:98,
            left:240
           }

})

