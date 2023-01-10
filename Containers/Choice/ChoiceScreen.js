import { Component } from "react";
import { View,StyleSheet } from "react-native";
import MapView from 'react-native-maps';
import FlatListB from "../../Components/FlatList";

export default class ChoiceScreen extends Component{
    render(){
        return(
            <View style = {styles.container}>
                < MapView style = {styles.map}
                     initialRegion = { {           
                    latitude : 5.333494066377182, 
                    longitude : -4.02024681620057, 
                    latitudeDelta : 0.122 , 
                    longitudeDelta : 0.0421 , 
                  }} 
                  />
                <View style = {styles.box}>
                    <FlatListB onPress ={()=>this.props.navigation.navigate('Parking')}  />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container : {
       flex:1,
       backgroundColor:'#000000',

    },
    box : {
        width:411,
        height:264,
        backgroundColor:"#FFFFFF",
        top:469,
        borderTopStartRadius:50,
        borderTopEndRadius:50,
        borderBottomStartRadius:0,
        borderBottomEndRadius:0,
        

    },
    map : {
        ...StyleSheet.absoluteFillObject,
        flex:1,
        height:800
      }
})