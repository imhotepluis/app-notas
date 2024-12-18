import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const AddNoteForm = ({ onAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const handleAddNote = () => {
    onAddNote(noteText);
    setNoteText("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digita sua nota aqui"
        value={noteText}
        onChangeText={setNoteText}
      />
      <Button title="Adicionar" onPress={handleAddNote} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
});

export default AddNoteForm;
