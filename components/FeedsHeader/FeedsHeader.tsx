import {Entypo, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, Image, View, Pressable, useWindowDimensions, StyleSheet, Button } from 'react-native';
import defcolor from '../../constants/defcolor';
import styles from './styles';


const HomeHeader = (props) => {
  const navigation = useNavigation();
    return (
      <View>
        <View style={styles.title}>
          <Text style={styles.text}>Status</Text>
          <Ionicons name="search-outline" size={24} color={defcolor} style={{ marginRight: 10}}/>
          <Ionicons name="add-circle-outline" size={30} color={defcolor} />
        </View>
      </View>
    )
  };

  export default HomeHeader
 