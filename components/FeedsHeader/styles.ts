import { StyleSheet } from 'react-native';
import defcolor from '../../constants/defcolor';


const styles = StyleSheet.create({
    title: { 
        flexDirection: 'row',
        justifyContent: 'space-between', 
        padding: 10,
        width: '100%',
        alignItems: 'center',
    },
    text: {flex: 1,
        color: defcolor,
        fontSize: 35,
        fontWeight: 'bold'
    },
});

export default styles;