import React from 'react';
import { Text, Image, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import styles from './styles';
import moment from 'moment';
import { Zocial } from '@expo/vector-icons';

export default function CallItem({ CallLog }) {
  const user = CallLog.users[1];

  const navigation = useNavigation();

  const onPress = () => {
    console.warn('pressed on ', user.name)
    navigation.navigate('CallLog', {
        id: CallLog.id,
        title: user.name
    })
  }

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={{ uri: user.imageUri}} style={styles.image} />

      {CallLog.newMessages && <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>{CallLog.newMessages}</Text>
      </View>}

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Zocial name="call" size={24} color="black" style={styles.text} />
        </View>
        <Text style={styles.text}>{moment(CallLog.lastMessage.createdAt).format('L')}</Text>
      </View>
    </Pressable>
  );
}
