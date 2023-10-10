import * as React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

const OnboardingV1 = () => {
  const navigation = useNavigation();
  const goToNextScreen = () => {
    navigation.navigate("OnboardingV2"); // Navigate to OnboardingV2 screen
  };
  return (
    <View style={styles.onboardingV1}>
      <View style={[styles.description, styles.titleDescLayout]}>
        <View style={[styles.titleDesc, styles.titleDescPosition]}>
          <View style={[styles.titleDesc, styles.titleDescPosition]}>
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
      <Image
        style={[styles.onboardingIcon, styles.titleDescPosition]}
        resizeMode="cover"
        source={require("../assets/onboarding.png")}
      />
      <TouchableOpacity onPress={goToNextScreen}>
      <Image
        style={styles.nextIcon}
        resizeMode="cover"
        source={require("../assets/next.png")}
        />
      </TouchableOpacity>
      <Image
        style={styles.sliderIcon}
        resizeMode="cover"
        source={require("../assets/slider1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleDescLayout: {
    height: 157,
    width: 264,
  },
  titleDescPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  semperInCursusFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    letterSpacing: 0,
    left: 30,
    position: "absolute",
  },
  loremIpsumDolor: {
    fontSize: 18,
    lineHeight: 29,
    fontWeight: "600",
    fontFamily: "Montserrat-SemiBold",
    color: "#fff",
    width: 263,
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
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    letterSpacing: 0,
    width: 264,
  },
  titleDesc: {
    height: 157,
    width: 264,
  },
  description: {
    top: 467,
    left: 56,
    position: "absolute",
  },
  onboardingIcon: {
    width: 434,
    height: 421,
  },
  nextIcon: {
    top: 671,
    left: 320,
    width: 80,
    height: 80,
    position: "absolute",
  },
  sliderIcon: {
    top: 706,
    left: 24,
    width: 76,
    height: 10,
    position: "absolute",
  },
  onboardingV1: {
    backgroundColor: "#1f1d2b",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default OnboardingV1;
