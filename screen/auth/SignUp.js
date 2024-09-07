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
import {signUpRequest} from '../../redux/reducer/AuthReducer';
import {useDispatch, useSelector} from 'react-redux';
import showMessage from '../../utils/showMessage';
import connectionrequest from '../../utils/NetInfo';
import Loader from '../../utils/Loader';

const SignUp = ({navigation}) => {
  const dispatch = useDispatch();
  const AuthReducer = useSelector(state => state.AuthReducer);

  const [checked, setChecked] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef();
  const passRef = useRef();
  const lastNameRef = useRef();
  const userImg = 'https://cdn-icons-png.flaticon.com/128/13403/13403524.png';

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function validatePassword(pass) {
    var vp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return vp.test(pass);
  }

  function validation() {
    if (firstName == '') {
      showMessage('Please Enter Your First Name');
    } else if (lastName == '') {
      showMessage('Please Enter Your Last Name');
    } else if (email == '') {
      showMessage('Please Enter Your email');
    } else if (!validateEmail(email)) {
      showMessage('Please Enter a valid email');
    } else if (password == '') {
      showMessage('Please Enter Your Password');
    } else if (!validatePassword(password)) {
      showMessage(
        'Password must contain Minimum eight characters, at least one letter and one number ',
      );
    } else if (checked !== true) {
      showMessage('Please make sure to agree to the terms and conditions');
    } else {
      const formData = new FormData();
      formData.append('first_name', firstName);
      formData.append('last_name', lastName);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('profile_pic', userImg);

      connectionrequest()
        .then(state => {
          if (state) {
            dispatch(signUpRequest(formData));
          }
        })
        .catch(error => {
          showMessage('Please connect to the internet');
        });
    }
  }

  useEffect(() => {
    if (AuthReducer.type == 'Auth/signUpSuccess') {
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');

      setTimeout(() => {
        navigation.goBack();
      }, 1000);
    }
  }, [AuthReducer]);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.black} />
      <Loader visible={AuthReducer.type == 'Auth/signUpRequest'} />
      <ImageBackground
        blurRadius={normalize(6)}
        source={Icons.imgBackGround}
        style={{
          flex: 1,
        }}>
        <LinearGradient
          colors={['black', 'rgba(52, 52, 52, 0.1)']}
          style={{height: '100%', width: '100%'}}>
          <ScrollView
            style={{
              flex: 1,
            }}>
            <View
              style={{
                height: normalize(40),
                width: '100%',
                // backgroundColor: 'red',
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
                SIGN UP
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
                marginBottom: normalize(25),
              }}>
              This is just a text to fullfill the design
            </Text>

            <TextInputComponent2
              title={'First Name'}
              placeholder={'Enter your first name'}
              height={100}
              value={firstName}
              onChangeText={e => setFirstName(e)}
              onSubmitEditing={() => {
                lastNameRef.current.focus();
              }}
            />
            <TextInputComponent2
              title={'Last Name'}
              placeholder={'Enter your last name'}
              height={100}
              value={lastName}
              onChangeText={e => setLastName(e)}
              refer={lastNameRef}
              onSubmitEditing={() => {
                emailRef.current.focus();
              }}
            />
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
                marginTop: normalize(15),
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
                Accept Terms & Conditions and Privacy Policy
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => validation()}
              style={{
                height: normalize(45),
                width: '85%',
                backgroundColor: Colors.white,
                alignSelf: 'center',
                marginTop: normalize(20),
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
                SIGN UP
              </Text>
            </TouchableOpacity>
            <View
              style={{
                height: normalize(50),
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: normalize(30),
              }}>
              <Text
                style={{
                  fontFamily: Fonts.Poppins_Regular,
                  fontSize: normalize(11),
                  color: Colors.white,
                }}>
                Already Have An Account ?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text
                  style={{
                    fontFamily: Fonts.Poppins_SemiBold,
                    fontSize: normalize(11),
                    color: Colors.half_baked,
                    marginLeft: normalize(50),
                  }}>
                  LOGIN NOW
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default SignUp;
