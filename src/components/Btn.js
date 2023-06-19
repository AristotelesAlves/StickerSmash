import { Pressable, Text, View, StyleSheet } from "react-native";

export function Btn({label}){
    return(
        <View styles={styles.ButtonContainer}>
            <Pressable style={styles.button}
              onpress={() => alert('Butão apertado!')}
            >
                <Text style={styles.textButton}>
                    {label}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
        ButtonContainer:{
            width: 320,
            height: 68,
            marginHorizontal: 20,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 3,
        },
        button:{
            borderRadius:10,
            width:'100%',
            height:'100%',
            alignContent:'center',
            justifyContent: 'center',
            flexDirection: 'row'
        },
        textButton:{
            color: '#fff',
            fontSize: 18      
        },
        buttonIcon: {
            paddingRight: 8,
        }
    })