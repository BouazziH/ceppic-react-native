import { Pressable } from "react-native";
import { StyleSheet,View ,Text } from "react-native-web"

export default function LienItem(props) {
   
   console.log(props.id);
   
    // ajour du props
    return(
        //pressable est un coposant reacte pour le click(selectionner) sur un lien/on utlise le props + methode bind to delete the item
        <Pressable onPress={props.onDeleteItem.bind(this,props.id)}>
<View style={styles.lienItem}>
  <Text style={styles.lienText}>{props.text}</Text>
</View>
</Pressable>
    )

};
 const styles =StyleSheet.create({

    lienItem: {
        backgroundColor:"#edcedc",
        marginTop:20,
        padding:8,
        color:"#ggg",
      },
      lienText:{
        color:"green",
      }
 });
