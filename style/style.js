import {
    StyleSheet,
} from 'react-native';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    img: {
        height: 100,
        width: 100,
        borderRadius: 100 / 2,
        marginVertical: 20,
    },
    scrollView: {
        backgroundColor: Colors.white,
    },
    body: {
        backgroundColor: Colors.white,
        flex: 1,
    },
    alignLinks: {
        flexDirection: 'row',
        marginHorizontal: 16,
    },
    alignLinksTwo: {
        flexDirection: 'row',
        marginHorizontal: -8,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.darker,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.darker,
    },
    highlight: {
        fontWeight: '700',
    },
});

export default styles

