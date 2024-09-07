import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import normalize from '../../../utils/normalize';
import {Colors, Fonts, Icons} from '../../../themes/Themes';
const PaymentOptions = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: Colors.white,
        }}>
        <View
          style={{
            flexDirection: 'row',

            marginTop: normalize(15),
            flexDirection: 'row',
            width: '100%',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer();
            }}>
            <Image
              source={Icons.sidebar}
              style={{
                height: normalize(30),
                width: normalize(30),
                resizeMode: 'contain',
                marginLeft: normalize(15),
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: Fonts.Poppins_Regular,
              fontSize: normalize(20),
              marginLeft: normalize(10),
            }}>
            PAYMENT
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Poppins_SemiBold,
              fontSize: normalize(20),
              marginLeft: normalize(5),
              color: Colors.black,
            }}>
            OPTION
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'grey',
            height: 0.5,
            width: '85%',
            alignSelf: 'center',
          }}
        />

        <View
          style={{
            height: normalize(130),
            width: normalize(250),
            backgroundColor: Colors.lavender_light,
            borderRadius: normalize(10),
            borderWidth: 1,
            borderColor: Colors.lavender_deep,
            marginTop: normalize(20),
            marginLeft: normalize(35),
          }}>
          <View
            style={{
              flexDirection: 'row',
              height: normalize(20),
              width: '95%',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: normalize(10),
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontFamily: Fonts.Poppins_SemiBold,
                fontSize: normalize(10),
                color: Colors.black,
                marginRight: normalize(95),
              }}>
              John Doe
            </Text>
            <Image
              source={Icons.visa}
              style={{
                height: normalize(30),
                width: normalize(30),
                resizeMode: 'contain',
                marginLeft: normalize(45),
              }}
            />
          </View>
          <Text
            style={{
              fontFamily: Fonts.Poppins_Regular,
              fontSize: normalize(9),
              marginLeft: normalize(10),
            }}>
            XXXX XXXX XXXX 4569
          </Text>
          <View
            style={{
              flexDirection: 'row',

              height: normalize(30),
              width: '95%',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: normalize(44),
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: normalize(9),
                color: Colors.black,
                marginRight: normalize(65),
              }}>
              XX / XX
            </Text>
            <TouchableOpacity
              style={{
                height: normalize(25),
                width: normalize(55),
                backgroundColor: Colors.lavender,
                borderRadius: normalize(20),
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: normalize(20),
              }}>
              <Image
                source={Icons.edit}
                style={{
                  height: normalize(10),
                  width: normalize(10),
                  resizeMode: 'center',
                  tintColor: Colors.mediumState_blue,
                }}
              />
              <Text
                style={{
                  fontSize: normalize(9),
                  marginLeft: normalize(5),
                  color: Colors.mediumState_blue,
                  fontFamily: Fonts.Poppins_Bold,
                }}>
                EDIT
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: normalize(22),
                width: normalize(22),
                borderWidth: 0.6,
                borderColor: 'grey',
                borderRadius: normalize(100),
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: normalize(7),
              }}>
              <Image
                source={Icons.bin}
                style={{
                  height: normalize(10),
                  width: normalize(10),
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PaymentOptions;
