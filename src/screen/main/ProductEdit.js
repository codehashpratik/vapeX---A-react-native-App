import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import normalize from '../../utils/normalize';
import {Colors, Fonts, Icons} from '../../themes/Themes';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import constants from '../../utils/constants';
import FooterSecond from '../../components/FooterSecond';
import Footer from '../../components/Footer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProductInfo from './ProductInfo';
import ProductDetails from './ProductDetails';
import ProductReview from './ProductReview';
import {
  addToCart,
  deleteProductRequest,
  getCartListRequest,
} from '../../redux/reducer/ProductReducer';
import showMessage from '../../utils/showMessage';
import LinearGradient from 'react-native-linear-gradient';

const ProductEdit = props => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('');
  const [discount, setDiscount] = useState('');
  const [category, setCategory] = useState('');
  const Tab = createMaterialTopTabNavigator();
  const obj = props?.route?.params;
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const [productUri, setProductUri] = useState(null);
  const CartReducer = useSelector(state => state.CartReducer);
  const selectedProductDetails = useSelector(
    state => state.ProductReducer.selectedProductDetails,
  );

  const productReducer = useSelector(state => state.ProductReducer);
  const navigation = useNavigation();
  const [cartValue, setCartValue] = useState(0);
  const [id, setId] = useState('');

  useEffect(() => {
    if (isFocused) {
      setTimeout(() => {
        setTitle(obj?.title ? obj?.title : '');
        setDescription(obj?.description ? obj?.description : '');
        setProductUri(obj?.image ? obj?.image : null);
        setCategory(obj?.category ? obj?.category : '');
        setColor(obj?.color ? obj?.color : '');
        setDiscount(obj?.discount ? obj?.discount : '');
        setPrice(obj?.price ? obj?.price : '');
        setId(obj?.id ? obj?.id : '');
      }, 1000);
    }
  }, [isFocused]);

  useEffect(() => {
    if (productReducer.type == 'product/updateProductSuccess') {
      setTimeout(() => {
        props.navigation.goBack();
      }, 2000);
    }
  }, [productReducer]);

  function addToCartFunc() {
    dispatch(addToCart(selectedProductDetails));
    setTimeout(() => {
      dispatch(getCartListRequest());
      showMessage('Added to cart !');
    }, 1500);
  }
  function buyNowFunc() {
    dispatch(addToCart(selectedProductDetails));
    setTimeout(() => {
      dispatch(getCartListRequest());
      props.navigation.navigate('CartSection');
    }, 1500);
  }

  // function deleteProductFunc() {
  //   let para = {
  //     id: obj.id,
  //   };

  //   connectionrequest()
  //     .then(state => {
  //       if (state) {
  //         dispatch(deleteProductRequest(para));
  //       }
  //     })
  //     .catch(error => {
  //       console.log('error -- ', error);
  //     });

  //   if (productReducer.type == 'product/deleteProductSucces') {
  //     setTimeout(() => {
  //       navigation.goBack();
  //     }, 1000);
  //   }
  // }

  useEffect(() => {
    if (isFocused) {
      dispatch(getCartListRequest());
    }
  }, [isFocused]);

  useEffect(() => {
    if (productReducer.type === 'product/getCartListSuccess') {
      setCartValue(productReducer.cartList.length);
    }
  }, [productReducer]);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: Colors.white,
        }}>
        <View
          style={{
            height: normalize(160),
            width: '100%',
          }}>
          <ImageBackground
            source={Icons.productBack}
            style={{
              flex: 1,
            }}>
            <View
              style={{
                height: normalize(40),
                width: '100%',
                marginVertical: normalize(10),
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  height: normalize(40),
                  width: normalize(40),
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: normalize(20),
                }}>
                <Image
                  source={Icons.back}
                  style={{
                    height: normalize(25),
                    width: normalize(25),
                    resizeMode: 'contain',
                    tintColor: Colors.white,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('CartSection');
                }}
                style={{
                  position: 'absolute',
                  right: normalize(20),
                }}>
                <Image
                  source={Icons.cart}
                  style={{
                    height: normalize(17),
                    width: normalize(17),
                    tintColor: Colors.white,
                  }}
                />
              </TouchableOpacity>

              {cartValue !== 0 && (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('CartSection');
                  }}
                  style={{
                    height: normalize(13),
                    width: normalize(13),
                    backgroundColor: 'red',
                    position: 'absolute',
                    borderRadius: normalize(100),
                    justifyContent: 'center',
                    alignItems: 'center',
                    right: normalize(15),
                    top: normalize(5),
                  }}>
                  <Text
                    style={{
                      fontFamily: Fonts.Poppins_Regular,
                      color: Colors.white,
                      fontSize: normalize(8),
                    }}>
                    {cartValue}
                  </Text>
                </TouchableOpacity>
              )}
            </View>

            {/* ------------------ */}

            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontFamily: Fonts.Poppins_Regular,
                  color: Colors.white,
                  fontSize: normalize(20),
                  marginLeft: normalize(30),
                }}>
                OUR
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.Poppins_SemiBold,
                  color: Colors.white,
                  fontSize: normalize(20),
                  marginLeft: normalize(8),
                }}>
                SHOP
              </Text>
            </View>
            <Text
              style={{
                fontFamily: Fonts.Poppins_Regular,
                color: Colors.white,
                fontSize: normalize(6),
                marginLeft: normalize(30),
              }}>
              Aliquam diam elit, interdum in ornare eu
            </Text>

            <Text
              style={{
                fontFamily: Fonts.Poppins_Regular,
                color: Colors.white,
                fontSize: normalize(6),
                marginLeft: normalize(30),
              }}>
              sagittis, pretium tortor
            </Text>
          </ImageBackground>
        </View>
        <Image
          source={Icons.vape}
          style={{
            height: normalize(150),
            width: normalize(150),
            resizeMode: 'contain',
            position: 'absolute',
            right: normalize(15),
            top: normalize(41),
          }}
        />
        <View
          style={{
            flex: 1,
            marginBottom: normalize(45),
            flexDirection: 'row',
          }}>
          <View
            style={{
              borderWidth: 0.6,
              borderColor: 'grey',
              height: 120,
              width: 120,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: normalize(40),
              marginHorizontal: normalize(20),
              borderRadius: normalize(5),
            }}>
            <Image
              source={{
                uri:
                  productUri == null
                    ? 'https://cdn-icons-png.flaticon.com/128/401/401061.png'
                    : constants.PRODUCT_IMG_URI.concat(productUri),
              }}
              style={{
                height: 100,
                width: 100,
                resizeMode: 'contain',
              }}
            />
          </View>
          <View
            style={{
              // backgroundColor: 'red',
              height: normalize(130),
              width: '55%',
              marginVertical: normalize(40),
            }}>
            <Text
              style={{
                fontSize: normalize(13),
                marginLeft: normalize(10),
                marginRight: normalize(10),
                marginTop: normalize(5),
                fontFamily: Fonts.Poppins_Bold,
                color: Colors.black,
              }}>
              {obj?.title}
            </Text>
            <Text
              style={{
                fontSize: normalize(6.5),
                marginLeft: normalize(10),
                marginRight: normalize(10),
                marginTop: normalize(5),
                fontFamily: Fonts.Poppins_Regular,
                backgroundColor: Colors.lavender,
                paddingHorizontal: normalize(10),
                paddingVertical: normalize(5),
                borderRadius: normalize(5),
              }}>
              EARN 69-675 POINTS UPON PURCHASING THIS PRODUCT
            </Text>
            <Text
              style={{
                fontSize: normalize(6.5),
                marginLeft: normalize(10),
                marginRight: normalize(10),
                marginTop: normalize(5),
                fontFamily: Fonts.Poppins_Regular,
              }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
              omnis quaerat earum tempore illum numquam voluptas dicta, fuga
              aspernatur aperiam.
            </Text>
            <View
              style={{
                height: normalize(50),
                width: '100%',
                // backgroundColor: 'yellow',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  addToCartFunc();
                }}
                style={{
                  height: normalize(30),
                  width: normalize(70),
                  backgroundColor: 'blue',
                  justifyContent: 'center',
                  borderRadius: normalize(5),
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
                      textAlign: 'center',
                      fontSize: normalize(7),
                      color: Colors.white,
                      fontFamily: Fonts.Poppins_Regular,
                    }}>
                    ADD TO CART
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  buyNowFunc();
                  // deleteProductFunc();
                }}
                style={{
                  height: normalize(30),
                  width: normalize(70),
                  backgroundColor: Colors.black,
                  justifyContent: 'center',
                  borderRadius: normalize(5),
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: normalize(7),
                    color: Colors.white,
                    fontFamily: Fonts.Poppins_Regular,
                  }}>
                  BUY NOW
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              height: normalize(70),
              width: normalize(90),
              // backgroundColor: 'yellow',
              position: 'absolute',
              bottom: normalize(1),
              left: 20,
            }}>
            <Text
              style={{
                marginLeft: normalize(10),
                fontFamily: Fonts.Poppins_Regular,
                color: Colors.black,
                fontSize: normalize(10),
              }}>
              Price :
            </Text>
            <Text
              style={{
                marginLeft: normalize(10),
                fontFamily: Fonts.Poppins_SemiBold,
                color: Colors.mediumState_blue,
                fontSize: normalize(12),
              }}>
              ₹ {price}
            </Text>
            <Text
              style={{
                marginLeft: normalize(10),
                fontFamily: Fonts.Poppins_Italic,
                color: 'green',
                fontSize: normalize(9),
              }}>
              In Stock
            </Text>
          </View>
        </View>
        {/* material Top Section */}
        <Tab.Navigator
          initialRouteName="ABOUT"
          screenOptions={() => ({
            tabBarStyle: {
              height: normalize(35),
              backgroundColor: Colors.white,
            },
            tabBarLabelStyle: {
              fontSize: normalize(10),
              fontFamily: Fonts.Poppins_SemiBold,
            },

            tabBarActiveTintColor: Colors.black,
            tabBarInactiveTintColor: 'grey',
            headerShown: false,
            tabBarPressColor: Colors.white,
          })}>
          <Tab.Screen name="ABOUT" component={ProductInfo} />
          <Tab.Screen name="DETAILS" component={ProductDetails} />
          <Tab.Screen name="REVIEWS" component={ProductReview} />
        </Tab.Navigator>
        <FooterSecond
          onPress={() => {
            navigation.navigate('Products');
          }}
        />
        <Footer />
      </ScrollView>
    </View>
  );
};

export default ProductEdit;
