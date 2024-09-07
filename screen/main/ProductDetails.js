import {View, Text} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '../../themes/Themes';
import normalize from '../../utils/normalize';

const ProductDetails = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: Colors.white,
      }}>
      <View
        style={{
          height: '100%',
          width: '80%',
          marginBottom: normalize(40),
          marginLeft: normalize(20),
        }}>
        <Text
          style={{
            fontFamily: Fonts.Poppins_Bold,
            color: Colors.black,
            fontSize: normalize(13),
            marginVertical: normalize(20),
            marginLeft: normalize(10),
          }}>
          ADDITIONAL INFORMATION
        </Text>
        <Text
          style={{
            fontFamily: Fonts.Poppins_Regular,
            fontSize: normalize(7),
            marginLeft: normalize(10),
          }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          voluptates architecto officia? Quis delectus exercitationem nisi
          temporibus doloremque similique amet recusandae possimus, sed optio
          cum perspiciatis repudiandae totam,
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: normalize(20),
            marginLeft: normalize(10),
          }}>
          <View>
            <Text
              style={{
                fontSize: normalize(7),
                fontFamily: Fonts.Poppins_SemiBold,
                color: Colors.black,
                marginVertical: normalize(3),
              }}>
              WEIGHT
            </Text>
            <Text
              style={{
                fontSize: normalize(7),
                fontFamily: Fonts.Poppins_SemiBold,
                color: Colors.black,
                marginVertical: normalize(3),
              }}>
              DIMENSIONS
            </Text>
            <Text
              style={{
                fontSize: normalize(7),
                fontFamily: Fonts.Poppins_SemiBold,
                color: Colors.black,
                marginVertical: normalize(3),
              }}>
              SIZE
            </Text>
            <Text
              style={{
                fontSize: normalize(7),
                fontFamily: Fonts.Poppins_SemiBold,
                color: Colors.black,
                marginVertical: normalize(3),
              }}>
              FLAVOUR
            </Text>
            <Text
              style={{
                fontSize: normalize(7),
                fontFamily: Fonts.Poppins_SemiBold,
                color: Colors.black,
                marginVertical: normalize(3),
              }}>
              EJUICE CAPACITY
            </Text>
            <Text
              style={{
                fontSize: normalize(7),
                fontFamily: Fonts.Poppins_SemiBold,
                color: Colors.black,
                marginVertical: normalize(3),
              }}>
              NICOTINE STRENGTH
            </Text>

            <Text
              style={{
                fontSize: normalize(7),
                fontFamily: Fonts.Poppins_SemiBold,
                color: Colors.black,
                marginVertical: normalize(3),
              }}>
              APPROXIMATE PUFF COUNT
            </Text>
            <Text
              style={{
                fontSize: normalize(7),
                fontFamily: Fonts.Poppins_SemiBold,
                color: Colors.black,
                marginVertical: normalize(3),
              }}>
              BATTERY
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: Fonts.Poppins_Regular,
                fontSize: normalize(7),
                marginLeft: normalize(50),
                marginVertical: normalize(3),
              }}>
              3 oz
            </Text>
            <Text
              style={{
                fontFamily: Fonts.Poppins_Regular,
                fontSize: normalize(7),
                marginLeft: normalize(50),
                marginVertical: normalize(3),
              }}>
              4.5 x 1 x 1 in
            </Text>
            <Text
              style={{
                fontFamily: Fonts.Poppins_Regular,
                fontSize: normalize(7),
                marginLeft: normalize(50),
                textDecorationLine: 'underline',
                color: Colors.mediumState_blue,
                marginVertical: normalize(3),
              }}>
              1 Box , 1 count
            </Text>
            <Text
              style={{
                fontFamily: Fonts.Poppins_Regular,
                fontSize: normalize(7),
                marginLeft: normalize(50),
                textDecorationLine: 'underline',
                color: Colors.mediumState_blue,
                marginVertical: normalize(3),
              }}>
              Coconut , Pineapple
            </Text>
            <Text
              style={{
                fontFamily: Fonts.Poppins_Regular,
                fontSize: normalize(7),
                marginLeft: normalize(50),
                textDecorationLine: 'underline',
                color: Colors.mediumState_blue,
                marginVertical: normalize(3),
              }}>
              10ml
            </Text>
            <Text
              style={{
                fontFamily: Fonts.Poppins_Regular,
                fontSize: normalize(7),
                marginLeft: normalize(50),
                textDecorationLine: 'underline',
                color: Colors.mediumState_blue,
                marginVertical: normalize(3),
              }}>
              5%
            </Text>
            <Text
              style={{
                fontFamily: Fonts.Poppins_Regular,
                fontSize: normalize(7),
                marginLeft: normalize(50),
                textDecorationLine: 'underline',
                color: Colors.mediumState_blue,
                marginVertical: normalize(3),
              }}>
              6000
            </Text>

            <Text
              style={{
                fontFamily: Fonts.Poppins_Regular,
                fontSize: normalize(7),
                marginLeft: normalize(50),
                textDecorationLine: 'underline',
                color: Colors.mediumState_blue,
                marginVertical: normalize(3),
              }}>
              RECHARGABLE
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
