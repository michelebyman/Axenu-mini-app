import * as React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Button
} from 'react-native';

import styles from '../style/style'

function thanks({ navigation }) {

    return (
        <>
            <SafeAreaView style={styles.safeArea}>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.body}>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Thank you! </Text>
                            <Text style={styles.sectionDescription}>
                                Giving me this opportunity to learn something new and to be challenged is something I'm happy about!
                                If you like it please call me
                            </Text>
                            <View style={styles.alignLinksTwo}>
                                <Button
                                    title="Get my number"
                                    onPress={() => navigation.navigate('Call me')}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

export default thanks;



