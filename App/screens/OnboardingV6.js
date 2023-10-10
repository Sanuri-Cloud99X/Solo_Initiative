import * as React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const OnboardingV6 = () => {
    const navigation = useNavigation();
    const goToNextScreen = () => {
        navigation.navigate("SplashScreen"); // Navigate to OnboardingV2 screen
    };
    return (
        <View style={styles.onboardingV1}>
            <View style={[styles.description, styles.bgLayout]}>
                <View style={[styles.bg, styles.bgLayout]} />
                <Image
                    style={styles.sliderIcon}
                    resizeMode="cover"
                    source={require("../assets/slider2.png")}
                />
                <View style={[styles.description1, styles.titleDescLayout]}>
                    <View style={[styles.titleDesc, styles.titleDescLayout]}>
                        <View style={[styles.titleDesc, styles.titleDescLayout]}>
                            <Text
                                style={[styles.ourServiceBrings, styles.semperInCursusFlexBox]}
                            >
                                Our service brings together your favorite series
                            </Text>
                            <Text
                                style={[styles.semperInCursus, styles.rating1Typo]}
                            >{`Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem semper parturient. `}</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={goToNextScreen}>
                <Image
                    style={[styles.nextIcon, styles.ratingLayout]}
                    resizeMode="cover"
                    source={require("../assets/next.png")}
                />
                </TouchableOpacity>
            </View>
            <View style={styles.image}>
                <Image
                    style={styles.paternIcon}
                    resizeMode="cover"
                    source={require("../assets/patern.png")}
                />
                <Image
                    style={styles.bgIcon}
                    resizeMode="cover"
                    source={require("../assets/bg.png")}
                />
                <Image
                    style={styles.maskGroupIcon}
                    resizeMode="cover"
                    source={require("../assets/mask-group.png")}
                />
                <Image
                    style={styles.bgIcon}
                    resizeMode="cover"
                    source={require("../assets/mask-group1.png")}
                />
                <View style={[styles.rating, styles.ratingLayout]}>
                    <View style={[styles.ratingChild, styles.childLayout]} />
                    <View style={styles.groupParent}>
                        <View style={[styles.parent, styles.parentLayout]}>
                            <Text style={[styles.text, styles.textLayout]}>9 / 10</Text>
                            <Text style={[styles.rating1, styles.textLayout]}>Rating</Text>
                        </View>
                        <Image
                            style={[styles.starIcon, styles.iconLayout]}
                            resizeMode="cover"
                            source={require("../assets/star1.png")}
                        />
                    </View>
                </View>
                <View style={[styles.duration, styles.ratingLayout]}>
                    <View style={styles.childLayout} />
                    <View style={[styles.h20mParent, styles.h20mParentPosition]}>
                        <Text style={[styles.text, styles.textLayout]}>1h 20m</Text>
                        <Text style={[styles.rating1, styles.textLayout]}>Duration</Text>
                    </View>
                    <Image
                        style={[styles.timeCircleIcon, styles.h20mParentPosition]}
                        resizeMode="cover"
                        source={require("../assets/time-circle.png")}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    bgLayout: {
        height: 341,
        width: 393,
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
    rating1Typo: {
        color: "#92929d",
        fontFamily: "Montserrat-Medium",
        fontWeight: "500",
    },
    ratingLayout: {
        height: 80,
        width: 80,
        position: "absolute",
    },
    childLayout: {
        backgroundColor: "#252836",
        borderRadius: 12,
        height: 80,
        width: 80,
        left: 0,
        top: 0,
        position: "absolute",
    },
    parentLayout: {
        height: 32,
        width: 55,
    },
    textLayout: {
        height: 12,
        fontSize: 12,
        width: 55,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        textAlign: "center",
        lineHeight: 29,
        left: 0,
        position: "absolute",
    },
    iconLayout: {
        height: 56,
        width: 56,
        overflow: "hidden",
    },
    h20mParentPosition: {
        left: 13,
        position: "absolute",
    },
    bg: {
        borderRadius: 32,
        backgroundColor:"#171725",
        left: 0,
        top: 0,


        
    },
    sliderIcon: {
        top: 264,
        width: 76,
        height: 10,
        left: 32,
        position: "absolute",
    },
    ourServiceBrings: {
        fontSize: 18,
        fontWeight: "600",
        fontFamily: "Montserrat-SemiBold",
        color: "#fff",
        lineHeight: 29,
        alignItems: "center",
        display: "flex",
        textAlign: "center",
        letterSpacing: 0,
        top: 0,
    },
    semperInCursus: {
        top: 72,
        fontSize: 14,
        height: 85,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        textAlign: "center",
        letterSpacing: 0,
        width: 263,
        left: 0,
        position: "absolute",
        fontFamily: "Montserrat-Medium",
        fontWeight: "500",
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
    },
    description: {
        top: 447,
        left: 20,
    },
    paternIcon: {
        height: "98.50%",
        width: "92.73%",
        top: "0%",
        right: "0%",
        bottom: "0.06%",
        left: "7.27%",
        maxWidth: "100%",
        maxHeight: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    bgIcon: {
        top: 78,
        left: 40,
        width: 227,
        height: 227,
        position: "absolute",
    },
    maskGroupIcon: {
        top: 25,
        left: 52,
        width: 202,
        height: 103,
        position: "absolute",
    },
    ratingChild: {
        shadowColor: "rgba(0, 0, 0, 0.2)",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowRadius: 44,
        elevation: 44,
        shadowOpacity: 1,
    },
    text: {
        fontWeight: "700",
        fontFamily: "Montserrat-Bold",
        color: "#fff",
        top: 20,
    },
    rating1: {
        color: "#92929d",
        fontFamily: "Montserrat-Medium",
        fontWeight: "500",
        top: 0,
    },
    parent: {
        top: 20,
        left: 0,
        position: "absolute",
    },
    starIcon: {
        top: -16,
        left: 0,
        position: "absolute",
    },
    groupParent: {
        top: 14,
        left: 12,
        height: 52,
        width: 55,
        position: "absolute",
    },
    rating: {
        top: 57,
        left: 0,
    },
    h20mParent: {
        top: 34,
        height: 32,
        width: 55,
    },
    timeCircleIcon: {
        top: -2,
        height: 56,
        width: 56,
        overflow: "hidden",
    },
    duration: {
        top: 212,
        left: 209,
    },
    image: {
        height: 345,
        width: 320,
        top: 50,
        maxWidth: "100%",
        maxHeight: "100%",
        position: "absolute",
        overflow: "hidden",
        bottom: "51.48%",
        left: "15%",
        position: "absolute",
    },
    onboardingV1: {
        backgroundColor: "#1f1d2b",
        flex: 1,
        width: 435,
        height: 812,
        overflow: "hidden",
    },
});

export default OnboardingV6;
