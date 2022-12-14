import react from "react";
import { View,StyleSheet,Text,TouchableOpacity, useWindowDimensions } from "react-native";
import { Component } from "react/cjs/react.production.min";
import MapView from 'react-native-maps';

export default class MapScreen extends Component {
    render(){
        return(
            <View style = {StyleSheet.container}>    
                < MapView style = {styles.map}
                     initialRegion = { {           
                    latitude : 5.333494066377182, 
                    longitude : -4.02024681620057, 
                    latitudeDelta : 0.122 , 
                    longitudeDelta : 0.0421 , 
                  }} 
                  />
                <View style = {styles.box}>
                    <Text style = {styles.text}>Pret ?</Text>
                    <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Choice')}>
           <View style = {styles.Button}>
        <Text style = {styles.ButtonText}> Continuer </Text>
        
           </View>
       </TouchableOpacity>
                </View>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container : {
        flex:1,
        
        
    },
    box : {
        backgroundColor:'#1E0258',
        width:420,
        height:300.2,
        top:500,
        borderTopStartRadius:67,
        borderTopEndRadius:66,
        borderBottomStartRadius:0,
        borderBottomEndRadius:0,
        
    },
    text : {
        color : '#FFFFFF',
        fontSize: 36,
        fontFamily:'GothicA1_B',
        textAlign:'center',
        top:33

    },
    Button :{
        backgroundColor:'#FFFFFF',
        top:63,
        width:273,
        height:43,
        borderRadius:32,
        alignSelf:'center',

        
        
        
        
  
  
      },
      ButtonText:{
          color:'#160144',
          fontSize:20,
          fontFamily:'Inconsolata',
          textAlign:'center',
          top:10
          
          
  
      },
      map : {
        ...StyleSheet.absoluteFillObject,
        flex:1,
        height:600
      }
})