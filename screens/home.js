import React from 'react';

import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Image,
    Button
} from 'react-native';

import styles from '../style/style'

const Home = ({ navigation }) => {
    return (
        <>
            <SafeAreaView style={styles.safeArea}>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.body}>

                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Hello Simon!</Text>
                            <Image source={require('../image/MicheleByman.jpg')} style={styles.img} />
                            <Text style={styles.sectionDescription}>
                                My name is <Text style={styles.highlight}>Michele Byman</Text> and I am doing a test for <Text style={styles.highlight}>Axenu.
                                </Text>
                                The picture of me is taken by an Iphone.
                            </Text>
                        </View>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Call me</Text>
                            <Text style={styles.sectionDescription}>
                                If you want to call me simply press the link below to navigate to get my number
                            </Text>
                        </View>
                        <View style={styles.alignLinks}>
                            <Button
                                title="Get my number"
                                onPress={() => navigation.navigate('Call me')}
                            />
                        </View>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Thank You</Text>
                            <Text style={styles.sectionDescription} >
                                I want to thank you press the link below:
                            </Text>
                        </View>
                        <View style={styles.alignLinks}>
                            <Button
                                title="Get a greeting"
                                onPress={() => navigation.navigate('Thank you')}
                            />
                        </View>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>I hope you like my mini application 🙏🏽</Text>
                            <Text style={styles.sectionDescription}>
                                It was much fun doing this!
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};


export default Home;
