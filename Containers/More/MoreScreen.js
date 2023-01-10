import React, { useState} from "react";
import { StyleSheet,View,TouchableOpacity,Image,Text,TextInput } from "react-native";



const MoreScreen = ({navigation}) =>{
           const [time,setTime] = useState(0);

    const MoreTime = () =>{
            setTime(time + 1)
    };
    const LessTime = () =>{
      if (time == 0) {

      }else {
        setTime(time - 1)
      }
      
      
};

        return(

        
            <View style = {styles.container}>
                <TouchableOpacity onPress={() =>navigation.navigate('Rest')} >
                     <Image source={require('./../../assets/back.png')}  style={styles.img} ></Image>
                </TouchableOpacity >
                <Text style={styles.text}>Augmenter mon temps</Text>
                <View style = {styles.box}>
                    <TouchableOpacity style={styles.bx} onPress={LessTime} >
                        <Image source={require('./../../assets/-.png')} style ={styles.img1}></Image> 
                    </TouchableOpacity>
                    <Text style={styles.text1} >{time} </Text>
                    <TouchableOpacity style={styles.bx1}  onPress={MoreTime}>
                        <Image source={require('./../../assets/z.png')} style ={styles.img2}></Image> 
                    </TouchableOpacity>
                </View>
                <Text style ={styles.txt}  > {time} </Text>
                <TouchableOpacity style ={styles.boxx} onPress={() =>navigation.navigate('Payment')}>
                    <Text style ={styles.txtx}>Payer</Text>
                </TouchableOpacity>
            </View>
            );
        
    
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
        width:100,
        height:36,
        backgroundColor:'#1E0258',
        borderWidth:1,
        top:340,
        borderRadius:21,
        left:25
      },
      bx:{
        width:25,
        height:23,
        backgroundColor:'#FFFFFF',
        borderRadius:'50%',
        top:6,
        left:7
      },
      img1:{
        top:10,
        left:7
      },
      bx1:{
        width:25,
        height:23,
        backgroundColor:'#FFFFFF',
        borderRadius:'50%',
        top:-32,
        left:63
      },
      img2:{
        justifyContent:'center',
        alignItems:'center',
        top:5,
        left:7
        
      },
      text1:{
        fontSize:15,
        fontFamily:'GothicA1_B',
        textAlign:'center',
        zIndex:2,
        top:-12,
        color:'#FFFFFF'

      },
      txt:{
        fontFamily:'GothicA1_B',
        fontSize:16,
        color:'#1E0258',
        textAlign:'center',
        top:315
      },
      boxx:{
        width:143,
        height:48,
        backgroundColor:'#F82020',
        top:280,
        borderRadius:21,
        left:261
      },
      txtx:{
        fontFamily:'GothicA1_B',
        fontSize:24,
        textAlign:'center',
        color:'#FFFFFF',
        top:10
      }
})
export default MoreScreen