import { Feather } from '@expo/vector-icons';
import React from 'react';
import defcolor from '../../constants/defcolor';
import { Text, Image, View, Pressable, useWindowDimensions, StyleSheet } from 'react-native';


const ChatRoomHeader = (props) => {
   const  width  = useWindowDimensions();
    console.log(props);
  
    return (
      <View style={styles.container}>
        <Image 
          source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg'}}
          style={{ width: 30, height: 30, borderRadius: 30}}
        />
        <Text style={{flex: 1, marginLeft: 10, fontWeight: 'bold'}}>{props.children}</Text>
        <Feather name="camera" size={24} color={ defcolor} style={{ marginHorizontal: 10}} />
        <Feather name="edit-2" size={24} color= {defcolor} style={{ marginHorizontal: 10}} />
      </View>
    )
  }

  
  const styles=StyleSheet.create({
      container: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        // width: '100%', 
        marginRight: 50,
        padding: 10,
        alignItems: 'center'
      }
  })

  export default ChatRoomHeader;
  