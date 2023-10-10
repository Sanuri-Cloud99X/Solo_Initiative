import * as React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const OnboardingV5 = () => {
    const navigation = useNavigation();
    const goToNextScreen = () => {
        navigation.navigate("OnboardingV6"); // Navigate to OnboardingV2 screen
    };
    return (
        <View style={styles.onboardingV1}>
            <View style={[styles.description, styles.bgLayout]}>
                <View style={[styles.bg, styles.bgPosition]} />
                <Image
                    style={styles.sliderIcon}
                    resizeMode="cover"
                    source={require("../assets/slider.png")}
                />
                <View style={[styles.description1, styles.titleDescLayout]}>
                    <View style={[styles.titleDesc, styles.titleDescLayout]}>
                        <View style={[styles.titleDesc, styles.titleDescLayout]}>
                            <Text
                                style={[
                                    styles.offersAdFreeViewing,
                                    styles.semperInCursusFlexBox,
                                ]}
                            >
                                Offers ad-free viewing of high quality
                            </Text>
                            <Text
                                style={[styles.semperInCursus, styles.semperInCursusFlexBox]}
                            >{`Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem semper parturient. `}</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={goToNextScreen}>
                <Image
                    style={styles.nextIcon}
                    resizeMode="cover"
                    source={require("../assets/next.png")}
                />
                </TouchableOpacity>
            </View>
            <Image
                style={styles.imageIcon}
                resizeMode="cover"
                source={require("../assets/image11.png")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    bgLayout: {
        height: 341,
        width: 327,
        position: "absolute",
    },
    bgPosition: {
        left: 0,
        top: 0,
    },
    titleDescLayout: {
        height: 157,
        width: 263,
        position: "absolute",
    },
    semperInCursusFlexBox: {
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        textAlign: "center",
        letterSpacing: 0,
        width: 263,
        left: 0,
        position: "absolute",
    },
    bg: {
        borderRadius: 32,
        backgroundColor:"#171725",
        height: 341,
        width: 393,
        position: "absolute",
    },
    sliderIcon: {
        top: 264,
        width: 76,
        height: 10,
        left: 24,
        position: "absolute",
    },
    offersAdFreeViewing: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "600",
        fontFamily: "Montserrat-SemiBold",
        color: "#fff",
        top: 0,
        alignItems: "center",
        display: "flex",
        textAlign: "center",
        letterSpacing: 0,
    },
    semperInCursus: {
        top: 72,
        fontSize: 14,
        fontWeight: "500",
        fontFamily: "Montserrat-Medium",
        color: "#92929d",
        height: 85,
    },
    titleDesc: {
        left: 16,
        top: 0,
    },
    description1: {
        top: 32,
        left: 32,
    },
    nextIcon: {
        top: 229,
        left: 275,
        width: 80,
        height: 80,
        position: "absolute",
    },
    description: {
        top: 447,
        left: 20,
    },
    imageIcon: {
        height: 345,
        width: 320,

        top: 50,
        left: "15%",
        maxWidth: "100%",
        maxHeight: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    onboardingV1: {
        backgroundColor: "#1f1d2b",
        flex: 1,
        width: 435,
        height: 830,
        overflow: "hidden",
    },
});

export default OnboardingV5;
