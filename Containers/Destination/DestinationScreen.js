import react from "react";
import { View,StyleSheet,Text,TextInput,Image} from "react-native";
import { Component } from "react/cjs/react.development";
import FlatButton from "../../Components/Button";


export default class DestinationScreen extends Component {
    render(){
        return(
            <View style ={styles.container}>
                <Text style = {styles.text}>Où allez-vous</Text>
                <TextInput style ={styles.textI} placeholder="Position actuel" placeholderTextColor='#000000'/>
                <View style= {styles.box} ></View>
                <Image source = {require('./../../assets/Ellipse1.png')} 
                style = {styles.Img} ></Image>
                <Image source = {require('./../../assets/Line1.png')}
                style = {styles.Img1}></Image>
                <View style = {styles.Img2}></View>
                <TextInput  style = {styles.textI1} placeholder="Destination" placeholderTextColor='#8B8585'/>
                <View style= {styles.box1} ></View>
                <Image source={require('./../../assets/localisation.png')} 
                style = {styles.Imgl} />
                <Text style = {styles.textM}>Depuis Map</Text>
                <Image source={require('./../../assets/localisation.png')} 
                style = {styles.Imgl} />
                <Text style = {styles.textM}>Bassam</Text>
                <FlatButton  text = "Continuer" onPress={() => this.props.navigation.push('Map')} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFFFFF',
        flex:1

    },
    text:{
        color:'#1E0258',
        fontFamily:'GothicA1_B',
        fontSize:24,
        textAlign:'center',
        top:16
    },
    textI:{
        
        fontSize:20,
        fontFamily:'GothicA1_B',
        top:40,
        left:86
        
    },
    box : {
        color:'#474545',
        borderBottomWidth:1,
        width:171,
        top:40,
        left:86
    },
    box1 :{
        color:'#474545',
        borderBottomWidth:1,
        width:171,
        top:16,
        left:86
    },
    Img:{
        top:32,
        left:60
    },
    Img1 :{
        top:40,
        left:63
    },
    Img2 : {
        width:20,
        height:20,
        borderRadius:10,
        borderWidth:3,
        borderColor:'#F82020',
        top:45,
        left:58
        
        
    },
    textI1 :{
         top:15,
         fontFamily:'GothicA1_B',
         fontSize:20,
         left:86,

    },
    Imgl :{
        width:20,
        height:20,
        left :57,
        top:40
         
    },
    textM :{
        fontSize:15,
        fontFamily:'GothicA1_B',
        top:25,
        left:86
    }
    

})