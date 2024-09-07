import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {Colors, Fonts, Icons} from '../themes/Themes';
import normalize from '../utils/normalize';

const ModalDelete = ({isVisible = false, onBackdropPress = () => {}}) => {
  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.5}
      // backdropColor="green"
      animationIn={'zoomIn'}
      animationOut={'slideOutDown'}
      animationInTiming={700}
      animationOutTiming={800}
      onBackButtonPress={() => onBackdropPress()}
      onBackdropPress={() => onBackdropPress()}
      style={{
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        margin: 0,
        padding: 0,
      }}>
      <View
        style={{
          width: '90%',
          height: '33%',
          backgroundColor: 'white',
          position: 'absolute',
          alignSelf: 'center',
          // bottom: 0,
          borderTopLeftRadius: normalize(15),
          borderTopRightRadius: normalize(15),
          paddingHorizontal: normalize(15),
          paddingVertical: normalize(30),
          borderBottomLeftRadius: normalize(15),
          borderBottomRightRadius: normalize(15),
        }}>
        <View
          style={{
            height: normalize(65),
            width: normalize(65),
            borderColor: Colors.lavender,
            backgroundColor: 'white',
            borderRadius: normalize(100),
            alignSelf: 'center',
            marginBottom: normalize(15),
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: 'blue',
            elevation: normalize(9),
          }}>
          <View
            style={{
              height: normalize(58),
              width: normalize(58),
              borderColor: Colors.lavender,
              backgroundColor: Colors.white,
              borderRadius: normalize(100),
              shadowColor: 'blue',
              elevation: normalize(5),
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={Icons.delete}
              style={{
                height: normalize(25),
                width: normalize(25),
                resizeMode: 'contain',
                tintColor: Colors.navy_blue,
                marginRight: normalize(4),
              }}
            />
          </View>
        </View>
        <Text
          style={{
            fontFamily: Fonts.Poppins_SemiBold,
            fontSize: normalize(12),
            alignSelf: 'center',
            color: Colors.black,
          }}>
          Are You Sure You Want To
        </Text>
        <Text
          style={{
            fontFamily: Fonts.Poppins_SemiBold,
            fontSize: normalize(12),
            alignSelf: 'center',
            color: Colors.black,
          }}>
          Delete Your Account?
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: normalize(10),
          }}>
          <TouchableOpacity
            style={{
              height: normalize(30),
              width: normalize(75),
              backgroundColor: Colors.navy_blue,
              borderRadius: normalize(7),
              justifyContent: 'center',
              marginHorizontal: normalize(5),
            }}>
            <Text
              style={{
                fontFamily: Fonts.Poppins_Regular,
                fontSize: normalize(8),
                color: Colors.white,
                textAlign: 'center',
              }}>
              YES, DELETE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onBackdropPress()}
            style={{
              height: normalize(30),
              width: normalize(75),
              backgroundColor: Colors.white,
              borderRadius: normalize(7),
              justifyContent: 'center',
              marginHorizontal: normalize(5),
              borderWidth: 1,
              borderColor: Colors.navy_blue,
            }}>
            <Text
              style={{
                fontFamily: Fonts.Poppins_Regular,
                fontSize: normalize(8),
                color: Colors.navy_blue,
                textAlign: 'center',
              }}>
              CANCEL
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalDelete;
