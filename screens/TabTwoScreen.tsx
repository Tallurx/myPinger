import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import StatusItem, { Feeds } from '../components/StatusItem/StatusItem';
import chatRoomsData from '../assets/dummy-data/ChatRooms';
import React from 'react';
import defcolor from '../constants/defcolor';

export default function TabTwoScreen() {
  return (
    <View style={styles.page}>
     
        <FlatList data={chatRoomsData}
        renderItem={({ item }) => <Feeds chatRoom={item} />}
        showsVerticalScrollIndicator={false}
        // showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() =>  <FlatList 
          data={chatRoomsData}
          renderItem={({ item }) => <StatusItem chatRoom={item} />}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal
        />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    // flex: 1
  },
});