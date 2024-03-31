import React from 'react';
import { View, StyleSheet } from 'react-native';
import Cell from './Cell';

const Table = ({ onCellClicked, tableState }) => {
  return (
    <View style={styles.table}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(id => (
        <View style={styles.cellContainer} key={id}>
          <Cell onClick={onCellClicked} id={id} cellState={tableState[id]} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  table: {
    width: "70%",
    aspectRatio: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cellContainer: {
    width: '33.33%',
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: '#111'
  }
});

export default Table;
