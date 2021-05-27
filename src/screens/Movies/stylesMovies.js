import { StyleSheet, Platform } from 'react-native';
import colors from '../../configs/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    typesContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: colors.white,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    header: {
        fontSize: 24,
        backgroundColor: "#fff",
        textAlign: 'center'
    },
    movieType: {
        paddingHorizontal: 15,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.grey,
        marginBottom: 10,
        borderRadius: 15,
    },
    textMovieType: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5,
        color: 'black'
    },
    selectedTextMovieType: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
        color: colors.white,
    },
});

export default styles;