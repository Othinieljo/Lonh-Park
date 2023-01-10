import React, { Component ,useState,useRef} from "react";
import { View,Text,StyleSheet,KeyboardAvoidingView,TouchableWithoutFeedback,
    Keyboard,TextInput,TouchableOpacity,Image,SafeAreaView,Pressable,handleOnPress,codeDigitsArray} from "react-native";

const CODE_LENGTH = 4;

const PaymentScreen = ({navigation}) =>{
  const [code,setCode] = useState('') ;
  const [containerIsFocused, setContainerIsFocused] = useState(false);
  const codeDigitsArray = new Array(CODE_LENGTH).fill(0);
 
  const ref = useRef(null);
  const handleOnPress = () => {
    ref?.current?.focus();
  };
  const handleOnBlur = () => {
    setContainerIsFocused(false);
  };

  const toDigitInput = (_value, idx) => {
    const emptyInputChar = ' ';
    const digit = code[idx]  ;
    const isCurrentDigit = idx === code.length;
    const isLastDigit = idx === CODE_LENGTH - 1;
    const isCodeFull = code.length === CODE_LENGTH;

    const isFocused = isCurrentDigit || (isLastDigit && isCodeFull)

    
    const containerStyle =
      containerIsFocused && isFocused
        ? {...styles.inputContainer, ...styles.inputContainerFocused}
        : styles.inputContainer;
    

    return (
      <View key={idx} style={containerStyle}>
      <TextInput  value = {digit} style={styles.inputText} keyboardType='number-pad'  />
      
    </View>
    
    );
  };
  return(
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Number')}>
        <Image source={require('./../../assets/back.png')} style={styles.img} />
      </TouchableOpacity >
      <Text style={styles.text} >Confirmer Paiement</Text>
      <Pressable style={styles.inputsC} onPress={handleOnPress} >
        {codeDigitsArray.map(toDigitInput)}
      </Pressable>
      <TextInput
      value={code}
      onChangeText={setCode}   
      keyboardType='number-pad' 
      ref={ref}
      onSubmitEditing={handleOnBlur}
       returnKeyType="done"
       textContentType="oneTimeCode"
       maxLength={CODE_LENGTH}
       style={styles.hidCode}
       >

      </TextInput>
      <TouchableOpacity style={styles.inner1} onPress={()=>navigation.navigate('Way')}>
         
         <Text style={styles.TextS} >Confirmer</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor:'#FFFFFF',
    
  },
  hidCode:{
    position: 'absolute',
    height: 0,
    width: 0,
    opacity: 0,
  },
  inputsC:{
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    top:156,
    left:35,
    
  },
  inputContainer:{
    borderColor: '#1E0258',
    borderWidth: 1,
    borderRadius: '50%',
    width:64,
    height:64,
    backgroundColor:'#D9D9D9'

  },
  inputText:{
    fontSize: 24,
    fontFamily: 'GothicA1_B',
    top:15,
    left:20
  },
  inputContainerFocused: {
    borderColor: '#0f5181',
  },
  text:{
    fontFamily:'GothicA1_B',
    fontSize:32,
    color:'#000000',
    top:56,
    left:50 
  },
  img :{
    top:20,
    left:20
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

export default PaymentScreen