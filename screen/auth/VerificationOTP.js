import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Colors, Fonts, Icons} from '../../themes/Themes';
import normalize from '../../utils/normalize';
import OtpComponent from '../../components/OtpComponent';
import showMessage from '../../utils/showMessage';
import LinearGradient from 'react-native-linear-gradient';

const VerificationOTP = ({navigation}) => {
  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();
  const fourthRef = useRef();
  const [FirstOtp, setFirstOtp] = useState('');
  const [secondOtp, setSecondOtp] = useState('');
  const [thirdOtp, setThirdOtp] = useState('');
  const [fourthOtp, setFourthOtp] = useState('');
  const [seconds, setSeconds] = useState(10);

  function validation() {
    if (
      FirstOtp == '' &&
      secondOtp == '' &&
      thirdOtp == '' &&
      fourthOtp == ''
    ) {
      showMessage('Please Enter OTP');
    } else if (
      FirstOtp == '' ||
      secondOtp == '' ||
      thirdOtp == '' ||
      fourthOtp == ''
    ) {
      showMessage('Please Enter full OTP');
    } else {
      let validOtp = '1234';
      let fullOtp = `${FirstOtp}${secondOtp}${thirdOtp}${fourthOtp}`;
      if (fullOtp == validOtp) {
        navigation.navigate('ResetPassword');
      } else {
        showMessage('Incorrect OTP');
      }
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  useEffect(() => {
    if (FirstOtp.length == 1) {
      secondRef.current.focus();
    }
  }, [FirstOtp]);

  useEffect(() => {
    if (secondOtp.length == 1) {
      thirdRef.current.focus();
    }
  }, [secondOtp]);

  useEffect(() => {
    if (thirdOtp.length == 1) {
      fourthRef.current.focus();
    }
  }, [thirdOtp]);

  return (
    <View
      style={{
        flex: 1,
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
              ENTER
            </Text>
            <Text
              style={{
                fontFamily: Fonts.Poppins_SemiBold,
                fontSize: normalize(18),
                marginLeft: normalize(5),
                color: Colors.white,
              }}>
              VERIFICATION OTP
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
            Enter the OTP to reset your password
          </Text>

          <View
            style={{
              flexDirection: 'row',
              // backgroundColor: 'red',
              width: '100%',
              height: normalize(90),
              justifyContent: 'center',
            }}>
            <OtpComponent
              value={FirstOtp}
              refer={firstRef}
              onChangeText={e => {
                setFirstOtp(e);
              }}
            />
            <OtpComponent
              value={secondOtp}
              refer={secondRef}
              onChangeText={e => {
                setSecondOtp(e);
              }}
            />
            <OtpComponent
              value={thirdOtp}
              refer={thirdRef}
              onChangeText={e => {
                setThirdOtp(e);
              }}
            />
            <OtpComponent
              value={fourthOtp}
              refer={fourthRef}
              onChangeText={e => {
                setFourthOtp(e);
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => validation()}
            style={{
              height: normalize(35),
              width: '85%',
              backgroundColor: Colors.white,
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
              VERIFY
            </Text>
          </TouchableOpacity>
          <View
            style={{
              height: normalize(25),
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: normalize(10),
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: Fonts.Poppins_Regular,
                fontSize: normalize(11),
                marginLeft: normalize(170),
                color: Colors.white,
              }}>
              00. {seconds < 10 ? `0${seconds}` : seconds}
            </Text>
            <TouchableOpacity
              onPress={() => {
                seconds > 0 ? null : setSeconds(60);
                showMessage('OTP has been resent to your email');
              }}
              style={{
                marginLeft: normalize(6),
              }}>
              <Text
                style={{
                  fontFamily: Fonts.Poppins_SemiBold,
                  fontSize: normalize(11),
                  color: seconds > 0 ? 'grey' : Colors.moonstone_blue,
                }}>
                RESEND
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default VerificationOTP;
