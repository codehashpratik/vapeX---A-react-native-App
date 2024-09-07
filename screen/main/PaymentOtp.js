import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import normalize from '../../utils/normalize';
import {Colors, Fonts, Icons} from '../../themes/Themes';
import OtpComponent from '../../components/OtpComponent';
import showMessage from '../../utils/showMessage';
import OrderSuccessModal from '../../components/OrderSuccessModal';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToOrders,
  getOrderListRequest,
  removeCartlistRequest,
} from '../../redux/reducer/ProductReducer';

const PaymentOtp = ({navigation}) => {
  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();
  const fourthRef = useRef();
  const [FirstOtp, setFirstOtp] = useState('');
  const [secondOtp, setSecondOtp] = useState('');
  const [thirdOtp, setThirdOtp] = useState('');
  const [fourthOtp, setFourthOtp] = useState('');
  const [seconds, setSeconds] = useState(60);
  const [isVisible, setIsVisible] = useState(false);
  const productReducer = useSelector(state => state.ProductReducer);
  const dispatch = useDispatch();

  function validation() {
    if (
      FirstOtp == '' &&
      secondOtp == '' &&
      thirdOtp == '' &&
      fourthOtp == ''
    ) {
      showMessage('Please Enter OTP');
    } else if (
      FirstOtp == '' ||
      secondOtp == '' ||
      thirdOtp == '' ||
      fourthOtp == ''
    ) {
      showMessage('Please Enter full OTP');
    } else {
      let validOtp = '1234';
      let fullOtp = `${FirstOtp}${secondOtp}${thirdOtp}${fourthOtp}`;
      if (fullOtp == validOtp) {
        // console.log(productReducer.cartList);
        jsonCartList = JSON.stringify(productReducer.cartList);
        dispatch(addToOrders(jsonCartList));
        // console.log('added.');
        dispatch(getOrderListRequest());
        dispatch(removeCartlistRequest());
        setIsVisible(true);
        setFirstOtp('');
        setSecondOtp('');
        setThirdOtp('');
        setFourthOtp('');
      } else {
        showMessage('Incorrect OTP');
      }
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  useEffect(() => {
    if (FirstOtp.length == 1) {
      secondRef.current.focus();
    }
  }, [FirstOtp]);

  useEffect(() => {
    if (secondOtp.length == 1) {
      thirdRef.current.focus();
    }
  }, [secondOtp]);

  useEffect(() => {
    if (thirdOtp.length == 1) {
      fourthRef.current.focus();
    }
  }, [thirdOtp]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
      <View
        style={{
          height: normalize(130),
          width: '100%',
          backgroundColor: Colors.white,
          shadowColor: Colors.black,
          elevation: 10,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            height: normalize(40),
            width: normalize(40),
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: normalize(20),
            marginTop: normalize(10),
          }}>
          <Image
            source={Icons.back}
            style={{
              height: normalize(20),
              width: normalize(20),
              resizeMode: 'contain',
              tintColor: Colors.black,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: normalize(15),
            fontFamily: Fonts.Poppins_SemiBold,
            color: Colors.black,
            textAlign: 'center',
            letterSpacing: normalize(5),
            marginTop: normalize(16),
          }}>
          Enter OTP
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: normalize(20),
          }}>
          <Text
            style={{
              fontFamily: Fonts.Poppins_Regular,
              color: Colors.black,
              fontSize: normalize(10),
            }}>
            Total Payable Amount
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Poppins_SemiBold,
              color: Colors.black,
              fontSize: normalize(10),
              marginLeft: normalize(3),
            }}>
            ₹22714
          </Text>
          <Image
            source={Icons.paysymbol}
            style={{
              height: normalize(16),
              width: normalize(16),
              resizeMode: 'contain',
              marginLeft: normalize(2),
              marginBottom: normalize(3),
            }}
          />
        </View>
      </View>
      <ScrollView
        style={{
          flex: 1,
        }}>
        <Image
          source={Icons.icici}
          style={{
            height: normalize(40),
            width: normalize(40),
            resizeMode: 'contain',
            alignSelf: 'center',
            marginTop: normalize(30),
          }}
        />
        <Text
          style={{
            fontFamily: Fonts.Poppins_SemiBold,
            fontSize: normalize(13),
            color: Colors.black,
            textAlign: 'center',
            marginTop: normalize(5),
          }}>
          ICICI BANK
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: normalize(20),
          }}>
          <Image
            source={Icons.exit}
            style={{
              height: normalize(10),
              width: normalize(10),
              resizeMode: 'contain',
            }}
          />
          <Text
            style={{
              fontSize: normalize(10),
              color: Colors.black,
              marginLeft: normalize(6),
              fontFamily: Fonts.Poppins_Medium,
              marginTop: normalize(1),
            }}>
            Enter OTP sent to ******7418
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: normalize(80),
            justifyContent: 'center',
          }}>
          <OtpComponent
            value={FirstOtp}
            refer={firstRef}
            onChangeText={e => {
              setFirstOtp(e);
            }}
            defaultBorderColor={'grey'}
            color={'grey'}
          />
          <OtpComponent
            value={secondOtp}
            refer={secondRef}
            onChangeText={e => {
              setSecondOtp(e);
            }}
            defaultBorderColor={'grey'}
            color={'grey'}
          />
          <OtpComponent
            value={thirdOtp}
            refer={thirdRef}
            onChangeText={e => {
              setThirdOtp(e);
            }}
            defaultBorderColor={'grey'}
            color={'grey'}
          />
          <OtpComponent
            value={fourthOtp}
            refer={fourthRef}
            onChangeText={e => {
              setFourthOtp(e);
            }}
            defaultBorderColor={'grey'}
            color={'grey'}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            seconds > 0 ? null : setSeconds(60);
            showMessage('OTP has been resent to your email');
          }}
          style={{
            marginLeft: normalize(230),
            marginBottom: normalize(10),
          }}>
          <Text
            style={{
              fontFamily: Fonts.Poppins_SemiBold,
              fontSize: normalize(11),
              color: seconds > 0 ? 'grey' : Colors.moonstone_blue,
            }}>
            RESEND OTP
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => validation()}
          style={{
            height: normalize(35),
            width: '85%',
            backgroundColor: Colors.half_baked,
            borderRadius: normalize(6),
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: Fonts.Poppins_Regular,
              color: Colors.white,
              fontSize: normalize(11),
              textAlign: 'center',
            }}>
            CONFIRM PAYMENT
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            marginTop: normalize(15),
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontFamily: Fonts.Poppins_SemiBold,
              fontSize: normalize(11),

              color: Colors.black,
            }}>
            OTP will expire in
          </Text>

          <Text
            style={{
              fontFamily: Fonts.Poppins_SemiBold,
              fontSize: normalize(11),
              marginLeft: normalize(5),

              color: 'red',
            }}>
            00. {seconds < 10 ? `0${seconds}` : seconds}
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Poppins_SemiBold,
              fontSize: normalize(11),
              marginLeft: normalize(5),

              color: Colors.black,
            }}>
            seconds
          </Text>
        </View>

        <Text
          style={{
            textAlign: 'center',
            marginTop: normalize(110),
            color: 'grey',
            fontFamily: Fonts.Poppins_SemiBold,
            fontSize: normalize(12),
            letterSpacing: normalize(1),
          }}>
          DO NOT CLOSE OR REFRESH THE PAGE
        </Text>
        <OrderSuccessModal
          isVisible={isVisible}
          onBackdropPress={() => setIsVisible(false)}
        />
      </ScrollView>
    </View>
  );
};

export default PaymentOtp;
