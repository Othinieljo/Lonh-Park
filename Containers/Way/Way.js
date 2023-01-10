import React, {useState} from "react";
import { StyleSheet ,View,Text,TouchableOpacity,Image} from "react-native";
import MapView from 'react-native-maps';

const  WayScreen = ({navigation}) => {   
  
      const [state,setState] = useState ({
        region: {
          latitude : 5.333494066377182, 
          longitude : -4.02024681620057, 
          latitudeDelta : 0.122 , 
          longitudeDelta : 0.0421 , 
        },
      })
      
      
     const {region} = state
        
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Number')}>
                  <Image source={require('./../../assets/back.png')} style={styles.img} />
                </TouchableOpacity >
                < MapView style = {styles.map}
                     initialRegion={region}
                     
                  />
                  <View style={styles.box}>
                    <Text style={styles.text}>Il vous reste</Text>
                    <Text style={styles.text2}>5min 00s</Text>
                    <Text style={styles.text1} onPress={() => navigation.navigate('Rest')} >Pour y arriver</Text>


                  </View>
            </View>
        )
    }




const styles = StyleSheet.create({
     container : {
        flex:1,
        backgroundColor:'#FFFFFF'
     },
     map : {
        ...StyleSheet.absoluteFillObject,
        flex:1,
        height:600
      },
      box:{
        width:'100%',
        height:408,
        top:360,
        backgroundColor:'#FFFFFF',
        borderRadius:57
        
      },
      text:{
        fontFamily:'GothicA1_B',
        fontSize:24,
        textAlign:'center',
        top:96
        
      },
      text1:{
        fontFamily:'GothicA1_B',
        fontSize:24,
        textAlign:'center',
        top:212
      },
      text2:{
        color:'#F82020',
        fontFamily:'GothicA1_B',
        fontSize:40,
        top:146,
        textAlign:'center'
        
      },
      img :{
        top:20,
        left:20
      },
})



export default WayScreen