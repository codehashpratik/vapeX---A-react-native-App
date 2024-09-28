import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import normalize from '../utils/normalize';
import {Colors, Fonts, Icons} from '../themes/Themes';

const Footer = () => {
  return (
    <View
      style={{
        height: normalize(320),
        width: '100%',
        backgroundColor: Colors.navy_blue_deep,
      }}>
      <Text
        style={{
          fontSize: normalize(20),
          color: Colors.white,
          fontFamily: Fonts.Poppins_Bold,
          textAlign: 'center',
          marginTop: normalize(20),
        }}>
        vapeX
      </Text>
      <Text
        style={{
          fontSize: normalize(9),
          color: Colors.white,
          fontFamily: Fonts.Poppins_Regular,
          textAlign: 'center',
          marginTop: normalize(4),
        }}>
        HOME | ABOUT | SHIPPINGS | ACCOUNT | CONTACT US
      </Text>

      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: normalize(10),
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
              tintColor: Colors.white,
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
              tintColor: Colors.white,
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
              tintColor: Colors.white,
            }}
          />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: normalize(7),
          color: Colors.white,
          fontFamily: Fonts.Poppins_Regular,
          textAlign: 'center',
          marginTop: normalize(4),
        }}>
        © COPYRIGHT 2024 VAPEX. All RIGHT RESERVED.
      </Text>
      <Text
        style={{
          fontSize: normalize(7),
          color: Colors.white,
          fontFamily: Fonts.Poppins_Regular,
          textAlign: 'center',
          marginTop: normalize(4),
        }}>
        TERMS AND CONDITIONS | PRIVACY POLICY | AGE POLICY
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: normalize(10),
        }}>
        <Image
          source={Icons.visa}
          style={{
            height: normalize(30),
            width: normalize(30),
            resizeMode: 'contain',
            marginHorizontal: normalize(5),
          }}
        />
        <Image
          source={Icons.master}
          style={{
            height: normalize(30),
            width: normalize(30),
            resizeMode: 'contain',
            marginHorizontal: normalize(5),
          }}
        />
        <Image
          source={Icons.express}
          style={{
            height: normalize(30),
            width: normalize(30),
            resizeMode: 'contain',
            marginHorizontal: normalize(5),
          }}
        />
        <Image
          source={Icons.discover}
          style={{
            height: normalize(30),
            width: normalize(30),
            resizeMode: 'contain',
            marginHorizontal: normalize(5),
          }}
        />
      </View>

      <Text
        style={{
          fontFamily: Fonts.Poppins_SemiBold,
          color: Colors.white,
          fontSize: normalize(10),
          textAlign: 'center',
          marginTop: normalize(10),
        }}>
        WARNING : AGE RESTRICTED PRODUCT
      </Text>
      <Text
        style={{
          fontFamily: Fonts.Poppins_Regular,
          color: 'grey',
          fontSize: normalize(7),
          textAlign: 'center',
          marginTop: normalize(4),
        }}>
        Not for sale to minors. Only to be sold to adults of legal smoking age
      </Text>
      <Text
        style={{
          fontFamily: Fonts.Poppins_Regular,
          color: 'grey',
          fontSize: normalize(7),
          textAlign: 'center',
          //   marginTop: normalize(4),
        }}>
        Not to be sold outside of the U.S.A.
      </Text>
      <Text
        style={{
          fontFamily: Fonts.Poppins_Regular,
          color: 'grey',
          fontSize: normalize(7),
          textAlign: 'center',
          //   marginTop: normalize(4),
        }}>
        WARNING:CA PROP 65-This product contains nicotine.
      </Text>
    </View>
  );
};

export default Footer;
