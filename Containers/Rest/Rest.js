import react,{Component} from "react";
import { View,StyleSheet,TouchableOpacity,Image,Text} from "react-native";

const heure = 0
const second = 5
const minut = 0
export default class RestScreen extends Component {
    render(){
        
        return(
            <View style = {styles.container}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Parking')}>
                     <Image source={require('./../../assets/back.png')}  style={styles.img} ></Image>
                </TouchableOpacity>
                <Text style={styles.text}>Temps restant</Text>
                <View style = {styles.box}>
                    <Text style={styles.text1}>{heure} </Text>
                    <Text style={styles.txt} >Heure</Text>
                </View>
                <View style = {styles.box1}>
                    <Text style={styles.text1}>{minut} </Text>
                    <Text style={styles.txt}>Min</Text>
                </View>
                <View style = {styles.box2}>
                    <Text style={styles.text1}>{second} </Text>
                    <Text style={styles.txt}>Sec</Text>
                </View>
                <TouchableOpacity style={styles.inner1} onPress={()=>this.props.navigation.navigate('More')}>
         
                     <Text style={styles.TextS} >Augmenter mon temps</Text>
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
    img:{
        left:10,
        top:30

      },
      text:{
        fontSize:32,
        fontFamily:'GothicA1_B',
        top:58,
        textAlign:'center'

      },
      box:{
        width:83,
        height:72,
        color:'#1E0258',
        borderWidth:1,
        top:250,
        left:40

      },
      text1:{
        fontSize:36,
        top:10,
        color:'#1E0258',
        textAlign:'center'
      },
      box1:{
        width:83,
        height:72,
        color:'#1E0258',
        borderWidth:1,
        top:180,
        left:163

      },
      box2:{
        width:83,
        height:72,
        color:'#1E0258',
        borderWidth:1,
        top:110,
        left:283

      },
      txt:{
        fontSize:24,
        fontFamily:'GothicA1_B',
        top:40,
        textAlign:'center'

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
})