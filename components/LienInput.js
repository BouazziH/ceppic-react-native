import { StyleSheet,Button,TextInput,View } from "react-native"
export default function LienInput(props) {
    return(
        <View style={styles.inputContainer}>
        {/*<View style={styles.container}></View>*/}
        <TextInput
          placeholder="Nouveau lien.. "
          style={styles.inputLien}
          onChangeText={props.TextIn}
          value={props.lienTextSaisie}
        />
        
        <Button title="Ajouter un lien" onPress={props.Button}  />


      </View>
        
    )
};
const styles = StyleSheet.create({
inputLien: {
    color: "blue",
    borderColor: "gray",
    borderWidth: 1,
    padding: 8,
  },
  inputContainer: {
    //flex: 1,
    flexDirection: "row",
    alignItems: "center",
  }
   
});