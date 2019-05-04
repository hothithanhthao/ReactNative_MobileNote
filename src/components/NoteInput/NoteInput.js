import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class NoteInput extends Component {
  state = {
    noteName: ""
  };

  noteNameChangedHandler = val => {
    this.setState({
      noteName: val
    });
  };

  noteSubmitHandler = () => {
    if (this.state.noteName.trim() === "") {
      return;
    }
    
    this.props.onNoteAdded(this.state.noteName);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Write the note here"
          value={this.state.noteName}
          onChangeText={this.noteNameChangedHandler}
          style={styles.placeInput}
        />
        <Button
          title="Add"
          style={styles.placeButton}
          onPress={this.noteSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});

export default NoteInput;
