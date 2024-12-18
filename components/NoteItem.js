import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NoteItem = ({ text }) => {
  return (
    <View style={styles.noteContainer}>
      <Text style={styles.noteText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  noteContainer: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  noteText: {
    fontSize: 16,
  },
});

export default NoteItem;
