import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import ListItem from '../ListItem/ListItem';

const noteList = props => {
    const notesOutput = props.notes.map((note, i) => (
        <ListItem key={i} noteName={note} />
      ));
    return (
        <ScrollView style={styles.listContainer}>{notesOutput}</ScrollView>
    );
};

const styles = StyleSheet.create({
    listContainer: {
      width: "100%"
    }
});

export default noteList;