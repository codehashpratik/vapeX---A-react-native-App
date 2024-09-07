import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Colors, Fonts, Icons} from '../../../themes/Themes';
import normalize from '../../../utils/normalize';
import FooterSecond from '../../../components/FooterSecond';
import Footer from '../../../components/Footer';
import TextInputComponent3 from '../../../components/TextInputComponent3';
import showMessage from '../../../utils/showMessage';
import LinearGradient from 'react-native-linear-gradient';

const Contact = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function validation() {
    if (name == '') {
      showMessage('Please Enter Your Full Name');
    } else if (email == '') {
      showMessage('Please Enter Your email');
    } else if (!validateEmail(email)) {
      showMessage('Please Enter a valid email');
    } else if (message == '') {
      showMessage('Please Enter Your Message to Continue ');
    } else {
      showMessage('Your Message has been submitted.');
      setTimeout(() => {
        setEmail('');
        setName('');
        setPhone('');
        setMessage('');
      }, 2000);
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
        <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
        <View
          style={{
            height: normalize(180),
            width: '100%',
          }}>
          <ImageBackground
            source={Icons.contactBack2}
            style={{
              flex: 1,
            }}>
            <View
              style={{
                flex: 1,
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
                    height: normalize(25),
                    width: normalize(25),
                    resizeMode: 'contain',
                    tintColor: Colors.white,
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: Fonts.Poppins_Regular,
                  color: 'grey',
                  fontSize: normalize(10),
                  marginLeft: normalize(30),
                  marginTop: normalize(25),
                  letterSpacing: normalize(5),
                }}>
                CONTACT
              </Text>
              <Text
                style={{
                  //   fontFamily: Fonts.Poppins_Bold,
                  color: Colors.white,
                  fontSize: normalize(25),
                  marginLeft: normalize(31),
                  // backgroundColor: 'red',
                  marginBottom: normalize(10),
                }}>
                vapeX
              </Text>

              <Text
                style={{
                  fontFamily: Fonts.Poppins_Regular,
                  color: Colors.white,
                  fontSize: normalize(7),
                  marginLeft: normalize(30),
                }}>
                Aliquam diam elit, interdum in ornare eu
              </Text>

              <Text
                style={{
                  fontFamily: Fonts.Poppins_Regular,
                  color: Colors.white,
                  fontSize: normalize(7),
                  marginLeft: normalize(30),
                }}>
                sagittis, pretium tortor
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            height: normalize(730),
            width: '100%',
          }}>
          <ImageBackground
            source={Icons.aboutEffect}
            style={{
              width: '100%',
              height: '46%',
            }}>
            <View
              style={{
                flex: 1,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: Fonts.Poppins_Regular,
                    fontSize: normalize(18),
                    marginTop: normalize(20),
                  }}>
                  GET IN
                </Text>
                <Text
                  style={{
                    fontFamily: Fonts.Poppins_SemiBold,
                    fontSize: normalize(18),
                    marginTop: normalize(20),
                    color: Colors.black,
                    marginLeft: normalize(5),
                  }}>
                  TOUCH
                </Text>
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: normalize(8),
                }}>
                Have any question or neet to get more information about the
                product ?
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: normalize(8),
                  marginBottom: normalize(30),
                }}>
                Either way you are in right spot. Please fill the form
              </Text>
              <TextInputComponent3
                height={normalize(70)}
                title={'Full Name'}
                placeholder={'Enter your Full name'}
                value={name}
                onChangeText={e => setName(e)}
                onSubmitEditing={() => {
                  emailRef.current.focus();
                }}
              />
              <TextInputComponent3
                height={normalize(70)}
                title={'Email'}
                placeholder={'Enter your Email'}
                refer={emailRef}
                value={email}
                onChangeText={e => {
                  setEmail(e);
                }}
                onSubmitEditing={() => {
                  phoneRef.current.focus();
                }}
              />
              <TextInputComponent3
                height={normalize(70)}
                title={'Phone'}
                placeholder={'Enter your Phone number'}
                refer={phoneRef}
                value={phone}
                onChangeText={e => {
                  setPhone(e);
                }}
                onSubmitEditing={() => {
                  messageRef.current.focus();
                }}
              />
              <TextInputComponent3
                height={normalize(150)}
                title={'Message'}
                placeholder={'Type here....'}
                multiline={true}
                refer={messageRef}
                value={message}
                textAlignVertical={'top'}
                onChangeText={e => {
                  setMessage(e);
                }}
              />

              <TouchableOpacity
                onPress={() => {
                  validation();
                }}
                style={{
                  height: normalize(35),
                  width: '85%',
                  backgroundColor: Colors.navy_blue,
                  marginTop: normalize(15),
                  borderRadius: normalize(6),
                  alignSelf: 'center',
                  justifyContent: 'center',
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
                    Continue
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: normalize(25),
                  marginTop: normalize(20),
                }}>
                <Text
                  style={{
                    fontFamily: Fonts.Poppins_Bold,
                    fontSize: normalize(9),
                    marginTop: normalize(20),
                    color: Colors.black,
                  }}>
                  Address :
                </Text>
                <Text
                  style={{
                    fontFamily: Fonts.Poppins_Regular,
                    fontSize: normalize(9),
                    marginTop: normalize(20),

                    marginLeft: normalize(5),
                  }}>
                  123 Suspendis matti , Visaosung Building VST
                </Text>
              </View>
              <Text
                style={{
                  fontFamily: Fonts.Poppins_Regular,
                  fontSize: normalize(9),

                  marginLeft: normalize(25),
                }}>
                123 Suspendis matti , Visaosung Building VST
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: normalize(25),
                  marginTop: normalize(10),
                }}>
                <Text
                  style={{
                    fontFamily: Fonts.Poppins_Bold,
                    fontSize: normalize(9),

                    color: Colors.black,
                  }}>
                  Email :
                </Text>
                <Text
                  style={{
                    fontFamily: Fonts.Poppins_Regular,
                    fontSize: normalize(9),

                    marginLeft: normalize(5),
                  }}>
                  support@vapeX.com
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: normalize(25),
                  marginTop: normalize(10),
                }}>
                <Text
                  style={{
                    fontFamily: Fonts.Poppins_Bold,
                    fontSize: normalize(9),

                    color: Colors.black,
                  }}>
                  Call us :
                </Text>
                <Text
                  style={{
                    fontFamily: Fonts.Poppins_Regular,
                    fontSize: normalize(9),

                    marginLeft: normalize(5),
                  }}>
                  (012)-345-67890
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  height: normalize(40),
                  // backgroundColor: 'red',
                  marginLeft: normalize(24),
                  width: '30%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: normalize(0),
                }}>
                <TouchableOpacity
                  style={{
                    marginHorizontal: normalize(8),
                  }}>
                  <Image
                    source={Icons.facebook}
                    style={{
                      height: normalize(17),
                      width: normalize(17),
                      tintColor: 'blue',
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginHorizontal: normalize(8),
                  }}>
                  <Image
                    source={Icons.instagram}
                    style={{
                      height: normalize(17),
                      width: normalize(17),
                      tintColor: 'blue',
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginHorizontal: normalize(8),
                  }}>
                  <Image
                    source={Icons.linkedin}
                    style={{
                      height: normalize(17),
                      width: normalize(17),
                      tintColor: 'blue',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
        <FooterSecond
          onPress={() => {
            navigation.navigate('Products');
          }}
        />
        <Footer />
      </ScrollView>
    </View>
  );
};

export default Contact;
