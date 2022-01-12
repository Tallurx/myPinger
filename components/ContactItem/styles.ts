import { StyleSheet } from 'react-native';
import defcolor from '../../constants/defcolor';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    margin: 10,
    borderColor: '#faf8f2',
    borderRadius: 20,
  },
  image: {
    height: 55,
    width: 55,
    borderRadius: 30,
    marginRight: 10,
    borderWidth: 2,
    borderColor: defcolor
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    color: 'grey',
  }
});

export default styles;