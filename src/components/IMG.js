import {StyleSheet, Image} from 'react-native';

export function IMG({placeholderIMG}){
    return(
        <Image 
          source={placeholderIMG} 
          style={styles.IMG}
        />
    )
}

const styles = StyleSheet.create({
      IMG: {
        width: 320,
        height: 440,
        borderRadius: 18,
      }
})