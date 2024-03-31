import { Button, View, Text } from 'react-native';


const HomeScreen = ({ navigation }) => {
    return (
      <View>
        <Text>
          Jogo da Veia
        </Text>
        <Button
          title="Play"
          onPress={() => navigation.navigate('Game')} 
        />
      </View>
    );
  }

export default HomeScreen;