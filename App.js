import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { IMG } from './src/components/IMG';

import Paisagem from './assets/images/paisagem.png'
import { Btn } from './src/components/Btn';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.containerIMG}>
        <IMG placeholderIMG={Paisagem}/>
      </View>
      <View style={styles.containerButton}>
        <Btn label="Escolha uma foto" primario={true}/>
        <Btn label="Usar foto padrão"/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerIMG:{
    flex: 1,
    paddingTop: 58,
  },
  containerButton: {
    flex: 1 / 2,
    alignItems:'center',
    gap:15,
  },
});
