import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        // timeout to navigate to 'SignUp' after 2 seconds
        const timer = setTimeout(() => {
            navigation.navigate('SignUp');
        },1000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.splashScreen}>
            <View style={styles.aplicationNameParent}>

                <Image
                    style={styles.liveTvBlack24dp1Icon}
                    resizeMode="cover"
                    source={require("../assets/live-tv.png")}
                />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({

    liveTvBlack24dp1Icon: {
        top: 0,
        left: 35,
        width: 138,
        height: 138,
        position: "absolute",
        overflow: "hidden",
    },
    aplicationNameParent: {
        top: 337,
        left: 119,
        width: 138,
        height: 138,
        position: "absolute",
    },
    splashScreen: {
        backgroundColor: "#1f1d2b",
        flex: 1,
        width: "100%",
        height: 812,
        overflow: "hidden",
    },
});

export default SplashScreen;
