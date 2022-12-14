import { StyleSheet, TouchableOpacity,Text,View,Button } from "react-native";


export default function FlatButton({ text, onPress } ){
    return(
       <TouchableOpacity onPress = { onPress }>
           <View style = {Styles.Button}>
        <Text style = {Styles.ButtonText}> { text } </Text>
        
           </View>
       </TouchableOpacity>
    )

}
const Styles = StyleSheet.create({
    Button :{
      backgroundColor:'#1E0258',
      top:385,
      width:273,
      height:43,
      borderRadius:32,
      alignSelf:'center'
      
      
      
      


    },
    ButtonText:{
        color:'#FFFFFF',
        fontSize:20,
        fontFamily:'Inconsolata',
        textAlign:'center',
        top:10
        
        

    },
    
})