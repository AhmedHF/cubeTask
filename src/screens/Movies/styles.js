import { StyleSheet, Platform } from 'react-native';
import colors from '../../configs/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: 15,
        flex: 1,
        borderRadius: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row-reverse'
    },
    image: {
        width: '40%',
        height: 150,
        flex: 0.5,
        backgroundColor: colors.grey,
        resizeMode: 'cover',
        borderRadius: 10
    },
    details: {
        flex: 1,
        marginHorizontal: 5,
    },
    genresView: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row-reverse',
    },
    voteView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        alignContent: 'stretch',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    date: {
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.greyDefault,
        marginVertical: 10
    },
    vote: {
        fontWeight: 'bold',
        fontSize: 28,
        color: colors.green,
    },
    genresItem: {
        paddingHorizontal: 15,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.grey,
        marginBottom: 10,
        borderRadius: 15,
    },
});
export default styles;