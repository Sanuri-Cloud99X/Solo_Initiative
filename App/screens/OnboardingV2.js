import * as React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import OnboardingV1 from "./OnboardingV1";
import { useNavigation } from "@react-navigation/native";

const OnboardingV2 = () => {
  const navigation = useNavigation();
  const goToNextScreen = () => {
    navigation.navigate("OnboardingV3"); // Navigate to OnboardingV2 screen
  };
  return (
    <View style={styles.onboardingV1}>
      <View style={[styles.onboardingV1Child, styles.titleDescPosition]} />
      <Image
        style={styles.sliderIcon}
        resizeMode="cover"
        source={require("../assets/slider.png")}
      />
      <TouchableOpacity onPress={goToNextScreen}>
      <Image
        style={styles.buttonIcon}
        resizeMode="cover"
        source={require("../assets/button.png")}
      /></TouchableOpacity>
      <View style={[styles.onboarding, styles.onboardingLayout]}>
        <View style={[styles.rectangleParent, styles.onboardingLayout]}>
          <Image
            style={[styles.groupChild, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-333.png")}
          />
          <Image
            style={[styles.groupItem, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-334.png")}
          />
          <Image
            style={[styles.groupInner, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-335.png")}
          />
        </View>
      </View>
      <View style={[styles.description, styles.titleDescLayout]}>
        <View style={[styles.titleDesc, styles.titleDescLayout]}>
          <View style={[styles.titleDesc, styles.titleDescLayout]}>
            <Text
              style={[styles.loremIpsumDolor, styles.semperInCursusFlexBox]}
            >
              Lorem ipsum dolor sit amet consecteur esplicit
            </Text>
            <Text
              style={[styles.semperInCursus, styles.semperInCursusFlexBox]}
            >{`Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem semper parturient. `}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleDescPosition: {
    left: 0,
    top: 0,
  },
  onboardingLayout: {
    height: 352,
    width: 679,
    position: "absolute",
  },
  groupLayout: {
    opacity: 0.3,
    height: 300,
    width: 207,
  },
  groupPosition: {

    borderRadius: 24,
    position: "absolute",
  },
  titleDescLayout: {
    height: 165,
    width: 327,
    position: "absolute",
  },
  semperInCursusFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  onboardingV1Child: {
    backgroundColor: "#171725",
    height: 421,
    width: 450,
    position: "absolute",
  },
  sliderIcon: {
    top: 707,
    width: 76,
    height: 10,
    left: 24,
    position: "absolute",
  },
  buttonIcon: {
    top: 672,
    right: 15,
    width: 80,
    height: 80,
    position: "absolute",
  },
  groupChild: {
    top: 52,
    left: 525,
    borderRadius: 24,
    opacity: 0.3,
    height: 300,
    width: 207,
    position: "absolute",
  },
  groupItem: {
    top: -100,
    height: 575,
    width: 375,
    left: 175,

  },
  groupInner: {
    top: 51,
    opacity: 0.3,
    height: 300,
    width: 207,
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  onboarding: {
    top: 54,
    left: -151,
  },
  loremIpsumDolor: {
    left: 8,
    fontSize: 24,
    lineHeight: 38,
    fontWeight: "600",
    fontFamily: "Montserrat-SemiBold",
    color: "#fff",
    width: 312,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    letterSpacing: 0,
    top: 0,
  },
  semperInCursus: {
    top: 80,
    fontSize: 14,
    fontWeight: "500",
    fontFamily:  "Montserrat-Medium",
    color:  "#92929d",
    height: 85,
    width: 327,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    letterSpacing: 0,
    left: 0,
  },
  titleDesc: {
    left: 0,
    top: 0,
  },
  description: {
    top: 458,
    left: 50,
  },
  onboardingV1: {
    backgroundColor: "#1f1d2b",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default OnboardingV2;
