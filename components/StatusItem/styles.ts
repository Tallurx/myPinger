import { StyleSheet } from 'react-native';
import defcolor from '../../constants/defcolor';

const styles = StyleSheet.create({
    feedContainer2: {
      width: '100%',
      marginHorizontal: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    stImage: {
      height: 30,
      width: 30,
      borderRadius: 15
    },
    imageContainer: {
      height: 250,
      maxHeight: 400,
      margin: 10,
      flex: 1,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: defcolor
    },
    textContainer: {
      marginHorizontal: 15,
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
    },
    stText2: {
      marginRight: 15,
      flexDirection: 'row',
    },
    feedImage: {
      borderRadius: 20,
      height: 250,
      minHeight: 250,
      maxHeight: 400,
    },
    container: {
      alignItems: 'center',
      flexDirection: 'row',
      borderBottomWidth: 0.5,
      paddingBottom: 25,
      paddingTop: 10,
      marginBottom: 20,
      borderBottomColor: defcolor
    },
    container2: {
      margin: 10,
    },
    title: {
      borderWidth: 1,
      borderColor: defcolor,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      height: 110,
      width: 75,
    },
    image: {
      flex: 1,
      borderWidth: 1,
      borderColor: defcolor,
      borderRadius: 15,
      width: 75,
    },
    badgecontainer: {
      top: 90,
      left: 23,
      backgroundColor: defcolor,
      borderWidth: 1,
      borderRadius: 20,
      width: 30,
      height: 30,
      position: 'absolute',
      borderColor: defcolor,
    }
  });
  
  export default styles;