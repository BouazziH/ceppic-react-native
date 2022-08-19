import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";
import { useState } from "react";
import { FlatList, ScrollView } from "react-native-web";

export default function App() {
  //on utilise le usestate pour recuper les valeurs des champs
  //on declare des variable tableaux  vide pour les remplires
  const [lienTextSaisie, setLienTextSaisie] = useState("");
  const [ListeLien, setListeLien] = useState([""]);

  function ajoutLienHandler() {
    console.log(lienTextSaisie);
    //pour ajouter les liens saisie a la liste le code en dessous
   // setListeLien([...ListeLien, lienTextSaisie]);
   setListeLien(currentListLiens => 
    [...ListeLien,{text:lienTextSaisie, id : Math.random().toString()}]); 
   setLienTextSaisie("");



  }
  function lienInputHandler(Textsaisie) {
    //affecter la valeur entrer au sette
    setLienTextSaisie(Textsaisie);
    //console.log(textsaisie);
  }
  return (
    <View style={styles.container}>
      <View style={styles.photos}>
        {" "}
        <Image source={require("./assets/icon.png")} style={styles.img} />
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Mangekyou_Sharingan_Sasuke.svg/768px-Mangekyou_Sharingan_Sasuke.svg.png",
          }}
          style={styles.img}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.container}></View>
        <TextInput
          placeholder="Nouveau lien.. "
          style={styles.inputLien}
          onChangeText={lienInputHandler}
          value={lienTextSaisie}
        />
        <Button title="Ajouter un lien" onPress={ajoutLienHandler} />
      </View>
      <View style={styles.lienContainer}>
        <Text>Liste des liens ...</Text>
        {/* <ScrollView>
        {ListeLien.map((lien) => (<Text key={lien}>{lien}</Text>))}
</ScrollView> */}
        <FlatList
          data={ListeLien}
          keyExtractor={(item, index) => {
            return item.id
          }}
          renderItem={(itemData) => {
             return (
<View style={styles.lienItem}>
  <Text>{itemData.item.text}</Text>
</View>
          )}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
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
  },
  lienContainer: {
    //flex: 3,
    height: 100,
    borderColor: "yellow",
    borderWidth: 2,
    padding:8,
  },
  img: {
    margin: 20,
    width: 100,
    height: 100,
  },
  photos: {
    flexDirection: "row-reverse",
  },
  lienItem: {
    backgroundColor:"#edcedc",
    marginTop:20,
    padding:8,
    color:"#ggg",
  }
});
