import { StyleSheet,    SafeAreaView, FlatList,View,Text,TouchableOpacity,Image} from "react-native";
import FlatButton from "./Button";

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Parking Benden',
      distance: 'à 50m',
      src:require('./../assets/R11.png'),
      prix:'500fcfa'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Parking Benden',
      distance: 'à 120m',
      src:require('./../assets/R11.png'),
      prix:'500fcfa'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Parking Benden',
      distance: 'à 200m',
      src:require('./../assets/R13.png'),
      prix:'500fcfa'
    },
    {
      id: '1',
      title: 'Parking Benden',
      distance: 'à 200m',
      src:require('./../assets/R13.png'),
      prix:'500fcfa'
    },
    {
      id: '2',
      title: 'Parking Benden',
      distance: 'à 200m',
      src:require('./../assets/R13.png'),
      prix:'500fcfa'
    },
  ];
  
  const Item = ({ title,distance,src,prix,onPress}) => (
    <View style={styles.item}>
      <Image source={src} style={styles.img} >
        
      </Image>
      <View style = {styles.prix1}>
      <Text style={styles.prix} >{prix} </Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.dist}>{distance}</Text>
      <TouchableOpacity style = {styles.button} onPress={onPress}>
              <Text style ={styles.text1} >Reserver</Text>
            </TouchableOpacity>

      
    </View>
  );


export default function FlatListB({ onPress }){
    const renderItem = ({ item }) => (
        <Item title={item.title} distance ={item.distance}  src={item.src} prix ={item.prix}  onPress ={onPress} /> )
       
    return(
        <SafeAreaView style = {styles.container} >
            <FlatList
            horizontal
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}

            />
            
            
            

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor:"#FFFFFF",
        height:200,
        borderRadius:33,
        top: 62,
        marginTop:20

    },
    item: {
        backgroundColor: '#ffffff',
        padding: 10,
        marginVertical: 16,
        marginHorizontal: 16,
        borderColor:"#707070",
        borderWidth: 1,
        width:92,

        
        height:128,
        justifyContent:"center"
      },
      title: {
        fontSize: 10,
        fontFamily:'GothicA1_B',
        width:75,
        lineHeight:12.5,
        height:13,
        top:-10
        

      },
      dist : {
        fontSize:13,
        fontFamily:'GothicA1_B',
        color:'#1E0258',
        textAlign:'center',
        top:-5
      },
      button : {
      backgroundColor:'#1E0258',
      
      width:74,
      height:16,
      borderRadius:32,
      alignSelf:'center',
      top:0


      
      
      
      

      },
      text1:{
        fontSize:10,
        fontFamily:'GothicA1_B',
        color:'#FFFFFF',
        textAlign:'center',
        top:3,
        

      },
      img:{
        width:90,
        left:-10,
        top:-9

      },
      prix:{
        color:'#1E0258',
        fontSize:5,
        fontFamily:'GothicA1_B',
        textAlign:'center',
        top:3
        
        
      },
      prix1:{
        width:30,
        height:11,
        backgroundColor:'#FFFFFF',
        borderTopStartRadius:5,
        borderBottomEndRadius:5,
        top:-22,
        left:40
      }
    
    
})