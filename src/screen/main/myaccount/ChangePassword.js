import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Colors, Fonts, Icons} from '../../../themes/Themes';
import normalize from '../../../utils/normalize';
import TextInputComponent3 from '../../../components/TextInputComponent3';
import showMessage from '../../../utils/showMessage';
import ModalPasswordSuccess from '../../../components/ModalPasswordSuccess';
import {logoutRequest} from '../../../redux/reducer/AuthReducer';
import {useDispatch} from 'react-redux';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import Footer from '../../../components/Footer';

const ChangePassword = ({navigation}) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const newPass = useRef();
  const confirmPass = useRef();
  const authPass = 'Pratik123';

  function validatePassword(pass) {
    var vp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return vp.test(pass);
  }

  function validation() {
    if (oldPassword == '') {
      showMessage('Please enter your Old Password');
    } else if (oldPassword !== authPass) {
      showMessage('Old Password is incorrect');
    } else if (newPassword == '') {
      showMessage('Please set a new Password');
    } else if (!validatePassword(newPassword)) {
      showMessage(
        'Password must contain Minimum eight characters, at least one letter and one number ',
      );
    } else if (newPassword !== confirmPassword) {
      showMessage('Confirm password mismatch');
    } else {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
        setNewPassword('');
        setOldPassword('');
        setConfirmPassword('');
        setTimeout(() => {
          dispatch(logoutRequest());
        }, 2000);
      }, 5000);
    }
  }

  return (
    <View
      style={{
        flex: 1,
      }}>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: Colors.white,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            height: normalize(40),
            width: normalize(40),
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: normalize(20),
            marginTop: normalize(10),
          }}>
          <Image
            source={Icons.back}
            style={{
              height: normalize(30),
              width: normalize(30),
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>

        <LottieView
          source={Icons.passwordChange2}
          autoPlay
          loop
          style={{
            height: normalize(150),
            width: normalize(150),
            alignSelf: 'center',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            // marginTop: normalize(100),
          }}>
          <Text
            style={{
              fontFamily: Fonts.Poppins_Regular,
              fontSize: normalize(20),
              marginLeft: normalize(10),
            }}>
            CHANGE
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Poppins_SemiBold,
              fontSize: normalize(20),
              marginLeft: normalize(5),
              color: Colors.black,
            }}>
            PASSWORD
          </Text>
        </View>
        <Text
          style={{
            alignSelf: 'center',
            fontFamily: Fonts.Poppins_Regular,
            fontSize: normalize(10),
            marginBottom: normalize(20),
          }}>
          Change your old password
        </Text>
        <TextInputComponent3
          title={'Old Password'}
          secureTextEntry={true}
          height={normalize(70)}
          placeholder={'Enter your old password'}
          value={oldPassword}
          onSubmitEditing={() => {
            newPass.current.focus();
          }}
          onChangeText={e => {
            setOldPassword(e);
          }}
        />
        <TextInputComponent3
          title={'New Password'}
          secureTextEntry={true}
          height={normalize(70)}
          placeholder={'Enter new password'}
          value={newPassword}
          refer={newPass}
          onSubmitEditing={() => {
            confirmPass.current.focus();
          }}
          onChangeText={e => {
            setNewPassword(e);
          }}
        />
        <TextInputComponent3
          title={'Confirm New Password'}
          secureTextEntry={true}
          height={normalize(70)}
          placeholder={'Confirm your new password'}
          value={confirmPassword}
          refer={confirmPass}
          onChangeText={e => setConfirmPassword(e)}
        />
        <TouchableOpacity
          onPress={() => {
            validation();
          }}
          style={{
            height: normalize(45),
            width: '85%',
            backgroundColor: Colors.navy_blue,
            marginTop: normalize(15),
            borderRadius: normalize(6),
            alignSelf: 'center',
            justifyContent: 'center',
            marginBottom: normalize(50),
          }}>
          <LinearGradient
            style={{
              height: '100%',
              width: '100%',
              borderRadius: normalize(6),
              justifyContent: 'center',
            }}
            colors={[Colors.mediumState_blue, Colors.moonstone_blue]}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 1}}>
            <Text
              style={{
                fontFamily: Fonts.Poppins_Regular,
                color: Colors.white,
                fontSize: normalize(11),
                textAlign: 'center',
              }}>
              Reset Password
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <ModalPasswordSuccess
          isVisible={isVisible}
          onBackdropPress={() => setIsVisible(false)}
        />
        <Footer />
      </ScrollView>
    </View>
  );
};

export default ChangePassword;
