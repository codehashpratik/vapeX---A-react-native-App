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
import Footer from '../../../components/Footer';

const Address = ({navigation}) => {
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
            MY
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Poppins_SemiBold,
              fontSize: normalize(20),
              marginLeft: normalize(5),
              color: Colors.black,
            }}>
            ADDRESS
          </Text>
        </View>
        <View
          style={{
            height: normalize(120),
            width: '85%',
            marginTop: normalize(25),
            alignSelf: 'center',
            borderRadius: normalize(10),
            borderWidth: 0.7,
            borderColor: 'grey',
          }}>
          <View
            style={{
              height: normalize(40),
              width: '90%',

              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: normalize(5),
              borderBottomWidth: 0.7,
              borderBottomColor: 'grey',
            }}>
            <Text
              style={{
                fontFamily: Fonts.Poppins_SemiBold,
                fontSize: normalize(11),
                color: Colors.black,
              }}>
              Address 1
            </Text>
            <TouchableOpacity
              style={{
                height: normalize(21),
                width: normalize(51),
                backgroundColor: Colors.lavender,
                borderRadius: normalize(20),
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: normalize(100),
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
                height: normalize(30),
                width: normalize(30),
                borderWidth: 0.6,
                borderColor: 'grey',
                borderRadius: normalize(100),
                marginLeft: normalize(8),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={Icons.bin}
                style={{
                  height: normalize(15),
                  width: normalize(15),
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontFamily: Fonts.Poppins_SemiBold,
              color: Colors.black,
              fontSize: normalize(11),
              marginLeft: normalize(10),
              marginTop: normalize(10),
            }}>
            John Doe
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Poppins_Regular,
              fontSize: normalize(10),
              marginLeft: normalize(10),
            }}>
            7554 Imelda Lights , Lake Ashlee 23438
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Poppins_Regular,
              fontSize: normalize(10),
              marginLeft: normalize(10),
            }}>
            (846)720-1188
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Address;
