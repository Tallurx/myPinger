import React from 'react';
import { Text, Image, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import styles from './styles';

export default function ContactItem({ contacts }) {
  const user = contacts.users[1];

  const navigation = useNavigation();

  const onPress = () => {
    console.warn('pressed on ', user.name)
    navigation.navigate('ChatRoom', {
        id: chatRoom.id,
        title: user.name
    })
  }

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={{ uri: user.imageUri}} style={styles.image} />
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
        </View>
      </View>
    </Pressable>
  );
}
