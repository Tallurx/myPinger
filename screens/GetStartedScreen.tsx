import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Text, Pressable, View, StyleSheet} from 'react-native';
import defcolor from '../constants/defcolor';



export default function GetStartedScreen(){
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('SignUp')
    }
    const onClick = () => {
        navigation.navigate('SignIn')
    }
    
    return (
        <View style={styles.page}>
            <View style={styles.layout2}  >
                <Ionicons name="chatbubble-outline" size={100} color="white" style={styles.icon} />
                <Text style={styles.text1}>Pingr</Text>
                <Text style={styles.text2}>Simple.  Fast.   Secure.  Private</Text>
            </View>
            <View style={styles.layout}>
                <Pressable style={styles.button} onPress={onPress} elevation={4}>
                    <Text style={styles.text}>New User</Text>
                </Pressable>
                <Pressable style={styles.button2} onPress={onClick} elevation={4}>
                    <Text style={styles.text}>Existing User</Text>
                </Pressable>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    page: {
        backgroundColor: defcolor,
        flex: 1
    },
    layout2: {
        marginTop: 70,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    layout: {
        backgroundColor: 'white',
        height: 380,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: defcolor,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 3,
        shadowOffset: {
            height: 1,
            width: 1,
        },
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        // marginTop: 50,
        height: 40,
        width: 330

    },
    button2: {
        backgroundColor: defcolor,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 3,
        shadowOffset: {
            height: 1,
            width: 1,
        },
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginTop: 30,
        height: 40,
        width: 330
    },

    text2: {
        color: '#e6e6e6',
        fontSize: 20,
        // letterSpacing: 3,
        fontWeight: 'bold',
        paddingTop: 170
    },
    text1: {
        color: '#e6e6e6',
        letterSpacing: 2,
        fontWeight: '100',
        fontSize: 30,
        // marginTop: 30,
    },
    text: {
        color: 'white',
        fontSize: 17
    },
})
