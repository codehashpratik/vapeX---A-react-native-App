import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {Colors, Fonts, Icons} from '../themes/Themes';
import normalize from '../utils/normalize';
import LottieView from 'lottie-react-native';

const OrderSuccessModal = ({isVisible = false, onBackdropPress = () => {}}) => {
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
          height: '38%',
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
        <LottieView
          style={{
            height: normalize(60),
            width: normalize(60),
            alignSelf: 'center',
          }}
          source={Icons.ordersuccess}
          autoPlay
          loop
        />
        <Text
          style={{
            fontFamily: Fonts.Poppins_Medium,
            fontSize: normalize(13),
            color: Colors.black,
            textAlign: 'center',
            marginTop: normalize(10),
          }}>
          Thank you for ordering !
        </Text>
        <Text
          style={{
            fontFamily: Fonts.Poppins_Regular,
            fontSize: normalize(8),
            textAlign: 'center',
          }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          reiciendis cupiditate,
        </Text>
        <TouchableOpacity
          onPress={() => onBackdropPress()}
          style={{
            height: normalize(30),
            width: normalize(100),
            backgroundColor: Colors.moonstone_blue,
            alignSelf: 'center',
            marginTop: normalize(25),
            justifyContent: 'center',
            borderRadius: normalize(4),
          }}>
          <Text
            style={{
              fontFamily: Fonts.Poppins_Regular,
              fontSize: normalize(10),
              color: Colors.white,
              textAlign: 'center',
            }}>
            close
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default OrderSuccessModal;
