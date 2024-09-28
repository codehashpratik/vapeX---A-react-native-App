import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Colors, Fonts, Icons} from '../../themes/Themes';
import normalize from '../../utils/normalize';
import TextInputComponent2 from '../../components/TextInputComponent2';
import CheckBox2 from '../../components/CheckBox2';
import LinearGradient from 'react-native-linear-gradient';
import connectionrequest from '../../utils/NetInfo';
import {useDispatch, useSelector} from 'react-redux';
import showMessage from '../../utils/showMessage';
import Loader from '../../utils/Loader';
import {getDataReguest, loginRequest} from '../../redux/reducer/AuthReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import constants from '../../utils/constants';
const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const AuthReducer = useSelector(state => state.AuthReducer);
  const isFocused = useIsFocused();
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef();
  const passRef = useRef();

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function validatePassword(pass) {
    var vp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return vp.test(pass);
  }

  function validation() {
    if (email == '') {
      showMessage('Please Enter Your email');
    } else if (!validateEmail(email)) {
      showMessage('Please Enter a valid email');
    } else if (password == '') {
      showMessage('Please Enter Your Password');
    } else if (!validatePassword(password)) {
      showMessage(
        'Password must contain Minimum eight characters, at least one letter and one number ',
      );
    } else if (checked) {
      let obj = {
        email: email,
        password: password,
        rememberme: checked,
      };

      connectionrequest()
        .then(state => {
          if (state) {
            dispatch(loginRequest(obj));
          }
        })
        .catch(error => {
          showMessage('Please connect to the internet');
        });
    } else {
      let obj = {
        email: email,
        password: password,
        rememberme: checked,
      };

      connectionrequest()
        .then(state => {
          if (state) {
            dispatch(loginRequest(obj));
          }
        })
        .catch(error => {
          showMessage('Please connect to the internet');
        });
    }
  }
  // useEffect(() => {
  //   if (isFocused) {
  //     dispatch(getDataReguest());
  //   }
  // }, [isFocused]);

  // useEffect(() => {
  //   if (isFocused && !AuthReducer.credentials) {
  //     setTimeout(() => {
  //       dispatch(getDataReguest());
  //     }, 1000);
  //   }
  // }, [isFocused, AuthReducer.credentials]);

  useEffect(() => {
    if (AuthReducer.type == 'Auth/getDataSuccess') {
      const credentials = JSON.parse(AuthReducer.credentials);
      if (email !== credentials.email) {
        setEmail(credentials.email);
      }
      if (password !== credentials.password) {
        setPassword(credentials.password);
      }
    }
  }, [AuthReducer]);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.black} />
      <Loader visible={AuthReducer.type == 'Auth/loginRequest'} />
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
            <View
              style={{
                height: normalize(40),
                width: '100%',
                marginTop: normalize(50),
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: Colors.white,
                  fontSize: normalize(24),
                  fontFamily: Fonts.Poppins_Regular,
                }}>
                SIGN IN
              </Text>
              <Text
                style={{
                  color: Colors.white,
                  fontSize: normalize(24),
                  paddingLeft: normalize(6),
                  fontFamily: Fonts.Poppins_Bold,
                  borderColor: Colors.nice_blue,
                }}>
                NOW
              </Text>
            </View>
            <Text
              style={{
                fontFamily: Fonts.Poppins_Regular,
                color: Colors.white,
                textAlign: 'center',
                fontSize: normalize(10),
                marginBottom: normalize(50),
              }}>
              This is just a text to fullfill the design
            </Text>

            <TextInputComponent2
              title={'Email'}
              placeholder={'Enter your email'}
              height={100}
              value={email}
              onChangeText={e => setEmail(e)}
              refer={emailRef}
              keyboardType="email-address"
              onSubmitEditing={() => {
                passRef.current.focus();
              }}
            />
            <TextInputComponent2
              title={'Password'}
              placeholder={'Enter your password'}
              height={100}
              secureTextEntry={true}
              value={password}
              onChangeText={e => setPassword(e)}
              refer={passRef}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <CheckBox2
                status={checked}
                onPress={() => {
                  setChecked(checked == true ? false : true);
                }}
                margin={normalize(25)}
              />
              <Text
                style={{
                  fontFamily: Fonts.Poppins_Regular,
                  color: Colors.white,
                  fontSize: normalize(10),
                }}>
                Remember Me?
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPassword')}
                style={{
                  // backgroundColor: 'red',
                  width: normalize(120),
                  height: normalize(20),
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: normalize(60),
                }}>
                <Text
                  style={{
                    fontFamily: Fonts.Poppins_Regular,
                    color: Colors.half_baked,
                    fontSize: normalize(10),
                  }}>
                  FORGOT PASSWORD?
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => validation()}
              style={{
                height: normalize(45),
                width: '85%',
                backgroundColor: Colors.white,
                alignSelf: 'center',
                marginTop: normalize(14),
                borderRadius: normalize(7),
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: Fonts.Poppins_Regular,
                  color: Colors.black,
                  fontSize: normalize(14),
                  textAlign: 'center',
                }}>
                LOGIN
              </Text>
            </TouchableOpacity>
            <View
              style={{
                height: normalize(50),
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: Fonts.Poppins_Regular,
                  fontSize: normalize(11),
                  color: Colors.white,
                }}>
                Don't Have An Account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text
                  style={{
                    fontFamily: Fonts.Poppins_Regular,
                    fontSize: normalize(11),
                    color: Colors.half_baked,
                    marginLeft: normalize(50),
                  }}>
                  SIGN UP NOW
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default Login;
