import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import chatRoomsData from '../assets/dummy-data/ChatRooms';
import ContactItem from '../components/ContactItem/ContactItem';
import { useNavigation } from '@react-navigation/native';

export default function ContactScreen(){
    const navigation = useNavigation();
  
    // console.log(route.params)

    console.warn("Displaying contact list")
    
  return (
    <View style={styles.page}>
       <FlatList 
        data={chatRoomsData}
        renderItem={({ item }) => <ContactItem contacts={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1
  },
});
