import * as React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const OnboardingV3 = () => {
  const navigation = useNavigation();
  const goToNextScreen = () => {
    navigation.navigate("OnboardingV4"); // Navigate to OnboardingV2 screen
  };
  return (
    <View style={styles.onboardingV1}>
      <View style={[styles.description, styles.titleDescLayout]}>
        <View style={[styles.titleDesc, styles.titleDescLayout]}>
          <View style={[styles.titleDesc, styles.titleDescLayout]}>
            <Text style={[styles.loremIpsumDolor, styles.semperInCursusFlexBox]}>
              Lorem ipsum dolor sit amet consecteur esplicit
            </Text>
            <Text
              style={[styles.semperInCursus, styles.rating1Typo]}
            >{`Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem semper parturient.`}</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.sliderIcon} 
        resizeMode="cover"
        source={require("../assets/slider2.png")}
      />
      <TouchableOpacity onPress={goToNextScreen}>
      <Image
        style={[styles.buttonIcon, styles.ratingLayout]}
        resizeMode="cover"
        source={require("../assets/button1.png")}
      />
      </TouchableOpacity>
      <Image
        style={styles.onboardingIcon}
        resizeMode="cover"
        source={require("../assets/onboarding1.png")}
      />
      <View style={[styles.rating, styles.ratingLayout]}>
        <View style={[styles.ratingChild, styles.ratingLayout]} />
        <View style={styles.groupParent}>
          <View style={[styles.parent, styles.parentLayout]}>
            <Text style={[styles.text, styles.textLayout]}>9 / 10</Text>
            <Text style={[styles.rating1, styles.textLayout]}>Rating</Text>
          </View>
          <Image
            style={[styles.starIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/star.png")}
          />
        </View>
      </View>
      <View style={[styles.duration, styles.ratingLayout]}>
        <View style={[styles.h20mParent, styles.parentLayout]}>
          <Text style={[styles.text, styles.textLayout]}>1h 20m</Text>
          <Text style={[styles.rating1, styles.textLayout]}>Duration</Text>
        </View>
        <Image
          style={[styles.timeCircleIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/time-circle.png")}
        />
        <View style={[styles.ratingChild, styles.ratingLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleDescLayout: {
    height: 157,
    width: 311,
    position: "absolute",
  },
  semperInCursusFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    letterSpacing: 0,
    left: 0,
    position: "absolute",
  },
  rating1Typo: {
    color: "#92929d",
    /*fontFamily: FontFamily.body21,*/
    fontWeight: "500",
  },
  ratingLayout: {
    height: 80,
    width: 80,
    position: "absolute",
  },
  parentLayout: {
    height: 32,
    width: 55,
    position: "absolute",
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
    position: "absolute",
    overflow: "hidden",
  },
  loremIpsumDolor: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Montserrat-SemiBold",
    width: 310,
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
    left: 0,
    position: "absolute",
    /*fontFamily: FontFamily.body21,*/
    fontWeight: "500",
    width: 311,
  },
  titleDesc: {
    left: 0,
    top: 0,
  },
  description: {
    top: 467,
    left: 56,
  },
  sliderIcon: {
    top: 706,
    left: 24,
    width: 76,
    height: 10,
    position: "absolute",
  },
  buttonIcon: {
    top: 671,
    left: 314,
  },
  onboardingIcon: {
    width: 432,
    height: 421,
    left: 0,
    top: 0,
    position: "absolute",
  },
  ratingChild: {
    borderRadius: 12,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 1,
    left: 0,
    top: 0,
  },
  text: {
    fontWeight: "700",
    fontFamily: "Montserrat-Bold",
    top: 20,
    color:"#fff",
  },
  rating1: {
    color: "#92929d",
    /*fontFamily: FontFamily.body21,*/
    fontWeight: "500",
    top: 0,
  },
  parent: {
    top: 20,
    left: 0,
  },
  starIcon: {
    top: -16,
    left: 0,
  },
  groupParent: {
    top: 14,
    height: 52,
    width: 55,
    left: 12,
    position: "absolute",
  },
  rating: {
    top: 48,
    left: 36,
  },
  h20mParent: {
    top: 30,
    left: 12,
  },
  timeCircleIcon: {
    top: -6,
    left: 12,
  },
  duration: {
    top: 63,
    left: 311,
  },
  onboardingV1: {
    backgroundColor: "#1f1d2b",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default OnboardingV3;
