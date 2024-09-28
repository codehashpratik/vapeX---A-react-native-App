import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import normalize from '../../utils/normalize';
import {Colors, Fonts, Icons} from '../../themes/Themes';

import TextInputComponent3 from '../../components/TextInputComponent3';
import showMessage from '../../utils/showMessage';
import ModalPasswordSuccess from '../../components/ModalPasswordSuccess';
import Loader from '../../utils/Loader';
import {useIsFocused} from '@react-navigation/native';
import TextInputComponent2 from '../../components/TextInputComponent2';
import LinearGradient from 'react-native-linear-gradient';

const ResetPassword = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const isFocused = useIsFocused();

  function validatePassword(pass) {
    var vp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return vp.test(pass);
  }

  function validation() {
    if (password == '') {
      showMessage('Please set a new Password');
    } else if (!validatePassword(password)) {
      showMessage(
        'Password must contain Minimum eight characters, at least one letter and one number ',
      );
    } else if (password !== confirmPass) {
      showMessage('Confirm password mismatch');
    } else {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
        setConfirmPass(''), setPassword('');
        <Loader visible={isFocused} />;

        setTimeout(() => {
          navigation.navigate('Login');
        }, 2000);
      }, 5000);
    }
  }

  return (
    <View
      style={{
        flex: 1,
      }}>
      <ImageBackground
        blurRadius={normalize(6)}
        source={Icons.imgBackGround}
        style={{
          flex: 1,
        }}>
        <LinearGradient
          colors={['black', 'rgba(52, 52, 52, 0.1)']}
          style={{height: '100%', width: '100%'}}>
          <ScrollView>
            <StatusBar
              barStyle={'light-content'}
              backgroundColor={Colors.black}
            />
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
                RESET YOUR
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
            </View>
            <Text
              style={{
                fontFamily: Fonts.Poppins_Regular,
                fontSize: normalize(10),
                marginLeft: normalize(10),
                alignSelf: 'center',
                color: Colors.white,
              }}>
              Reset your old password
            </Text>
            <TextInputComponent2
              height={normalize(70)}
              title={'New Password'}
              placeholder={'Enter new Password'}
              secureTextEntry={true}
              marginT={normalize(30)}
              value={password}
              onChangeText={e => {
                setPassword(e);
              }}
            />
            <TextInputComponent2
              height={normalize(70)}
              title={'Confirm Password'}
              placeholder={'Confirm new Password'}
              secureTextEntry={true}
              value={confirmPass}
              onChangeText={e => {
                setConfirmPass(e);
              }}
            />
            <TouchableOpacity
              onPress={() => validation()}
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
                RESET PASSWORD
              </Text>
            </TouchableOpacity>
            <ModalPasswordSuccess
              isVisible={isVisible}
              onBackdropPress={() => setIsVisible(false)}
            />
          </ScrollView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default ResetPassword;
