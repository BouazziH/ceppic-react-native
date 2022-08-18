
import { StyleSheet, Text, View , TextInput ,Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  //on utilise le usestate pour recuper les valeurs des champs
  //on declare des variable tableaux  vide pour les remplires
  const [lienTextSaisie, setLienTextSaisie] = useState('');
  const [ListeLien, setListeLien] = useState([]);
  function ajoutLienHandler(){
    console.log(lienTextSaisie);
   
  }
  function lienInputHandler(textsaisie){
    //affecter la valeur entrer au sette
    setLienTextSaisie(textsaisie);
    //console.log(textsaisie);
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <TextInput placeholder='Nouveau lien.. ' style={styles.inputLien} onChangeText={lienInputHandler}/>
<Button title='Ajouter un lien'
 onPress={ajoutLienHandler} />
</View>
      <View style={styles.lienContainer}>
        <Text>Liste des liens ...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputLien: {
    color: 'blue',
    borderColor: "gray",
    borderWidth: 1,
    padding: 8
  },
  inputContainer:{
    flex:1,
    flexDirection:'row',
    alignItems:"center",
    
  },
  lienContainer:{
    flex:3,
  }
});
