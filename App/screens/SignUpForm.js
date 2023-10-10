import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, checked } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../firebase';



const SignupForm = () => {
  const navigation = useNavigation();

  const [name, setName] = React.useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [checked, setChecked] = React.useState(false);


  const handleNameChange = name => {
    setName(name);
  };
  const handleEmailChange = emailText => {
    setEmail(emailText);
  };
  const handlePasswordChange = pass => {
    setPassword(pass);
  };
  loginUser = async (email, password, name) => {
    try {
      const userCredential=await firebase.auth().createUserWithEmailAndPassword(email, password);
      await userCredential.user.sendEmailVerification();

      await firebase.firestore().collection('users').doc(userCredential.user.uid).set({
        name: name,
      });
      navigation.navigate('Home')
    } catch (err) {
        console.error('Error during registration:', err); // Log the error for debugging
        alert(err.message); // Show an alert to the user
    }
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Image source={require("../assets/back.png")} />
        </TouchableOpacity>
        <Text style={styles.title}>Sign Up</Text>
        <View style={{width: 24, height: 24}} />
      </View>
      <Text style={styles.headerText}>Let's get started</Text>
      <Text style={styles.subHeaderText}>The latest movies and series are here</Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputFieldContainer}>
          <View>
            <Text style={[styles.emailLabel, {width: 70}]}>Full Name</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Tiffany"
              placeholderTextColor="rgba(146, 146, 157, 1)"
              value={name}
              onChangeText={handleNameChange}
            />
          </View>
        </View>

        <View style={styles.inputFieldContainer}>
          <View>
            <Text style={styles.emailLabel}>Email Address</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Tiffanyjearsey@gmail.com"
              placeholderTextColor="rgba(146, 146, 157, 1)"
              value={email}
              onChangeText={handleEmailChange}
            />
          </View>
        </View>

        <View style={styles.inputFieldContainer}>
          <View>
            <Text style={styles.passwordLabel}>Password</Text>
            <TextInput
              style={styles.inputField}
              secureTextEntry={!passwordVisible}
              value={password}
              onChangeText={(text) => setPassword(text)} 
              placeholder="••••••••••••••••••••••••"
              placeholderTextColor="rgba(146, 146, 157, 1)"
            />
          </View>
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Image
              source={passwordVisible ? require("../assets/eye-on.png") : require("../assets/eye-off.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      

    
      <View style={styles.termsSection}>
        {checked ? (
          <TouchableOpacity onPress={() => setChecked(!checked)}>
            <Image source={require("../assets/Checkbox2.png")}/>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setChecked(!checked)}>
            <Image source={require("../assets/Checkbox.png")}/>
          </TouchableOpacity>
        )}
        <View style={{width: 226}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.textStyle3}>I agree to the </Text>
            <Text style={[styles.textStyle3, {color: '#12CDD9'}]}>
              Terms and Services
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.textStyle3}>and </Text>
            <Text style={[styles.textStyle3, {color: '#12CDD9'}]}>
              Privacy Policy
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.signupformButton} 
        onPress={() => loginUser(email, password, name)}>
        <Text style={styles.formbuttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1d2b',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 24,
    marginRight: 50,
    marginTop: 30,
    marginBottom: 45,

  },
  headerText: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 5,
  },
  subHeaderText: {
    color: '#EBEBEF',
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 12,
    marginBottom: 50,
  },
  textStyle3: {
    color: '#92929D',
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
  },
  emailLabel: {
    width: 95,
    height: 15,
    color: '#EBEBEF',
    marginLeft: 15,
    backgroundColor: '#1F1D2B',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },
  passwordLabel: {
    color: '#EBEBEF',
    marginLeft: 15,
    backgroundColor: '#1F1D2B',
    width: 65,
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },
  inputContainer: {
    gap: 32,
    marginTop: 15,
    width: 327,
    height: 231,
    alignSelf: 'center',
  },
  inputFieldContainer: {
    width: 327,
    height: 53,
    gap: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#252836',
  },
  inputField: {
    width: 263,
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: 'rgba(146, 146, 157, 1)',
    paddingLeft: 15,
    paddingBottom: 22,
  },
  
  termsSection: {
    width: 326,
    height: 38,
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 15,
    marginTop: 15,
    marginLeft: 10,
    marginBottom: 15,
  },
  textStyle3: {
    color: '#92929D',
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
  },
  signupformButton: {
    backgroundColor: '#12CDD9',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    width:'90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  formbuttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SignupForm;
