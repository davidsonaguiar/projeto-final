import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    avatar: {
        width: 250,
        height: 250,
        borderRadius: 250,
        marginVertical: 28,
    },
    btns: {
        flexDirection: 'row',
    },
    btn: {
        width: 150,
        margin: 8,
        paddingVertical: 12,
        backgroundColor: '#4576FF',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#333'
    },
    Content: {
        color: '#111',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    Paragraph: {
        marginBottom: 24,
        color: '#666',
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 28,
    }
})