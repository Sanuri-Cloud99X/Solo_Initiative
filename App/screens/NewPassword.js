import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const NewPassword = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleResetPassword = () => {
    // Implement your password reset logic here

    // Navigate to the desired screen when the Reset button is clicked
    navigation.navigate('YourTargetScreen');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Verify')}>
          <Image source={require("../assets/back.png")} />
        </TouchableOpacity>
      </View>
      <Text style={styles.headerText}>Create New Password</Text>
      <Text style={styles.subHeaderText}>Enter your new password</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>New Password</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="••••••••••••••••••••••••"
            placeholderTextColor={'#EBEBEF'}
            secureTextEntry={!passwordVisible}
            onChangeText={(text) => setNewPassword(text)}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Image
              source={passwordVisible ? require("../assets/eye-on.png") : require("../assets/eye-off.png")}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Confirm Password</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="••••••••••••••••••••••••"
            placeholderTextColor={'#EBEBEF'}
            secureTextEntry={!passwordVisible}
            onChangeText={(text) => setConfirmPassword(text)}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Image
              source={passwordVisible ? require("../assets/eye-on.png") : require("../assets/eye-off.png")}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Create space between text and button */}
      <View style={styles.space}></View>

      <TouchableOpacity
        style={styles.resetButton}
        onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1d2b',
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 24,
    marginRight: 50,
    marginTop: 30,
    marginBottom: 50,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "#fff",
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
  },
  subHeaderText: {
    fontSize: 16,
    color: "#92929d",
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    marginBottom: 50,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 10,
    alignSelf: 'center',
  },
  inputLabel: {
    color: '#fff',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  passwordInput: {
    flex: 1,
    color: "#fff",
  },
  resetButton: {
    backgroundColor: '#12CDD9',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: '90%',
    marginBottom: 30,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  space: {
    marginTop: 50, // Adjust the margin to create space
  },
});

export default NewPassword;
