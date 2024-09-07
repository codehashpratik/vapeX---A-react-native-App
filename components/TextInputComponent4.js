import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import {Colors, Fonts, Icons} from '../themes/Themes';
import normalize from '../utils/normalize';

const TextInputComponent4 = props => {
  const [isFocus, setIsFocus] = useState(false);
  const [isSecure, setIsSecure] = useState(false);

  function onChange(_value) {
    if (props.onChangeText) {
      props.onChangeText(_value);
    }
  }

  function onSubmit() {
    if (props.onSubmitEditing) {
      props.onSubmitEditing();
    }
  }

  useEffect(() => {
    if (props?.secureTextEntry == true) {
      setIsSecure(props?.secureTextEntry);
    }
  }, [props?.secureTextEntry]);
  return (
    <View
      style={{
        width: props?.width,
        alignSelf: 'center',
        height: props?.height,
        marginHorizontal: props?.marginH,
        marginVertical: props?.marginV,
        paddingVertical: props?.paddingV,
        paddingHorizontal: props?.paddingH,
        paddingBottom: props?.paddingB,
        paddingTop: props?.paddingT,
        marginBottom: props?.marginB,
        marginTop: props?.marginT,
        // backgroundColor: 'orange',

        borderColor: isFocus ? props?.tintColor : 'grey',
        borderWidth: 1,

        borderRadius: normalize(7),
      }}>
      <Text
        style={{
          top: -11,
          fontSize: normalize(10),
          color: Colors.half_baked,

          marginHorizontal: normalize(15),
          fontFamily: Fonts.Poppins_Regular,
        }}>
        {props?.title}
      </Text>

      <View
        style={{
          height: normalize(37),
          width: '95%',
          borderRadius: normalize(9),
          // backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',

          flexDirection: 'row',
        }}>
        <TextInput
          placeholderTextColor={Colors.white}
          value={props.value}
          onChangeText={onChange}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          returnKeyType={props?.returnKeyType}
          onSubmitEditing={onSubmit}
          placeholder={props?.placeholder}
          keyboardType={props?.keyboardType}
          secureTextEntry={isSecure}
          ref={props?.refer}
          style={{
            // flex: 1,
            height: normalize(34),
            textAlign: props?.textAlign,
            fontSize: normalize(12),
            color: Colors.black,
            fontFamily: Fonts.Poppins_Regular,
            borderRadius: normalize(9),
            marginHorizontal: normalize(4),
            paddingLeft: normalize(10),
            width: '100%',
            backgroundColor: Colors.white,
            // borderWidth: 1,
          }}
        />
        {props?.secureTextEntry && (
          <TouchableOpacity
            onPress={() => setIsSecure(!isSecure)}
            style={{
              height: '100%',
              width: normalize(40),
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: normalize(10),
            }}>
            <Image
              source={isSecure ? Icons.hide : Icons.show}
              style={{
                width: 26,
                height: 26,
                resizeMode: 'contain',
                tintColor: isFocus ? Colors.moonstone_blue : 'grey',
              }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

TextInputComponent4.propTypes = {
  height: PropTypes.any,
  width: PropTypes.any,
  value: PropTypes.string,
  tintColor: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.any,
  title: PropTypes.string,
  onChangeText: PropTypes.func,
  keyboardType: PropTypes.func,
  secureTextEntry: PropTypes.string,
  returnKeyType: PropTypes.string,
  onSubmitEditing: PropTypes.func,
  marginV: PropTypes.number,
  marginH: PropTypes.number,
  marginR: PropTypes.number,
  marginL: PropTypes.number,
  marginB: PropTypes.number,
  marginS: PropTypes.number,
  marginE: PropTypes.number,
  marginT: PropTypes.number,
  padding: PropTypes.number,
  margin: PropTypes.number,
  paddingV: PropTypes.number,
  paddingH: PropTypes.number,
  paddingR: PropTypes.number,
  paddingL: PropTypes.number,
  paddingB: PropTypes.number,
  paddingS: PropTypes.number,
  paddingE: PropTypes.number,
  paddingT: PropTypes.number,
  backgroundColor: PropTypes.string,
  textAlign: PropTypes.string,
};

TextInputComponent4.defaultProps = {
  paddingH: 10,
  title: 'Title',
  placeholder: 'Placeholder',
  keyboardType: 'default',
  marginV: 10,
  paddingV: 15,
  width: '85%',
  height: 100,
  tintColor: Colors.half_baked,
};

export default TextInputComponent4;
