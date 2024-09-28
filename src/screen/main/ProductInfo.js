import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {Colors, Fonts} from '../../themes/Themes';
import normalize from '../../utils/normalize';

const ProductInfo = props => {
  const productDetails = useSelector(state => state.ProductReducer);
  const isFocused = useIsFocused();
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (isFocused) {
      // console.log(selectedTitle.selectedProductTitle);
      setTitle(productDetails.selectedProductDetails.product_title);
    }
  }, [isFocused]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
      <Text
        style={{
          fontFamily: Fonts.Poppins_Bold,
          fontSize: normalize(12),
          color: Colors.black,
          marginTop: normalize(20),
          marginLeft: normalize(20),
        }}>
        {title}
      </Text>
      <Text
        style={{
          marginTop: normalize(10),
          marginLeft: normalize(20),
          fontFamily: Fonts.Poppins_Regular,
          color: Colors.black,
        }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
        saepe quaerat explicabo doloremque ipsum aspernatur, minima tempora vel
        id, et vero perspiciatis neque. Quam obcaecati molestias magnam
        inventore repellat.
      </Text>

      <Text
        style={{
          marginTop: normalize(20),
          marginLeft: normalize(20),
          fontFamily: Fonts.Poppins_Regular,
          color: Colors.black,
        }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
        saepe quaerat explicabo.
      </Text>
    </View>
  );
};

export default ProductInfo;
