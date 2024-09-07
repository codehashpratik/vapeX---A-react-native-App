import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors, Fonts, Icons} from '../../themes/Themes';
import normalize from '../../utils/normalize';
import {useIsFocused} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getCartListRequest} from '../../redux/reducer/ProductReducer';
import constants from '../../utils/constants';
import CheckBox2 from '../../components/CheckBox2';
import Footer from '../../components/Footer';
import LinearGradient from 'react-native-linear-gradient';

const Cart = ({navigation}) => {
  const isFocused = useIsFocused();
  const productReducer = useSelector(state => state.ProductReducer);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (isFocused) {
      dispatch(getCartListRequest());
    }
  }, [isFocused]);

  // useEffect(() => {
  //   if (productReducer.type === 'product/getCartListSuccess') {
  //     console.log(productReducer.cartList);
  //   }
  // }, [productReducer]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
      <ScrollView
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: normalize(20),
            marginTop: normalize(15),
          }}>
          <Image
            source={Icons.myOrders}
            style={{
              height: normalize(20),
              width: normalize(20),
            }}
          />
          <Text
            style={{
              fontSize: normalize(14),
              fontFamily: Fonts.Poppins_SemiBold,
              color: Colors.black,
              marginTop: normalize(3),
              marginLeft: normalize(5),
            }}>
            Cart
          </Text>
          <View
            style={{
              backgroundColor: Colors.black,
              height: normalize(15),
              width: normalize(15),
              marginTop: normalize(6),
              marginLeft: normalize(5),
              borderRadius: normalize(100),
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: Colors.white,
                textAlign: 'center',
                fontSize: normalize(8),
                fontFamily: Fonts.Poppins_Regular,
              }}>
              {productReducer.cartList.length}
            </Text>
          </View>
        </View>
        {productReducer.cartList.length !== 0 && (
          <View
            style={{
              height: normalize(40),
              width: '90%',
              // backgroundColor: 'grey',
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
              paddingBottom: normalize(10),
              borderBottomWidth: 0.5,
              borderBlockColor: 'grey',
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: normalize(7),
                marginTop: normalize(15),
                alignItems: 'center',
              }}>
              <Image
                source={Icons.Shipping}
                style={{
                  height: normalize(20),
                  width: normalize(20),
                }}
              />
              <Text
                style={{
                  fontSize: normalize(9.5),
                  fontFamily: Fonts.Poppins_SemiBold,
                  color: Colors.black,
                  marginLeft: normalize(5),
                }}>
                Shipping
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: normalize(100),
                marginTop: normalize(15),
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: normalize(9.5),
                  fontFamily: Fonts.Poppins_SemiBold,
                  color: Colors.black,
                }}>
                Shipping Fee :
              </Text>
              <Text
                style={{
                  fontSize: normalize(9.5),
                  fontFamily: Fonts.Poppins_SemiBold,
                  color: Colors.black,
                  marginLeft: normalize(5),
                }}>
                ₹ 1599
              </Text>
            </View>
          </View>
        )}

        <FlatList
          data={productReducer.cartList}
          keyExtractor={(item, index) => index.toString()}
          style={{
            flex: 1,
            marginTop: normalize(5),
          }}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  height: normalize(95),
                  width: '90%',
                  // backgroundColor: 'red',
                  alignSelf: 'center',
                  // marginVertical: normalize(10),
                  borderBottomWidth: 0.5,
                  borderBlockColor: 'grey',
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: normalize(4),
                }}>
                <View
                  style={{
                    height: normalize(55),
                    width: normalize(55),
                    // backgroundColor: 'blue',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: normalize(7),
                    borderWidth: 0.5,
                    borderColor: 'grey',
                  }}>
                  <Image
                    source={{
                      uri:
                        item.product_image == null
                          ? 'https://cdn-icons-png.flaticon.com/128/401/401061.png'
                          : constants.PRODUCT_IMG_URI.concat(
                              item.product_image,
                            ),
                    }}
                    style={{
                      height: normalize(40),
                      width: normalize(40),
                      resizeMode: 'contain',
                    }}
                  />
                </View>
                <View
                  style={{
                    height: normalize(55),
                    width: normalize(175),

                    marginLeft: normalize(9),
                  }}>
                  <Text
                    style={{
                      fontFamily: Fonts.Poppins_SemiBold,
                      color: Colors.black,
                      fontSize: normalize(8),
                    }}>
                    {item.product_title}
                  </Text>

                  <View
                    style={{
                      height: normalize(25),
                      width: normalize(60),
                      // backgroundColor: 'pink',
                      borderWidth: 0.6,
                      borderColor: Colors.black,
                      borderRadius: normalize(5),
                      marginTop: normalize(4),
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: normalize(10),
                        fontFamily: Fonts.Poppins_SemiBold,
                        color: Colors.black,
                        marginRight: normalize(5),
                      }}>
                      -
                    </Text>
                    <View
                      style={{
                        height: '70%',
                        width: normalize(25),
                        // backgroundColor: 'skyblue',
                        justifyContent: 'center',
                        borderLeftWidth: 0.6,
                        borderRightWidth: 0.6,
                        borderColor: 'grey',
                      }}>
                      <Text
                        style={{
                          fontSize: normalize(10),
                          fontFamily: Fonts.Poppins_SemiBold,
                          color: Colors.black,

                          textAlign: 'center',
                        }}>
                        1
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontSize: normalize(10),
                        fontFamily: Fonts.Poppins_SemiBold,
                        color: Colors.black,
                        marginLeft: normalize(5),
                      }}>
                      +
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    height: normalize(55),
                    width: normalize(45),

                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    style={{
                      marginTop: normalize(3),
                    }}>
                    <Image
                      source={Icons.bin}
                      style={{
                        height: normalize(13),
                        width: normalize(13),
                        resizeMode: 'contain',
                      }}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: normalize(7.5),
                      color: Colors.black,
                      fontFamily: Fonts.Poppins_Regular,
                      marginTop: normalize(15),
                    }}>
                    ₹ {item.product_price}
                  </Text>
                </View>
              </View>
            );
          }}
          ListEmptyComponent={
            <Text
              style={{
                fontFamily: Fonts.Poppins_Regular,
                fontSize: normalize(20),
                textAlign: 'center',
                marginTop: normalize(30),
                marginBottom: normalize(20),
              }}>
              Empty cart
            </Text>
          }
        />
        {productReducer.cartList.length !== 0 && (
          <View>
            <View
              style={{
                height: normalize(55),
                width: '90%',
                // backgroundColor: 'red',
                alignSelf: 'center',
                flexDirection: 'row',
                paddingTop: normalize(7),
                borderBottomWidth: 0.5,
                borderBlockColor: 'grey',
              }}>
              <CheckBox2
                status={checked}
                onPress={() => {
                  setChecked(checked == true ? false : true);
                }}
                margin={normalize(5)}
                backgroundColor={'blue'}
                size={normalize(18)}
              />
              <View
                style={{
                  marginLeft: normalize(5),
                }}>
                <Text
                  style={{
                    fontFamily: Fonts.Poppins_SemiBold,
                    fontSize: normalize(10),
                    color: Colors.black,
                    marginTop: normalize(4),
                  }}>
                  Reward Point
                </Text>
                <Text
                  style={{
                    fontFamily: Fonts.Poppins_Regular,
                    fontSize: normalize(8),
                  }}>
                  Total Points 1255
                </Text>
              </View>
              <View
                style={{
                  height: normalize(23),
                  width: normalize(80),
                  borderColor: 'grey',
                  borderWidth: 0.6,
                  borderRadius: normalize(5),
                  justifyContent: 'center',
                  marginTop: normalize(5),
                  left: 135,
                }}>
                <Text
                  style={{
                    fontFamily: Fonts.Poppins_Regular,
                    fontSize: normalize(9),
                    color: Colors.black,
                    textAlign: 'center',
                  }}>
                  500
                </Text>
              </View>
            </View>
            <View
              style={{
                height: normalize(144),
                width: '90%',
                // backgroundColor: 'skyblue',
                alignSelf: 'center',
                paddingVertical: normalize(26),
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 0.5,
                borderBottomColor: 'grey',
              }}>
              <View
                style={{
                  marginLeft: normalize(5),
                }}>
                <Text
                  style={{
                    fontFamily: Fonts.Poppins_SemiBold,
                    color: Colors.black,
                    fontSize: normalize(9),
                    marginVertical: normalize(5),
                  }}>
                  Subtotal
                </Text>
                <Text
                  style={{
                    fontFamily: Fonts.Poppins_SemiBold,
                    color: Colors.black,
                    fontSize: normalize(9),
                    marginVertical: normalize(5),
                  }}>
                  CA Sales Tax
                </Text>
                <Text
                  style={{
                    fontFamily: Fonts.Poppins_SemiBold,
                    color: Colors.black,
                    fontSize: normalize(9),
                    marginVertical: normalize(5),
                  }}>
                  CECET (California e- cigarette tax)
                </Text>
                <Text
                  style={{
                    fontFamily: Fonts.Poppins_SemiBold,
                    color: Colors.black,
                    fontSize: normalize(9),
                    marginVertical: normalize(5),
                  }}>
                  Reward Point
                </Text>
              </View>
              <View
                style={{
                  marginRight: normalize(10),
                }}>
                <Text
                  style={{
                    fontFamily: Fonts.Poppins_SemiBold,
                    color: Colors.black,
                    fontSize: normalize(9),
                    marginVertical: normalize(5),
                    textAlign: 'right',
                  }}>
                  ₹ 22,000.96
                </Text>
                <Text
                  style={{
                    fontFamily: Fonts.Poppins_SemiBold,
                    color: Colors.black,
                    fontSize: normalize(9),
                    marginVertical: normalize(5),
                    textAlign: 'right',
                  }}>
                  ₹ 512.99
                </Text>
                <Text
                  style={{
                    fontFamily: Fonts.Poppins_SemiBold,
                    color: Colors.black,
                    fontSize: normalize(9),
                    marginVertical: normalize(5),
                    textAlign: 'right',
                  }}>
                  ₹ 845.21
                </Text>
                <Text
                  style={{
                    fontFamily: Fonts.Poppins_SemiBold,
                    color: Colors.mediumState_blue,
                    fontSize: normalize(9),
                    marginVertical: normalize(5),
                    textAlign: 'right',
                  }}>
                  - ₹ 500.30
                </Text>
              </View>
            </View>
            <View
              style={{
                height: normalize(90),
                width: '90%',
                // backgroundColor: 'skyblue',
                alignSelf: 'center',
                paddingVertical: normalize(26),
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontFamily: Fonts.Poppins_Bold,
                  color: Colors.black,
                  fontSize: normalize(10),
                  marginVertical: normalize(5),
                  marginLeft: normalize(5),
                }}>
                Total
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.Poppins_SemiBold,
                  color: Colors.black,
                  fontSize: normalize(10),
                  marginVertical: normalize(5),
                  textAlign: 'right',
                  marginRight: normalize(10),
                }}>
                ₹ 22,857.96
              </Text>
            </View>
            <View
              style={{
                height: normalize(110),
                width: '90%',
                // backgroundColor: 'skyblue',
                alignSelf: 'center',
                paddingVertical: normalize(26),
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('CustomerDetails');
                }}
                style={{
                  height: normalize(30),
                  width: '30%',
                  backgroundColor: Colors.mediumState_blue,
                  borderRadius: normalize(5),
                  marginRight: normalize(10),
                  justifyContent: 'center',
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
                    Checkout
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <Footer />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Cart;
