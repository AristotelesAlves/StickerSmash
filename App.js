import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { IMG } from './src/components/IMG';

import Paisagem from './assets/images/paisagem.png'
import { Btn } from './src/components/Btn';


export default function App() {
  return (
    <View style={styles.container}>

      {/* <View style={styles.containerIMG}>
        <IMG placeholderIMG={Paisagem}/>
      </View> */}

      <View styles={styles.containerButton}>
        <Btn label="test 01"/>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerIMG:{
    flex: 1,
    paddingTop: 58,
  },
  containerButton: {
    marginTop: 1,
    alignItems:'center',
  },

});
