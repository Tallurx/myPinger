import moment from 'moment';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import defcolor from '../../constants/defcolor';

const blue = '#3777f0';
const grey = 'lightgrey';

const myID = 'u1';

const Message = ({ message }) => {

  const isMe = message.user.id === myID;

  return (
    <View style={[styles.container, isMe ? styles.rightContainer : styles.leftContainer]}>
      {!isMe && <Text style={[styles.name, { color: isMe ? 'white' : defcolor}]}>{message.user.name}</Text>}
      <View>
        <Text style={{ color: isMe ? 'white' : 'black'}}>{message.content}</Text>      
        <Text style={[styles.time, { color: isMe ? 'white' : 'black'}]}>{moment(message.createdAt).format('LT')}</Text>            
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    margin: 10,
    // borderRadius: 10,
    maxWidth: '80%',
  },
  leftContainer: {
    backgroundColor: grey,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    marginLeft: 10,
    marginRight: 'auto'
  },
  rightContainer: {
    backgroundColor: defcolor,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginLeft: 'auto',
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 3,
  },
  time: {
    textAlign: 'right',
    marginTop: 3,
    fontSize: 10,
  }
});

export default Message;
