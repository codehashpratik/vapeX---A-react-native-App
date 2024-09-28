import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Colors, Fonts, Icons} from '../../themes/Themes';
import normalize from '../../utils/normalize';
import TextInputComponent3 from '../../components/TextInputComponent3';
import Footer from '../../components/Footer';
import CheckBox2 from '../../components/CheckBox2';
import showMessage from '../../utils/showMessage';
import LinearGradient from 'react-native-linear-gradient';

const CustomerDetails = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPHone] = useState('');
  const [country, setCountry] = useState('');
  const [street, setStreet] = useState('');
  const [apartment, setApartment] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [notes, setNotes] = useState('');
  const [shipChecked, setShipChecked] = useState(false);
  const [noteChecked, setNoteChecked] = useState(true);

  const nameRef = useRef();
  const phoneRef = useRef();
  const countryRef = useRef();
  const streetRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const pinRef = useRef();
  const apartmentRef = useRef();

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function validate() {
    if (email == '') {
      showMessage('Please Enter Your email');
    } else if (!validateEmail(email)) {
      showMessage('Please Enter a valid email');
    } else if (name == '') {
      showMessage('Please Enter your full name');
    } else if (phone == '') {
      showMessage('Please Enter Your phone number');
    } else if (country == '') {
      showMessage('Please Enter Your country name');
    } else if (street == '') {
      showMessage('Please Enter Your street address');
    } else if (apartment == '') {
      showMessage('Please Enter Your flat number');
    } else if (city == '') {
      showMessage('Please Enter Your city');
    } else if (state == '') {
      showMessage('Please Enter Your state');
    } else if (pincode == '') {
      showMessage('Please Enter Your pincode');
    } else if (noteChecked) {
      if (notes == '') {
        showMessage('Please enter order notes ');
      } else {
        navigation.navigate('PaymentsPage');
      }
    } else {
      navigation.navigate('PaymentsPage');
    }
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
      <ScrollView
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: normalize(20),
            marginLeft: normalize(20),
          }}>
          <Text
            style={{
              fontSize: normalize(13),
              fontFamily: Fonts.Poppins_SemiBold,
              color: Colors.black,
            }}>
            Details /
          </Text>
          <Text
            style={{
              fontSize: normalize(13),
              fontFamily: Fonts.Poppins_SemiBold,
              color: 'grey',
            }}>
            Payment
          </Text>
        </View>
        <Text
          style={{
            fontFamily: Fonts.Poppins_SemiBold,
            fontSize: normalize(15),
            color: Colors.black,
            marginTop: normalize(20),
            marginLeft: normalize(20),
          }}>
          CUSTOMER DETAILS
        </Text>
        <TextInputComponent3
          height={normalize(65)}
          width={normalize(300)}
          value={email}
          onChangeText={e => setEmail(e)}
          onSubmitEditing={() => {
            nameRef.current.focus();
          }}
          title={'Email'}
          placeholder={'Please enter your email'}
        />
        <TextInputComponent3
          height={normalize(65)}
          width={normalize(300)}
          value={name}
          onChangeText={e => setName(e)}
          refer={nameRef}
          onSubmitEditing={() => {
            phoneRef.current.focus();
          }}
          title={'Full Name'}
          placeholder={'Please enter your full name'}
        />
        <TextInputComponent3
          height={normalize(65)}
          width={normalize(300)}
          value={phone}
          onChangeText={e => setPHone(e)}
          refer={phoneRef}
          onSubmitEditing={() => {
            countryRef.current.focus();
          }}
          keyboardType={'numeric'}
          title={'Phone'}
          placeholder={'Please enter your phone number'}
        />
        <View
          style={{
            height: 0.5,
            backgroundColor: 'grey',
            width: '90%',
            alignSelf: 'center',
            marginTop: normalize(20),
          }}
        />
        <Text
          style={{
            fontFamily: Fonts.Poppins_SemiBold,
            fontSize: normalize(12),
            color: Colors.moonstone_blue,
            marginTop: normalize(20),
            marginLeft: normalize(20),
          }}>
          BILLING ADDRESS
        </Text>
        <TextInputComponent3
          height={normalize(65)}
          width={normalize(300)}
          value={country}
          onChangeText={e => setCountry(e)}
          refer={countryRef}
          tintColor={'maroon'}
          onSubmitEditing={() => {
            streetRef.current.focus();
          }}
          title={'Country / Region'}
          placeholder={'Please enter your country name'}
        />
        <TextInputComponent3
          height={normalize(65)}
          width={normalize(300)}
          value={street}
          onChangeText={e => setStreet(e)}
          refer={streetRef}
          tintColor={'maroon'}
          onSubmitEditing={() => {
            apartmentRef.current.focus();
          }}
          title={'Street Address'}
          placeholder={'Please enter your Street Address'}
        />
        <TextInputComponent3
          height={normalize(65)}
          width={normalize(300)}
          value={apartment}
          onChangeText={e => setApartment(e)}
          refer={apartmentRef}
          tintColor={'maroon'}
          onSubmitEditing={() => {
            cityRef.current.focus();
          }}
          title={'Apartment, Suite, Unit Etc.'}
          placeholder={'Please enter your Flat number'}
        />
        <TextInputComponent3
          height={normalize(65)}
          width={normalize(300)}
          value={city}
          onChangeText={e => setCity(e)}
          refer={cityRef}
          tintColor={'maroon'}
          onSubmitEditing={() => {
            stateRef.current.focus();
          }}
          title={'Town / City'}
          placeholder={'Please enter your city'}
        />
        <TextInputComponent3
          height={normalize(65)}
          width={normalize(300)}
          value={state}
          onChangeText={e => setState(e)}
          refer={stateRef}
          tintColor={'maroon'}
          onSubmitEditing={() => {
            pinRef.current.focus();
          }}
          title={'State'}
          placeholder={'Please enter your State'}
        />
        <TextInputComponent3
          height={normalize(65)}
          width={normalize(300)}
          value={pincode}
          onChangeText={e => setPincode(e)}
          refer={pinRef}
          tintColor={'maroon'}
          title={'Zip Code'}
          keyboardType={'numeric'}
          placeholder={'Please enter your pin number'}
        />
        <View
          style={{
            height: normalize(30),
            width: '90%',
            // backgroundColor: 'red',
            alignSelf: 'center',
            flexDirection: 'row',
            paddingTop: normalize(7),
          }}>
          <CheckBox2
            status={shipChecked}
            onPress={() => {
              setShipChecked(shipChecked == true ? false : true);
            }}
            margin={normalize(5)}
            backgroundColor={'blue'}
            size={normalize(18)}
          />

          <Text
            style={{
              fontFamily: Fonts.Poppins_SemiBold,
              fontSize: normalize(10),
              color: Colors.black,
              marginTop: normalize(4),
              marginLeft: normalize(5),
            }}>
            Ship to a different address ?
          </Text>
        </View>
        <View
          style={{
            height: normalize(35),
            width: '90%',
            // backgroundColor: 'red',
            alignSelf: 'center',
            flexDirection: 'row',
            paddingTop: normalize(7),
          }}>
          <CheckBox2
            status={noteChecked}
            onPress={() => {
              setNoteChecked(noteChecked == true ? false : true);
            }}
            margin={normalize(5)}
            backgroundColor={'blue'}
            size={normalize(18)}
          />

          <Text
            style={{
              fontFamily: Fonts.Poppins_SemiBold,
              fontSize: normalize(10),
              color: Colors.black,
              marginTop: normalize(4),
              marginLeft: normalize(5),
            }}>
            Order notes?
          </Text>
        </View>
        {noteChecked && (
          <TextInputComponent3
            height={normalize(65)}
            width={normalize(300)}
            value={notes}
            onChangeText={e => setNotes(e)}
            title={'Order Notes'}
            placeholder={'Type here...'}
            tintColor={'maroon'}
          />
        )}

        <View
          style={{
            flexDirection: 'row',
            marginTop: normalize(10),
            width: '100%',
            height: normalize(40),

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: normalize(8),
              fontFamily: Fonts.Poppins_Regular,
              color: Colors.black,
              textAlign: 'center',
            }}>
            For more information , please visit our{' '}
          </Text>
          <Text
            style={{
              fontSize: normalize(8),
              fontFamily: Fonts.Poppins_Regular,
              color: Colors.mediumState_blue,
              textAlign: 'center',
              textDecorationLine: 'underline',
            }}>
            shipping and handling{' '}
          </Text>
          <Text
            style={{
              fontSize: normalize(8),
              fontFamily: Fonts.Poppins_Regular,
              color: Colors.black,
            }}>
            page
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: normalize(90),
            width: '100%',
            marginBottom: normalize(30),
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              height: normalize(40),
              width: normalize(40),

              alignItems: 'center',
              marginLeft: normalize(20),
              marginTop: normalize(10),
              flexDirection: 'row',
            }}>
            <Image
              source={Icons.back}
              style={{
                height: normalize(21),
                width: normalize(21),
                resizeMode: 'contain',
                tintColor: Colors.black,
              }}
            />
            <Text
              style={{
                fontSize: normalize(12),
                fontFamily: Fonts.Poppins_SemiBold,
                marginLeft: normalize(8),
                color: Colors.black,
                marginTop: normalize(4),
              }}>
              Back
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              validate();
              // navigation.navigate('PaymentsPage');
            }}
            style={{
              height: normalize(30),
              width: '40%',
              backgroundColor: Colors.mediumState_blue,
              borderRadius: normalize(5),
              marginRight: normalize(10),
              justifyContent: 'center',
              marginTop: normalize(10),
            }}>
            <LinearGradient
              style={{
                height: '100%',
                width: '100%',
                borderRadius: normalize(5),
                justifyContent: 'center',
              }}
              colors={[Colors.mediumState_blue, Colors.moonstone_blue]}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}>
              <Text
                style={{
                  fontFamily: Fonts.Poppins_Regular,
                  color: Colors.white,
                  fontSize: normalize(9),
                  textAlign: 'center',
                }}>
                CONTINUE TO PAYMENT
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <Footer />
      </ScrollView>
    </View>
  );
};

export default CustomerDetails;
