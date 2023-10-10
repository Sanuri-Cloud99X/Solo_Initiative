import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native'; // Import Image from 'react-native'
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook

const Verify = () => {
  const navigation = useNavigation(); // Initialize the navigation hook

  const [code, setCode] = useState(['', '', '', '']); // Initialize an array to hold 4 code digits

  const handleContinue = () => {
    // Add your verification logic here
    const verificationCode = code.join(''); // Combine the code digits into a single string
    console.log('Verification Code:', verificationCode);

    // Navigate to NewPassword when verification is successful
    navigation.navigate('NewPassword');
  };

  const handleResend = () => {
    // Add your resend logic here
    navigation.navigate('HelloPage');
  };

  // Function to handle input for each digit
  const handleCodeChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    if (text !== '' && index < 3) {
      // Move focus to the next input
      codeInputs[index + 1].focus();
    }
  };

  // Array to hold references to the code input fields
  const codeInputs = [null, null, null, null];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
          <Image
            source={require("../assets/back.png")}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.headerText}>Verifying your account</Text>
      <Text style={styles.subHeaderText}>
        We have just sent you a 4-digit code via your email example@gmail.com
      </Text>

      {/* Code input fields */}
      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (codeInputs[index] = ref)} // Assign the reference
            style={styles.codeInput}
            value={digit}
            onChangeText={(text) => handleCodeChange(text, index)}
            keyboardType="numeric"
            maxLength={1}
          />
        ))}
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>

      <Text style={styles.resendText}>
        Didn't receive the code?{' '}
        <Text style={styles.resendLink} onPress={handleResend}>
          Resend
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1d2b', // Background color for the page
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
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
  },
  subHeaderText: {
    fontSize: 16,
    marginBottom: 50,
    color: '#92929d',
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  codeInput: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: '#12CDD9',
    borderRadius: 8,
    fontSize: 25,
    textAlign: 'center',
    marginHorizontal: 5,
    color: '#fff',
    backgroundColor: '#252836',
    marginBottom: 70,
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: '#12CDD9',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 35,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resendText: {
    marginTop: 10, // Adjust the margin as needed
    color: '#92929d',
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
  },
  resendLink: {
    color: '#12CDD9', // Link text color
    fontWeight: 'bold',
  },
});

export default Verify;
