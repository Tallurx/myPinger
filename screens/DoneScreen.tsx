import { Fontisto, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Text, Pressable, View, StyleSheet} from 'react-native';
import defcolor from '../constants/defcolor';
import navigation from '../navigation';



export default function DoneScreen(){
    const navigation = useNavigation();
    const onPress = () => {
        console.warn('Pressed done');
       navigation.navigate('Root') 
    }
    return (
        <View style={styles.page}>
            <View style={styles.layout2}>
                <Ionicons name="chatbubble-outline" size={80} color="white" style={styles.icon} />
                <Text style={styles.text1}>That's all...</Text>
                <Text style={styles.text3}>Yes...You are through with the {"\n"} Paperwork with Pingr you can...</Text>
                <View style={styles.camera}>
                    <Fontisto name="camera" size={60} color="white" />
                    <Text style={styles.text2}>Create. Share. Influence.</Text>
                </View>
            </View>
            <View style={styles.layout}>
                <Text style={styles.text4}>Reliable messaging.</Text>
                <Pressable onPress={onPress} style={styles.button} elevation={5}>
                    <Text style={styles.text}>Done</Text>
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
        justifyContent: 'center',
        flex: 1,
    },
    layout: {
        marginHorizontal: 1.5,
        backgroundColor: 'white',
        height: 380,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        alignItems: 'center',
    },
    icon: {
        marginTop: 60,
        marginLeft: 30
    },
    camera: {
        alignItems: 'center',
        marginTop: 50
    },
    button: {
        backgroundColor: defcolor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginTop: 250,
        height: 50,
        width: 250

    },
    text: {
        color: 'white',
        fontSize: 25
    },
    text1: {
        color: '#ebf0ec',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 20,
    },
    text2: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 10,
        marginTop: 60,
    },
    text3: {
        marginTop: 20,

        fontFamily:  '',
        marginLeft: 20,
        color: 'white',
        fontSize: 18
    },
    text4: {
        color: '#bac2cc',
        marginTop: 30,
        fontWeight: 'bold',
        fontSize: 25
    }
})
