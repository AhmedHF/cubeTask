import { StyleSheet, Platform } from 'react-native';
import colors from '../../configs/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '50%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        marginVertical: 10,
    },
    vote: {
        fontWeight: 'bold',
        fontSize: 28,
        color: colors.green,
    },
    overview: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10
    },
    text: {
        fontSize: 16,
        marginVertical: 5
    },
    listContainer: {
        paddingVertical: 10,
        transform: [{ scaleX: - 1 }],
    },
    genresItem: {
        paddingHorizontal: 15,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.grey,
        marginBottom: 10,
        borderRadius: 15,
        transform: [{ scaleX: -1 }],
    },
    creditsItem: {
        padding: 15,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        transform: [{ scaleX: -1 }],
    },
    listText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5
    },
    creditImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        resizeMode: 'cover'
    }
});
export default styles;