import { Pressable, Text, View, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export function Btn({label, primario}){
    if (primario){
        return(
            <View style={[styles.containerButton, { borderColor:'#ffd33d', borderRadius: 18, padding:5}]}>
                <Pressable style={[styles.button,{ backgroundColor:'#fff', paddingHorizontal:0, paddingHorizontal:30, gap:8}]}
                  onPress={() => alert("Funcionando meu parceiro!!")}
                >
                    <FontAwesome
                      name="picture-o"
                      size={18}
                      color="#25292e"  
                    />
                    <Text style={{color:'black', fontSize:18}}>
                        {label}
                    </Text>
                </Pressable>
            </View>
        )
    }
    return(
        <View>
            <Pressable style={styles.button}
              onPress={() => alert("Funcionando meu parceiro!!")}
            >
                <Text style={styles.textButton}>
                    {label}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
        containerButton: {
            borderWidth:4,
        },
        button:{
            borderRadius: 14,
            padding:10,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
        },
        textButton:{
            color: '#fff',
            fontSize: 16      
        },
    })