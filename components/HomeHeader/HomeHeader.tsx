import {Entypo, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, Image, View, Pressable, useWindowDimensions, StyleSheet, Button, TouchableOpacity } from 'react-native';
import defcolor from '../../constants/defcolor';
import styles from './styles';


const HomeHeader = (props) => {
  const navigation = useNavigation();
  const onPress = () => {
    console.warn('pressed on Groups')
    navigation.navigate('Groups');
  }
  const onClick = () => {
    console.warn('pressed on addContact')
    navigation.navigate('Contacts');
  }
  const onTap = () => {
    console.warn('pressed on CallLOgs')
    navigation.navigate('Call');
  }
    return (
      <View>
        <View style={styles.title}>
          <Text style={styles.text}>Chats</Text>
          <Pressable 
            onPress = {onClick}>
            <Ionicons name="add-circle-outline" size={30} color={defcolor} />
          </Pressable>
          <Entypo name="dots-three-vertical" size={24} color={defcolor} />
        </View>
        <View style={{justifyContent: 'center',flexDirection: 'row',}}>
          <Pressable style={styles.btn} >
            <Text style={{textAlign: 'center', color: defcolor}}>Friends</Text>
          </Pressable>
          <Pressable
            onPress = {onPress}
            style={styles.btn2} >
            <Text style={{textAlign: 'center', color: defcolor}}>Groups</Text>
          </Pressable>
          <Pressable
            onPress = {onTap}
            style={styles.btn2} >
            <Text style={{textAlign: 'center', color: defcolor}}>Calls</Text>
          </Pressable>        
        </View>
      </View>
   
    )
  };

  export default HomeHeader
 