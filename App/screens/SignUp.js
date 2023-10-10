import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SignUp = ({ navigation }) => {
  const handleSignUp = () => {
    // Navigate to the "SignUpForm" page when the "Sign Up" button is clicked
    navigation.navigate('SignUpForm');
  };

  const handleLogin = () => {
    // Navigate to the "Login" page when the "Login" text is clicked
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.liveTvBlack24dp1Icon}
        resizeMode="cover"
        source={require("../assets/Logo.png")}
      />

      {/* Create space between image and button */}
      <View style={styles.space}></View>

      {/* Signup Button */}
      <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.space}></View>

      {/* First Sentence */}
      <Text style={styles.textStyle3}>
        Already have an account?{' '}
        <Text style={styles.loginLink} onPress={handleLogin}>
          Login
        </Text>
      </Text>
      
      {/* Second Sentence */}
      <View style={styles.container1}>
        <View style={styles.line} />
        <Text style={[styles.textStyle3, {fontSize: 14}]}>Or Sign Up With</Text>
        <View style={styles.line} />
      </View>

      {/* signup method */}
      <View
        style={{
          flexDirection: 'row',
          gap: 24,
          alignSelf: 'center',
          marginTop: 40,
        }}>
        <TouchableOpacity>
          <Image source={require("../assets/google.png")}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/Apple.png")}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/fb2.png")}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#1f1d2b", // Background color for the page
  },
  logo: {
    width: 150, // Adjust the width as needed
    height: 150, // Adjust the height as needed
    resizeMode: 'contain', // Adjust the resizeMode as needed
    marginBottom: 20,
  },
  signupButton: {
    backgroundColor: '#12CDD9', // Button background color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: '90%',
  },

  buttonText: {
    color: 'white', // Button text color
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginLink: {
    color: '#12CDD9', // Link text color
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Medium',
  },
  space: {
    marginTop: 50, // Adjust the margin to create space
  },
  textStyle3: {
    color: '#92929D',
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
  },
  container1: {
    flexDirection: 'row',
    gap: 10,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  line: {
    height: 2,
    backgroundColor: '#252836',
    width: 62,
  },
});

export default SignUp;
