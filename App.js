import React, { Component } from "react";
import { StyleSheet, View, Alert } from "react-native";

import NoteInput from "./src/components/NoteInput/NoteInput";
import NoteList from "./src/components/NoteList/NoteList";

export default class App extends Component {
  state = {
    notes: []
  };

  noteAddedHandler = noteName => {
    this.handleCheck(noteName) == false ?

    this.setState(prevState => {
      return {
        notes: prevState.notes.concat(noteName)
      };
    }): this.setState(prevState => {
      Alert.alert('already exists! Please choose a different note.')
      return {
        notes: prevState.notes
      };
    })
  };

  handleCheck(val) {
    return this.state.notes.some(item => val === item);
  }

  
  render() {
    return (
      <View style={styles.container}>
        <NoteInput onNoteAdded={this.noteAddedHandler} />
        <NoteList notes={this.state.notes} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
