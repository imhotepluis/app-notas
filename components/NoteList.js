import React from "react";
import { StyleSheet, FlatList } from "react-native";
import NoteItem from "./NoteItem";

const NotesList = ({ notes }) => {
  return (
    <FlatList
      data={notes}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <NoteItem text={item} />}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingVertical: 10,
  },
});

export default NotesList;
