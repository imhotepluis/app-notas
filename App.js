import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import AddNoteForm from "./components/AddNoteForm";
import NotesList from "./components/NoteList";

const App = () => {
  const [notas, setNotas] = useState([]);

  const addNota = (nota) => {
    if (nota.trim()) {
      setNotas([...notas, nota]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Notas</Text>
      <AddNoteForm onAddNote={addNota} />
      <NotesList notes={notas} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
});

export default App;
