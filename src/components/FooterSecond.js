import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import normalize from '../utils/normalize';
import {Colors, Fonts, Icons} from '../themes/Themes';
import LinearGradient from 'react-native-linear-gradient';

const FooterSecond = props => {
  function onPressFunc() {
    if (props.onPress) {
      props.onPress();
    }
  }
  return (
    <View
      style={{
        height: normalize(200),
        width: '100%',
        backgroundColor: Colors.black,
        borderBottomWidth: 2,
        borderBottomColor: 'blue',
        // marginTop: normalize(40),
      }}>
      <ImageBackground
        source={Icons.FooterBack}
        style={{
          flex: 1,
          opacity: 1,
        }}>
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.6)',
            flex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              // backgroundColor: 'red',
              alignItems: 'center',
              height: normalize(25),
              marginTop: normalize(30),
            }}>
            <Text
              style={{
                fontFamily: Fonts.Poppins_Regular,
                color: Colors.white,
                fontSize: normalize(17),
              }}>
              GET
            </Text>
            <Text
              style={{
                fontFamily: Fonts.Poppins_Bold,
                color: Colors.white,
                fontSize: normalize(17),
                marginHorizontal: normalize(8),
              }}>
              25% OFF
            </Text>
            <Text
              style={{
                fontFamily: Fonts.Poppins_Regular,
                color: Colors.white,
                fontSize: normalize(17),
              }}>
              FOR YOUR
            </Text>
          </View>
          <Text
            style={{
              fontFamily: Fonts.Poppins_Bold,
              color: Colors.white,
              fontSize: normalize(17),
              textAlign: 'center',
              marginHorizontal: normalize(8),
            }}>
            FIRST ORDER
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Poppins_Regular,
              color: Colors.white,
              fontSize: normalize(8),
              textAlign: 'center',
              marginHorizontal: normalize(8),
            }}>
            Curabitur eget massa sagittis, pretium tortor eu, pulvinar lacus.
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Poppins_Regular,
              color: Colors.white,
              fontSize: normalize(8),
              textAlign: 'center',
              marginHorizontal: normalize(8),
            }}>
            Curabitur eget massa sagittis
          </Text>

          <TouchableOpacity
            onPress={onPressFunc}
            style={{
              height: normalize(30),
              width: normalize(85),
              backgroundColor: 'blue',
              marginTop: normalize(20),
              alignSelf: 'center',
              borderRadius: normalize(5),
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
                  color: Colors.white,
                  fontSize: normalize(8),
                  fontFamily: Fonts.Poppins_Regular,
                  textAlign: 'center',
                }}>
                GO TO SHOP
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
FooterSecond.propTypes = {
  onPress: PropTypes.func,
};

export default FooterSecond;
