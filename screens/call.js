import * as React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Button
} from 'react-native';

import styles from '../style/style'

function call({ navigation }) {
    const phoneNumber = '0765-825051'
    return (
        <>
            <SafeAreaView style={styles.safeArea}>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.body}>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Call me on the number below:</Text>
                            <Text style={styles.sectionDescription}>
                                {`Tel: ${phoneNumber}`}
                            </Text>
                        </View>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Thank you </Text>
                            <Text style={styles.sectionDescription}>
                                Don't forget to see my Thank you page
                            </Text>
                            <View style={styles.alignLinksTwo}>
                                <Button
                                    title="Get a greeting"
                                    onPress={() => navigation.navigate('Thank you')}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

export default call;



