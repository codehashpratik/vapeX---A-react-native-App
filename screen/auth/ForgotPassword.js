import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import normalize from '../../utils/normalize';
import {Colors, Fonts, Icons} from '../../themes/Themes';
import TextInputComponent3 from '../../components/TextInputComponent3';
import {loginRequest} from '../../redux/reducer/AuthReducer';
import {useDispatch} from 'react-redux';
import connectionrequest from '../../utils/NetInfo';
import showMessage from '../../utils/showMessage';
import LinearGradient from 'react-native-linear-gradient';
import TextInputComponent2 from '../../components/TextInputComponent2';

const ForgotPassword = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const password = 'wfuw0f9303';

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function validation() {
    if (email == '') {
      showMessage('Please Enter Your email');
    } else if (!validateEmail(email)) {
      showMessage('Please Enter a valid email');
    } else {
      connectionrequest()
        .then(() => {
          navigation.navigate('VerificationOTP');
        })
        .catch(error => {
          showMessage('Please connect to the internet');
        });
    }
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.black} />
      <ImageBackground
        blurRadius={normalize(6)}
        source={Icons.imgBackGround}
        style={{
          flex: 1,
        }}>
        <LinearGradient
          colors={['black', 'rgba(52, 52, 52, 0.1)']}
          style={{height: '100%', width: '100%'}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              marginLeft: normalize(30),
              marginTop: normalize(20),
            }}>
            <Image
              source={Icons.back}
              style={{
                height: normalize(25),
                width: normalize(25),
                resizeMode: 'contain',
                tintColor: Colors.white,
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: normalize(100),
            }}>
            <Text
              style={{
                fontFamily: Fonts.Poppins_Regular,
                fontSize: normalize(18),
                marginLeft: normalize(10),
                color: Colors.white,
              }}>
              FORGOT YOUR
            </Text>
            <Text
              style={{
                fontFamily: Fonts.Poppins_SemiBold,
                fontSize: normalize(18),
                marginLeft: normalize(5),
                color: Colors.white,
              }}>
              PASSWORD
            </Text>
            <Text
              style={{
                fontFamily: Fonts.Poppins_Regular,
                fontSize: normalize(18),
                marginLeft: normalize(5),
                color: Colors.white,
              }}>
              ?
            </Text>
          </View>
          <Text
            style={{
              fontFamily: Fonts.Poppins_Regular,
              fontSize: normalize(8),
              marginLeft: normalize(10),
              alignSelf: 'center',
              color: Colors.white,
            }}>
            Enter your email address to receive an OTP
          </Text>
          <TextInputComponent2
            height={normalize(70)}
            title={'Email'}
            placeholder={'Enter Your Email'}
            value={email}
            onChangeText={e => {
              setEmail(e);
            }}
          />
          <TouchableOpacity
            onPress={() => {
              validation();
            }}
            style={{
              height: normalize(35),
              width: '85%',
              backgroundColor: Colors.white,
              marginTop: normalize(15),
              borderRadius: normalize(6),
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: Fonts.Poppins_Regular,
                color: Colors.black,
                fontSize: normalize(11),
                textAlign: 'center',
              }}>
              Continue
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default ForgotPassword;
