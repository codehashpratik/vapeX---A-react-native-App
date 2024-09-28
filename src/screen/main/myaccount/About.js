import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {Colors, Fonts, Icons} from '../../../themes/Themes';
import normalize from '../../../utils/normalize';
import FooterSecond from '../../../components/FooterSecond';
import Footer from '../../../components/Footer';
import LinearGradient from 'react-native-linear-gradient';

const About = ({navigation}) => {
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
            height: normalize(160),
            width: '100%',
          }}>
          <ImageBackground
            source={Icons.aboutBack}
            style={{
              flex: 1,
            }}>
            <View
              style={{
                flex: 1,
                // backgroundColor: 'rgba(0,0,0,0.6)',
                justifyContent: 'center',
                paddingVertical: normalize(60),
              }}>
              <Text
                style={{
                  fontFamily: Fonts.Poppins_Regular,
                  color: Colors.white,
                  fontSize: normalize(13),
                  marginLeft: normalize(30),
                }}>
                ABOUT
              </Text>
              <Text
                style={{
                  //   fontFamily: Fonts.Poppins_Bold,
                  color: Colors.white,
                  fontSize: normalize(30),
                  marginLeft: normalize(30),
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
            height: normalize(520),
            width: '100%',
          }}>
          <ImageBackground
            source={Icons.aboutEffect}
            style={{
              flex: 1,
            }}>
            <View
              style={{
                flex: 1,
              }}>
              <View
                style={{
                  height: normalize(200),
                  width: '100%',
                  //   backgroundColor: 'yellow',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View>
                  <Text
                    style={{
                      fontFamily: Fonts.Poppins_Regular,
                      fontSize: normalize(16),
                      marginLeft: normalize(20),
                    }}>
                    THE BEST VAPE
                  </Text>

                  <Text
                    style={{
                      fontFamily: Fonts.Poppins_Bold,
                      fontSize: normalize(16),
                      color: Colors.black,
                      marginLeft: normalize(20),
                    }}>
                    STORE IN TOWN
                  </Text>

                  <Text
                    style={{
                      fontFamily: Fonts.Poppins_Regular,
                      fontSize: normalize(7),
                      //   color: Colors.black,
                      marginLeft: normalize(20),
                    }}>
                    Lorem ipsum dolor sit amet,
                  </Text>

                  <Text
                    style={{
                      fontFamily: Fonts.Poppins_Regular,
                      fontSize: normalize(7),
                      //   color: Colors.black,
                      marginLeft: normalize(20),
                    }}>
                    Nunc nec pharetra odio. Mauris eget
                  </Text>

                  <Text
                    style={{
                      fontFamily: Fonts.Poppins_Regular,
                      fontSize: normalize(7),
                      //   color: Colors.black,
                      marginLeft: normalize(20),
                    }}>
                    Lorem ipsum dolor
                  </Text>

                  <Text
                    style={{
                      fontFamily: Fonts.Poppins_Regular,
                      fontSize: normalize(7),
                      //   color: Colors.black,
                      marginLeft: normalize(20),
                    }}>
                    Lorem ipsum dolor sit amet,
                  </Text>

                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Products');
                    }}
                    style={{
                      height: normalize(25),
                      width: normalize(50),
                      backgroundColor: 'blue',
                      borderRadius: normalize(5),
                      marginLeft: normalize(20),
                      marginTop: normalize(10),
                      justifyContent: 'center',
                      alignItems: 'center',
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
                          fontSize: normalize(6),
                          color: Colors.white,
                          textAlign: 'center',
                        }}>
                        SHOP NOW
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
                <Image
                  source={Icons.aboutPic}
                  style={{
                    height: normalize(130),
                    width: normalize(130),
                    resizeMode: 'contain',
                    marginLeft: normalize(20),
                  }}
                />
                <Image
                  source={Icons.aboutPic2}
                  style={{
                    height: normalize(80),
                    width: normalize(80),
                    resizeMode: 'contain',
                    marginLeft: normalize(20),
                    position: 'absolute',
                    right: normalize(90),
                    bottom: normalize(10),
                  }}
                />
              </View>
              <View
                style={{
                  height: normalize(200),
                  width: '100%',
                  //   backgroundColor: 'yellow',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={Icons.aboutPic3}
                  style={{
                    height: normalize(130),
                    width: normalize(130),
                    resizeMode: 'contain',
                    marginLeft: normalize(20),
                  }}
                />
                <View>
                  <Text
                    style={{
                      fontFamily: Fonts.Poppins_Regular,
                      fontSize: normalize(16),
                      marginLeft: normalize(20),
                    }}>
                    OUR CORE
                  </Text>
                  <Text
                    style={{
                      fontFamily: Fonts.Poppins_Bold,
                      fontSize: normalize(16),
                      color: Colors.black,
                      marginLeft: normalize(20),
                    }}>
                    VALUES
                  </Text>
                  <Text
                    style={{
                      fontFamily: Fonts.Poppins_Regular,
                      fontSize: normalize(7),
                      //   color: Colors.black,
                      marginLeft: normalize(20),
                    }}>
                    Lorem ipsum dolor sit amet,
                  </Text>
                  <Text
                    style={{
                      fontFamily: Fonts.Poppins_Regular,
                      fontSize: normalize(7),
                      //   color: Colors.black,
                      marginLeft: normalize(20),
                    }}>
                    Nunc nec pharetra odio. Mauris eget
                  </Text>
                  <Text
                    style={{
                      fontFamily: Fonts.Poppins_Regular,
                      fontSize: normalize(7),
                      //   color: Colors.black,
                      marginLeft: normalize(20),
                    }}>
                    * Be Adventurous,
                  </Text>
                  <Text
                    style={{
                      fontFamily: Fonts.Poppins_Regular,
                      fontSize: normalize(7),
                      //   color: Colors.black,
                      marginLeft: normalize(20),
                    }}>
                    * Create Long-Term Relationships
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  fontFamily: Fonts.Poppins_Regular,
                  fontSize: normalize(7),
                  textAlign: 'center',
                  marginLeft: normalize(20),
                }}>
                Vivamus metus tellus, tristique aliquet libero ac, pharetra
                egestas odio.
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.Poppins_Regular,
                  fontSize: normalize(7),
                  textAlign: 'center',
                  marginLeft: normalize(20),
                }}>
                magna aliquet at. Duis dapibus nibh sit amet metus ultricies
                dictum.
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.Poppins_Regular,
                  fontSize: normalize(7),
                  textAlign: 'center',
                  marginLeft: normalize(20),
                }}>
                Aenean faucibus interdum elementum.
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Contact')}
                style={{
                  height: normalize(35),
                  width: normalize(80),
                  backgroundColor: 'blue',
                  borderRadius: normalize(5),
                  alignSelf: 'center',
                  marginTop: normalize(10),
                  justifyContent: 'center',
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
                      fontSize: normalize(9),
                      color: Colors.white,
                      textAlign: 'center',
                    }}>
                    CONTACT US
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
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

export default About;
