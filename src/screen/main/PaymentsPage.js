import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import normalize from '../../utils/normalize';
import {Colors, Fonts, Icons} from '../../themes/Themes';
import TextInputComponent3 from '../../components/TextInputComponent3';
import TextInputComponent4 from '../../components/TextInputComponent4';
import CheckBox2 from '../../components/CheckBox2';
import Footer from '../../components/Footer';
import showMessage from '../../utils/showMessage';
import LinearGradient from 'react-native-linear-gradient';

const PaymentsPage = ({navigation}) => {
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [CVV, setCVV] = useState('');
  const [checked, setChecked] = useState('');
  const cardNumRef = useRef();
  const expiryRef = useRef();
  const cvvRef = useRef();

  function validate() {
    if (cardHolder == '') {
      showMessage('Please enter card holder name');
    } else if (cardNumber == '') {
      showMessage('Please enter card number');
    } else if (expiry == '') {
      showMessage('Please enter expiry date');
    } else if (CVV == '') {
      showMessage('Please enter CVV number');
    } else {
      navigation.navigate('PaymentOtp');
    }
  }

  return (
    <View
      style={{
        flex: 1,
      }}>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: Colors.white,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: normalize(20),
            marginLeft: normalize(20),
          }}>
          <Text
            style={{
              fontSize: normalize(13),
              fontFamily: Fonts.Poppins_SemiBold,
              color: 'grey',
            }}>
            Details /
          </Text>
          <Text
            style={{
              fontSize: normalize(13),
              fontFamily: Fonts.Poppins_SemiBold,
              color: Colors.black,
            }}>
            Payment
          </Text>
        </View>
        <Text
          style={{
            fontFamily: Fonts.Poppins_SemiBold,
            fontSize: normalize(17),
            color: Colors.black,
            marginTop: normalize(20),
            marginLeft: normalize(20),
          }}>
          PAYMENT
        </Text>
        <View
          style={{
            width: '100%',
            height: normalize(34),
            paddingHorizontal: normalize(20),
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: normalize(9),
                fontFamily: Fonts.Poppins_SemiBold,
                color: Colors.black,
              }}>
              IMPORTANT:
            </Text>
            <Text
              style={{
                fontSize: normalize(8),
                fontFamily: Fonts.Poppins_Regular,
                color: Colors.black,
                textAlign: 'right',
                marginTop: normalize(1),
                marginLeft: normalize(3),
              }}>
              To Prevent credit card declines and/or double charges,
            </Text>
          </View>
          <Text
            style={{
              fontSize: normalize(8),
              fontFamily: Fonts.Poppins_Regular,
              color: Colors.black,
              textAlign: 'left',
            }}>
            Please verify and use the correct billing address.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: normalize(50),
            width: '100%',
            alignItems: 'center',
            marginTop: normalize(10),
          }}>
          <Text
            style={{
              fontFamily: Fonts.Poppins_SemiBold,
              fontSize: normalize(10),
              color: Colors.black,

              marginLeft: normalize(20),
            }}>
            Credit Card Details
          </Text>
          <Image
            source={Icons.visa}
            style={{
              height: normalize(20),
              width: normalize(20),
              resizeMode: 'contain',
              marginLeft: normalize(5),
            }}
          />
          <Image
            source={Icons.master}
            style={{
              height: normalize(20),
              width: normalize(20),
              resizeMode: 'contain',
              marginLeft: normalize(5),
            }}
          />
          <Image
            source={Icons.express}
            style={{
              height: normalize(20),
              width: normalize(20),
              resizeMode: 'contain',
              marginLeft: normalize(5),
            }}
          />
          <Image
            source={Icons.discover}
            style={{
              height: normalize(20),
              width: normalize(20),
              resizeMode: 'contain',
              marginLeft: normalize(5),
            }}
          />
        </View>
        <TextInputComponent3
          height={normalize(65)}
          width={normalize(300)}
          placeholder={'e.g : John Doe'}
          title={'Card Holder Name'}
          value={cardHolder}
          onChangeText={e => {
            setCardHolder(e);
          }}
          onSubmitEditing={() => {
            cardNumRef.current.focus();
          }}
        />
        <TextInputComponent3
          height={normalize(65)}
          width={normalize(300)}
          placeholder={'xxxx xxxx xxxx xxxx'}
          title={'Card Number'}
          value={cardNumber}
          onChangeText={e => {
            setCardNumber(e);
          }}
          refer={cardNumRef}
          onSubmitEditing={() => {
            expiryRef.current.focus();
          }}
          keyboardType={'numeric'}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <TextInputComponent3
            height={normalize(65)}
            width={normalize(145)}
            placeholder={' '}
            title={'Expiry (MM/YY)'}
            value={expiry}
            onChangeText={e => {
              setExpiry(e);
            }}
            refer={expiryRef}
            onSubmitEditing={() => {
              cvvRef.current.focus();
            }}
            keyboardType={'numeric'}
          />
          <TextInputComponent3
            height={normalize(65)}
            width={normalize(145)}
            placeholder={' '}
            title={'CVV'}
            value={CVV}
            onChangeText={e => {
              setCVV(e);
            }}
            refer={cvvRef}
            keyboardType={'numeric'}
          />
        </View>
        <View
          style={{
            height: normalize(50),
            width: '100%',
            // backgroundColor: 'skyblue',
            justifyContent: 'center',
            paddingHorizontal: normalize(30),
            marginTop: normalize(13),
          }}>
          <Text
            style={{
              fontFamily: Fonts.Poppins_Regular,
              fontSize: normalize(8),
              color: Colors.black,
              textAlign: 'left',
            }}>
            Your personal data will be used to process your order ,support your
            experience throughout this website , and for other purpose described
            in our
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Poppins_Regular,
              fontSize: normalize(8),
              color: Colors.mediumState_blue,
              textAlign: 'left',
              textDecorationLine: 'underline',
              position: 'absolute',
              right: normalize(160),
              bottom: normalize(6.5),
            }}>
            privacy policy
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: normalize(15),
          }}>
          <CheckBox2
            status={checked}
            onPress={() => {
              setChecked(checked == true ? false : true);
            }}
            margin={normalize(27)}
            size={normalize(17)}
            backgroundColor={Colors.mediumState_blue}
          />
          <Text
            style={{
              fontFamily: Fonts.Poppins_Regular,
              color: Colors.black,
              fontSize: normalize(8),
            }}>
            I have read and agree to the{' '}
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Poppins_Regular,
              color: Colors.mediumState_blue,
              textDecorationLine: 'underline',
              fontSize: normalize(8),
            }}>
            terms and conditions
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: normalize(90),
            width: '100%',
            marginBottom: normalize(30),
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              height: normalize(40),
              width: normalize(40),

              alignItems: 'center',
              marginLeft: normalize(20),
              marginTop: normalize(10),
              flexDirection: 'row',
            }}>
            <Image
              source={Icons.back}
              style={{
                height: normalize(21),
                width: normalize(21),
                resizeMode: 'contain',
                tintColor: Colors.black,
              }}
            />
            <Text
              style={{
                fontSize: normalize(12),
                fontFamily: Fonts.Poppins_SemiBold,
                marginLeft: normalize(8),
                color: Colors.black,
                marginTop: normalize(4),
              }}>
              Back
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              validate();
            }}
            style={{
              height: normalize(30),
              width: '30%',
              backgroundColor: Colors.mediumState_blue,
              borderRadius: normalize(5),
              marginRight: normalize(10),
              justifyContent: 'center',
              marginTop: normalize(10),
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
                  fontFamily: Fonts.Poppins_Regular,
                  color: Colors.white,
                  fontSize: normalize(9),
                  textAlign: 'center',
                }}>
                PAY
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
};

export default PaymentsPage;
