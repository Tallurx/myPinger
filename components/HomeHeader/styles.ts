import { StyleSheet, useWindowDimensions } from 'react-native';
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
        fontSize: 35
    },
    btn: {
        alignItems: 'center',
        paddingHorizontal: 15,
        marginRight: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: defcolor
    },      
    btn2: {
        paddingHorizontal: 15,
      },
});

export default styles;