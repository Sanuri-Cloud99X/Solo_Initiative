import * as React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const OnboardingV4 = () => {
    const navigation = useNavigation();
    const goToNextScreen = () => {
        navigation.navigate("OnboardingV5"); // Navigate to OnboardingV2 screen
    };
    return (
        <View style={styles.onboardingV1}>
            <View style={styles.image}>
                <Image
                    style={[styles.imageIcon, styles.imageIconLayout4]}
                    resizeMode="cover"
                    source={require("../assets/image.png")}
                />
                <Image
                    style={[styles.imageIcon1, styles.imageIconLayout4]}
                    resizeMode="cover"
                    source={require("../assets/image1.png")}
                />
                <Image
                    style={[styles.imageIcon2, styles.imageIconLayout2]}
                    resizeMode="cover"
                    source={require("../assets/image2.png")}
                />
                <Image
                    style={[styles.imageIcon3, styles.imageIconLayout4]}
                    resizeMode="cover"
                    source={require("../assets/image3.png")}
                />
                <Image
                    style={[styles.imageIcon4, styles.imageIconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/image4.png")}
                />
                <Image
                    style={[styles.imageIcon5, styles.imageIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/image5.png")}
                />
                <Image
                    style={[styles.imageIcon6, styles.imageIconLayout2]}
                    resizeMode="cover"
                    source={require("../assets/image6.png")}
                />
                <Image
                    style={[styles.imageIcon7, styles.imageIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/image7.png")}
                />
                <Image
                    style={[styles.imageIcon8, styles.imageIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/image7.png")}
                />
                <Image
                    style={[styles.imageIcon9, styles.imageIconLayout2]}
                    resizeMode="cover"
                    source={require("../assets/image8.png")}
                />
                <Image
                    style={[styles.imageIcon10, styles.imageIconLayout4]}
                    resizeMode="cover"
                    source={require("../assets/image9.png")}
                />
                <Image
                    style={[styles.imageIcon11, styles.imageIconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/image10.png")}
                />
            </View>
            <View style={[styles.description, styles.bgLayout]}>
                <View style={[styles.bg, styles.bgLayout]} />
                <Image
                    style={styles.sliderIcon}
                    resizeMode="cover"
                    source={require("../assets/slider1.png")}
                />
                <View style={[styles.description1, styles.titleDescLayout]}>
                    <View style={[styles.titleDesc, styles.titleDescLayout]}>
                        <View style={[styles.titleDesc, styles.titleDescLayout]}>
                            <Text
                                style={[
                                    styles.theBiggestInternational,
                                    styles.semperInCursusFlexBox,
                                ]}
                            >
                                The biggest international and local film streaming
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
        </View>
    );
};

const styles = StyleSheet.create({
    imageIconLayout4: {
        maxHeight: "100%",
        maxWidth: "100%",
        borderRadius: 8,
        width: "30.34%",
        height: "20.64%",
        position: "absolute",
        overflow: "hidden",
    },
    imageIconLayout2: {
        opacity: 0.64,
        borderRadius: 8,
        position: "absolute",
    },
    imageIconLayout1: {
        left: "69.42%",
        right: "0.24%",
        maxHeight: "100%",
        maxWidth: "100%",
        borderRadius: 8,
        width: "30.34%",
        height: "20.64%",
        position: "absolute",
        overflow: "hidden",
    },
    imageIconLayout: {
        height: 165,
        width: 126,
        borderRadius: 8,
        position: "absolute",
    },
    bgLayout: {
        height: 341,
        width: 360,
        position: "absolute",
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
    imageIcon: {
        bottom: "79.36%",
        opacity: 0.16,
        left: "34.71%",
        right: "34.95%",
        maxHeight: "100%",
        maxWidth: "100%",
        borderRadius: 8,
        width: "30.34%",
        height: "20.64%",
        top: "0%",
    },
    imageIcon1: {
        top: "68.71%",
        right: "34.71%",
        bottom: "10.65%",
        left: "34.95%",
        opacity: 0.2,
        maxHeight: "100%",
        maxWidth: "100%",
        borderRadius: 8,
        width: "30.34%",
        height: "20.64%",
    },
    imageIcon2: {
        width: "46.52%",
        top: "0.83%",
        right: "57.1%",
        bottom: "67.54%",
        left: "-3.62%",
        height: "31.63%",
        opacity: 0.64,
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "hidden",
    },
    imageIcon3: {
        top: "74.04%",
        right: "69.42%",
        bottom: "5.33%",
        left: "0.24%",
        opacity: 0.2,
        maxHeight: "100%",
        maxWidth: "100%",
        borderRadius: 8,
        width: "30.34%",
        height: "20.64%",
    },
    imageIcon4: {
        top: "33.55%",
        bottom: "45.81%",
        opacity: 0.24,
    },
    imageIcon5: {
        top: 226,
        opacity: 0.12,
        left: 0,
    },
    imageIcon6: {
        top: 147,
        left: 108,
        width: 214,
        height: 253,
    },
    imageIcon7: {
        top: 85,
        left: 287,
        opacity: 0.2,
    },
    imageIcon8: {
        top: 635,
        left: 288,
        opacity: 0.2,
    },
    imageIcon9: {
        width: "46.78%",
        top: "46.63%",
        right: "56.84%",
        bottom: "21.74%",
        left: "-3.62%",
        height: "31.63%",
        opacity: 0.64,
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "hidden",
    },
    imageIcon10: {
        top: "45.79%",
        bottom: "33.57%",
        opacity: 0.2,
        left: "34.71%",
        right: "34.95%",
        maxHeight: "100%",
        maxWidth: "100%",
        borderRadius: 8,
        width: "30.34%",
        height: "20.64%",
    },
    imageIcon11: {
        top: "56.45%",
        bottom: "22.92%",
        opacity: 0.2,
    },
    image: {
        height: "98.57%",
        width: "110.4%",
        right: "-14.4%",
        bottom: "1.43%",
        left: "4%",
        top: "0%",
        position: "absolute",
    },
    bg: {
        borderRadius: 32,
        backgroundColor: "#171725",
        top: 0,
        left: 0,
    },
    sliderIcon: {
        top: 264,
        width: 76,
        height: 10,
        left: 32,
        position: "absolute",
    },
    theBiggestInternational: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "600",
        fontFamily: "Montserrat-SemiBold",
        color:"#fff",
        top: 0,
    },
    semperInCursus: {
        top: 72,
        fontSize: 14,
        fontWeight: "500",
        fontFamily: "Montserrat-Medium",
        color:"#92929d",
        height: 85,
    },
    titleDesc: {
        top: 0,
        left: 10,
    },
    description1: {
        top: 32,
        left: 32,
    },
    nextIcon: {
        top: 229,
        left: 245,
        width: 80,
        height: 80,
        position: "absolute",
    },
    description: {
        top: 447,
        left: 43,
    },
    onboardingV1: {
        backgroundColor: "#1f1d2b",
        flex: 1,
        width: "100%",
        height: 812,
        overflow: "hidden",
    },
});

export default OnboardingV4;
