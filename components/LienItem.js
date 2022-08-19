import { StyleSheet,View ,Text } from "react-native-web"

export default function LienItem(props) {
    // ajour du props
    return(
<View style={styles.lienItem}>
  <Text style={styles.lienText}>{props.text}</Text>
</View>
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
