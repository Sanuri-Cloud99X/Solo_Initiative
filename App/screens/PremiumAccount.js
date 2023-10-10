import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const PremiumAccount = () => {
  const navigation = useNavigation();

  const [activeCard, setActiveCard] = React.useState(1);

  return (
    <View style={styles.window}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={require("../assets/back.png")}/>
          </TouchableOpacity>
          <Text style={styles.title}>VIP</Text>
          <View style={{width: 24, height: 24}} />
        </View>
        <View style={{gap: 16, marginTop: 38}}>
          <Text style={styles.premium}>Access Premium</Text>
          <Text style={styles.textStyle1}>
            The latest movies and series are here
          </Text>
        </View>
        <View style={styles.cardContainer}>
          <TouchableOpacity
            style={
              activeCard === 1
                ? [styles.card, {backgroundColor: '#12CDD9'}]
                : styles.card
            }
            onPress={() => setActiveCard(1)}>
            <Text style={styles.textStyle2}>Monthly Subscription</Text>
            <Text style={styles.textStyle3}>
              Rp<Text style={styles.textStyle2}>54.000/</Text>Month
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              activeCard === 2
                ? [styles.card, {backgroundColor: '#12CDD9'}]
                : styles.card
            }
            onPress={() => setActiveCard(2)}>
            <Text style={styles.textStyle2}>Annual Subscription</Text>
            <Text style={styles.textStyle3}>
              Rp<Text style={styles.textStyle2}>200.000/</Text>Years
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 40, gap: 30}}>
          <View style={{flexDirection: 'row', alignSelf: 'center', gap: 30}}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
              <Image source={require("../assets/hd.png")} style={{ width: 25, height: 25 }}/>
              <Text style={styles.textStyle4}>Streaming in high quality</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
              <Image source={require("../assets/remove.png")} style={{ width: 25, height: 25 }}/>
              <Text style={styles.textStyle4}>Ad-free viewing experience</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center', gap: 30}}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
              <Image source={require("../assets/downloadIcon5.png")}/>
              <Text style={styles.textStyle4}>Download to watch later</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
              <Image source={require("../assets/caption.png")}/>
              <Text style={styles.textStyle4}>Text of different languages</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center', gap: 30}}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
              <Image source={require("../assets/devices.png")}/>
              <Text style={styles.textStyle4}>Stream on multiple devices</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
              <Image source={require("../assets/audio.png")} style={{ width: 25, height: 25 }}/>
              <Text style={styles.textStyle4}>With the best audio quality</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('PaymentMethod')}>
          <Text style={styles.btnText}>Payment Method</Text>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 35,
            marginBottom: 40,
            alignSelf: 'center',
            flexDirection: 'row',
            gap: 5,
          }}>
          <Text style={styles.textStyle5}>Already Subscribed?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.textStyle5, {color: '#12CDD9' }]}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  window: {
    flex: 1,
    backgroundColor: '#1F1D2B',
  },
  header: {
    marginTop: 30,
    marginLeft: 24,
    marginRight: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
  },
  premium: {
    backgroundColor: '#FF8700',
    color: '#fff',
    borderRadius: 6,
    width: 186,
    height: 28,
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'center',
  },
  textStyle1: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    alignSelf: 'center',
    width: 221,
    textAlign: 'center',
  },
  cardContainer: {
    marginTop: 42,
    gap: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  card: {
    height: 137,
    width: 156,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'rgba(37, 40, 54, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  textStyle2: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  textStyle3: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: '#fff',
    width: 108,
    textAlign: 'center',
  },
  textStyle4: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: '#fff',
    width: 111,
  },
  button: {
    width: 327,
    height: 56,
    borderRadius: 32,
    backgroundColor: '#12CDD9',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 56,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
  },
  textStyle5: {
    color: '#92929D',
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
  },
});
export default PremiumAccount;
