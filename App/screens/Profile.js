import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const BottomNavigation = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.bottomNavigation}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={styles.navTab}>
          <Image source={require("../assets/Home.png")} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <View style={styles.navTab}>
          <Image source={require("../assets/search.png")} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Download')}>
        <View style={styles.navTab}>
          <Image source={require("../assets/Download.png")} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <View style={styles.activeNavTab}>
          <Image source={require("../assets/Account.png")} />
          <Text style={styles.textStyle1}>Profile</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Profile = () => {
  const navigation = useNavigation();

  const [logout, setLogout] = React.useState(false);

  return (
    <View style={styles.window}>
      <ScrollView>
        <Text style={styles.title}>Profile</Text>
        <View style={styles.container}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require("../assets/profilePic.png")} style={styles.profilePic}/>
            <View>
              <Text style={styles.textStyle2}>Tiffany</Text>
              <Text style={styles.textStyle3}>Tiffanyjearsey@gmail.com</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
            <Image source={require("../assets/editIcon.png")} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.banner}
          onPress={() => navigation.navigate('PremiumAccount')}>
          <Image source={require("../assets/Premium.png")}  style={{ width: 30, height: 30 }}/>
          <View>
            <Text style={styles.textStyle2}>Premium Member</Text>
            <Text style={styles.textStyle4}>
              New movies are coming for you, Download Now!
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.container1}>
          <Text style={styles.textStyle2}>Account</Text>
          <TouchableOpacity style={styles.container2}>
            <View style={styles.container3}>
              <Image source={require("../assets/profile1.png")}  style={{ width: 25, height: 25 }}/>
              <Text style={styles.textStyle5}>Member</Text>
            </View>
            <Image source={require("../assets/arrow.png")} />
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity style={styles.container2}>
            <View style={styles.container3}>
              <Image source={require("../assets/padlock.png")}  style={{ width: 25, height: 25 }}/>
              <Text style={styles.textStyle5}>Change Password</Text>
            </View>
            <Image source={require("../assets/arrow.png")} />
          </TouchableOpacity>
        </View>
        <View style={[styles.container1, {height: 322}]}>
          <Text style={styles.textStyle2}>General</Text>
          <TouchableOpacity
            style={styles.container2}
            onPress={() => navigation.navigate('Notifications')} >
            <View style={styles.container3}>
              <Image source={require("../assets/notification.png")} style={{ width: 25, height: 25 }}/>
              <Text style={styles.textStyle5}>Notification</Text>
            </View>
            <Image source={require("../assets/arrow.png")} />
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity
            style={styles.container2}
            onPress={() => navigation.navigate('Language')}>
            <View style={styles.container3}>
              <Image source={require("../assets/language.png")} style={{ width: 25, height: 25 }} />
              <Text style={styles.textStyle5}>Language</Text>
            </View>
            <Image source={require("../assets/arrow.png")} />
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity style={styles.container2}>
            <View style={styles.container3}>
              <Image source={require("../assets/country.png")} style={{ width: 25, height: 25 }}/>
              <Text style={styles.textStyle5}>Country</Text>
            </View>
            <Image source={require("../assets/arrow.png")} />
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity style={styles.container2}>
            <View style={styles.container3}>
              <Image source={require("../assets/trashBin.png")} style={{ width: 25, height: 25 }}/>
              <Text style={styles.textStyle5}>Clear Cache</Text>
            </View>
            <Image source={require("../assets/arrow.png")} />
          </TouchableOpacity>
        </View>

        <View style={[styles.container1, {height: 259, marginBottom: 40}]}>
          <Text style={styles.textStyle2}>More</Text>
          <TouchableOpacity
            style={styles.container2}
            onPress={() => navigation.navigate('PrivacyPolicy')}>
            <View style={styles.container3}>
              <Image source={require("../assets/legal.png")} style={{ width: 25, height: 25 }} />
              <Text style={styles.textStyle5}>Legal and Policies</Text>
            </View>
            <Image source={require("../assets/arrow.png")} />
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity style={styles.container2}>
            <View style={styles.container3}>
              <Image source={require("../assets/help.png")} style={{ width: 25, height: 25 }}/>
              <Text style={styles.textStyle5}>Help & Feedback</Text>
            </View>
            <Image source={require("../assets/arrow.png")} />
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity style={styles.container2}>
            <View style={styles.container3}>
              <Image source={require("../assets/aboutus.png")} />
              <Text style={styles.textStyle5}>About Us</Text>
            </View>
            <Image source={require("../assets/arrow.png")} />
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.button} onPress={() => setLogout(true)}>
          <Text style={styles.btnText}>Log Out</Text>
        </TouchableOpacity>
        <Modal animationType="slide" transparent={true} visible={logout}>
          <View style={{flex: 1, backgroundColor: 'rgba(31,29,43, 0.92)'}}>
            <View style={styles.centeredModal}>
              <View style={styles.modalView}>
                <Image source={require("../assets/Question.png")} />
                <Text style={styles.textStyle6}>Are you sure ?</Text>
                <Text style={styles.textStyle7}>
                  Ullamcorper imperdiet urna id non sed est sem. Rhoncus amet,
                  enim purus gravida donec aliquet.
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    gap: 20,
                  }}>
                  <TouchableOpacity style={styles.button1}>
                    <Text style={styles.btnText}>Log Out</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.button1, {backgroundColor: '#12CDD9'}]}
                    onPress={() => setLogout(false)}>
                    <Text style={[styles.btnText, {color: '#fff'}]}>
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    flexDirection: 'row',
    gap: 17,
    height: 72,
    marginLeft: 39,
    marginRight: 39,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navTab: {
    width: 48,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeNavTab: {
    width: 125,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 5,
    backgroundColor: '#252836',
    borderRadius: 16,
  },
  window: {
    flex: 1,
    backgroundColor: '#1F1D2B',
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 24,
  },
  container: {
    width: 327,
    height: 86,
    alignSelf: 'center',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'rgba(37, 40, 54, 1)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 24,
  },
  profilePic: {
    width: 54,
    height: 54,
  },
  textStyle1: {
    color: '#12CDD9',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
  textStyle2: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#fff',
  },
  textStyle3: {
    color: '#B1B1B1',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
  banner: {
    width: 327,
    height: 110,
    alignSelf: 'center',
    borderRadius: 16,
    backgroundColor: '#FF8700',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },
  textStyle4: {
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    width: 231,
    marginTop: 8,
  },
  container1: {
    width: 327,
    height: 188,
    alignSelf: 'center',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'rgba(37, 40, 54, 1)',
    gap: 24,
    paddingLeft: 24,
    paddingRight: 19,
    justifyContent: 'center',
    marginBottom: 24,
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container3: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle5: {
    color: '#fff',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    paddingLeft: 22,
  },
  line: {
    height: 2,
    width: 266,
    backgroundColor: '#252836',
    alignSelf: 'center',
    marginTop: -10,
  },
  button: {
    width: 327,
    height: 56,
    borderRadius: 32,
    backgroundColor: '#1F1D2B',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    borderWidth: 2,
    borderColor: '#12CDD9',
  },
  btnText: {
    color: '#12CDD9',
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
  },
  centeredModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#252836',
    borderRadius: 16,
    width: '90%',
    padding: 35,
    alignItems: 'center',
    gap: 20,
  },
  textStyle6: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#fff',
  },
  textStyle7: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#92929D',
    textAlign: 'center',
  },
  button1: {
    width: 130,
    height: 56,
    borderRadius: 32,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    borderWidth: 2,
    borderColor: '#12CDD9',
  },
});

export default Profile;
