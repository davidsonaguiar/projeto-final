import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    box: {
        width: '100%',
        marginBottom: 12,
        padding: 8,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#E5E5E5',
        borderRadius: 12,
        overflow: 'hidden',
    },
    key: {
        width: '100%',
        padding: 12,
        marginBottom: 8,
        backgroundColor: '#4576FF',
        borderWidth: 1,
        borderColor: '#E5E5E5',
        borderRadius: 8,
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    value: {
        width: '100%',
        padding: 12,
        color: '#666',
        fontSize: 18,
        textAlign: 'justify',
    },
    img: {
        position: 'absolute',
        top: 14,
        right: 12,
        width: 40, 
        height:40,
        borderRadius: 40,
    }
})