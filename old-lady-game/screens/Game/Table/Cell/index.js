import { View, Image, Pressable, StyleSheet } from 'react-native';

const Cell = ({ id, cellState, onClick }) => {
    const imgName = cellState === 1 ?
      '../../../../assets/pieces/peca1.jpg' :
      '../../../../assets/pieces/peca2.png'
    
    return (
      <View style={styles.container}>
        <Pressable
          style={styles.container}
          onLongPress={() => {}}
          onPressIn={() => {}}
          onPressOut={() => onClick(id)}
        >
          {cellState !== 0 && 
            <Image
              style={styles.image}
              source={imgName}
            />
          }
        </Pressable>
      </View>
    );
  }

  const styles = StyleSheet.create({
    image: {
      flex: 1,
      aspectRatio: 1
    },
    container: {
      flex: 1,
      aspectRatio: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },

  })

export default Cell;