import react, { Component } from "react";
import { View ,StyleSheet,Text,TouchableOpacity} from "react-native";


export default class ParkingScreen extends Component {
    render(){
        return(
            <View style={styles.container} >
                <TouchableOpacity style={styles.box} onPress={()=>this.props.navigation.navigate('Number')}>
                 <Text style={styles.text}>Payer</Text>
                </TouchableOpacity>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'

        
    },
    box:{
        width:133,
        height:48,
        backgroundColor:'#F82080',
        borderRadius:21,
        top:630,
        left:200
    },
    text:{
        fontSize:24,
        fontFamily:'GothicA1_B',
        textAlign:'center',
        top:10,
        color:'#FFFFFF'
    }
})