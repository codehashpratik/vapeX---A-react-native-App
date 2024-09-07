import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
  FlatList,
  ActivityIndicator,
  StatusBar,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Brands, Colors, Fonts, Icons} from '../../themes/Themes';
import normalize from '../../utils/normalize';
import FooterSecond from '../../components/FooterSecond';
import Footer from '../../components/Footer';
import _ from 'lodash';
import {getObjectData, storeObjectData} from '../../store/LocalStore';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import connectionrequest from '../../utils/NetInfo';
import {
  getAllProductListRequest,
  selectedProductRequest,
} from '../../redux/reducer/ProductReducer';
import constants from '../../utils/constants';
import {getUserInfoRequest} from '../../redux/reducer/UserReducer';

import Loader from '../../utils/Loader';
import LinearGradient from 'react-native-linear-gradient';
let status = '';
const Home = () => {
  const isFocused = useIsFocused();

  const UserReducer = useSelector(state => state.UserReducer);
  const dispatch = useDispatch();

  const productReducer = useSelector(state => state.ProductReducer);
  const [allproducts, setAllProducts] = useState([]);

  const navigation = useNavigation();
  const [page, setPage] = useState(1);
  const [callingListApi, setCallingListApi] = useState(false);

  function getProductList(page) {
    connectionrequest()
      .then(state => {
        if (state) {
          dispatch(
            getAllProductListRequest({
              page: page,
              perpage: 8,
            }),
          );
        }
      })
      .catch(error => {
        // console.log('error -- ', error);
        getObjectData(constants.PRODUCT_LIST, res => {
          if (res !== false) {
            setAllProducts(res);
          }
        });
      });
  }

  useEffect(() => {
    if (isFocused) {
      setAllProducts([]);

      setPage(1);
      getProductList(1);
    }
  }, [isFocused]);

  if (status == '' || productReducer?.type != status) {
    switch (productReducer?.type) {
      case 'product/getAllProductListRequest':
        status = productReducer?.type;
        setCallingListApi(true);
        break;
      case 'product/getAllProductListSuccess':
        status = productReducer?.type;

        let _data = productReducer?.productList;

        if (!_.isEmpty(_data) && page !== 1) {
          let arr1 = [...allproducts];
          let arr = merge(arr1, _data);
          storeObjectData(constants.PRODUCT_LIST, arr);
          setAllProducts(arr);
          setCallingListApi(false);
        } else if (page == 1 && !_.isEmpty(_data)) {
          storeObjectData(constants.PRODUCT_LIST, _data);
          setAllProducts(_data);
          setCallingListApi(false);
        } else {
          setCallingListApi(true);
        }

        break;
      case 'product/getAllProductListFailure':
        status = productReducer?.type;
        setCallingListApi(true);
        break;
    }
  }

  useEffect(() => {
    if (isFocused) {
      connectionrequest()
        .then(state => {
          if (state) {
            dispatch(getUserInfoRequest());
          }
        })
        .catch(error => {
          // console.log('error -- ', error);
        });
    }
  }, [isFocused]);

  return (
    // <View
    //   style={{
    //     flex: 1,
    //     backgroundColor: 'red',
    //   }}>

    //   <Text>Home</Text>
    // </View>
    <View
      style={{
        flex: 1,
        backgroundColor: 'orange',
      }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <Loader visible={UserReducer.type == 'User/getUserInfoRequest'} />

      <ScrollView
        style={{
          flex: 1,
          backgroundColor: Colors.white,
        }}>
        <View
          style={{
            height: normalize(180),
            width: '100%',
          }}>
          <ImageBackground
            source={Icons.homeback}
            style={{
              flex: 1,
            }}>
            <Text
              style={{
                fontFamily: Fonts.Poppins_Regular,
                color: 'grey',
                fontSize: normalize(7),
                marginLeft: normalize(30),
                marginTop: normalize(30),
                letterSpacing: normalize(4),
              }}>
              WELCOME TO VAPEX...
            </Text>
            <View
              style={{
                // backgroundColor: 'red',
                height: normalize(26),
              }}>
              <Text
                style={{
                  fontFamily: Fonts.Poppins_Regular,
                  color: Colors.white,
                  fontSize: normalize(20),
                  marginLeft: normalize(30),
                }}>
                YOUR ONE STOP
              </Text>
            </View>
            <Text
              style={{
                fontFamily: Fonts.Poppins_Bold,
                color: Colors.white,
                fontSize: normalize(20),
                marginLeft: normalize(30),
              }}>
              VAPE SHOP !
            </Text>

            <Text
              style={{
                fontFamily: Fonts.Poppins_Italic,
                color: 'grey',
                fontSize: normalize(6),
                marginLeft: normalize(30),
              }}>
              Aliquam diam elit, interdum in ornare eu
            </Text>

            <Text
              style={{
                fontFamily: Fonts.Poppins_Italic,
                color: 'grey',
                fontSize: normalize(6),
                marginLeft: normalize(30),
              }}>
              sagittis, pretium tortor
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('AboutSection')}
              style={{
                height: normalize(20),
                width: normalize(70),
                backgroundColor: 'blue',
                borderRadius: normalize(5),
                marginLeft: normalize(30),
                marginTop: normalize(10),
                justifyContent: 'center',
                alignItems: 'center',
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
                    fontSize: normalize(6),
                    color: Colors.white,
                    textAlign: 'center',
                  }}>
                  DISCOVER{'  '}MORE
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <View
          style={{
            height: normalize(400),
            width: '100%',
          }}>
          <ImageBackground
            source={Icons.aboutEffect}
            style={{
              flex: 1,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: normalize(25),
              }}>
              <Text
                style={{
                  fontFamily: Fonts.Poppins_Regular,
                  fontSize: normalize(20),
                }}>
                JUST
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.Poppins_SemiBold,
                  color: Colors.black,
                  fontSize: normalize(20),
                  marginLeft: normalize(7),
                }}>
                ARRIVED!
              </Text>
            </View>
            <View
              style={{
                height: normalize(150),
                width: '100%',
                // backgroundColor: 'yellow',
              }}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  paddingHorizontal: normalize(9),
                  alignItems: 'center',
                }}>
                {allproducts.map((item, index) => {
                  let productPrice = '';
                  let productDiscount = '';
                  let productColor = '';
                  let productAbout = '';
                  let productCategory = '';

                  try {
                    const parsedDescription = JSON.parse(item.description);
                    productPrice = parsedDescription.product_price;
                    productDiscount = parsedDescription.product_discount;
                    productColor = parsedDescription.product_color;
                    productAbout = parsedDescription.product_description;
                    productCategory = parsedDescription.product_category;
                  } catch (error) {}
                  return (
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => {
                        navigation.navigate('ProductEdit', {
                          title: item.title,
                          id: item._id,
                          description: productAbout,
                          image: item.image,
                          color: productColor,
                          price: productPrice,
                          discount: productDiscount,
                          category: productCategory,
                        });
                        dispatch(
                          selectedProductRequest({
                            product_title: item.title,
                            product_image: item.image,
                            product_color: productColor,
                            product_category: productCategory,
                            product_price: productPrice,
                            product_id: item._id,
                            product_description: productAbout,
                            product_discount: productDiscount,
                            productDetails: item.description,
                          }),
                        );
                      }}
                      key={index}
                      style={{
                        height: normalize(109),
                        width: normalize(85),
                        marginHorizontal: normalize(8),
                        // backgroundColor: 'red',
                      }}>
                      <View
                        style={{
                          height: '75%',
                          width: '100%',
                          backgroundColor: Colors.white,
                          borderColor: 'grey',
                          borderRadius: normalize(4),
                          // justifyContent: 'center',
                          alignItems: 'center',
                          shadowColor: Colors.black,
                          elevation: normalize(7),
                        }}>
                        <Image
                          source={{
                            uri:
                              item?.image !== ''
                                ? constants.PRODUCT_IMG_URI.concat(item?.image)
                                : 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg',
                          }}
                          style={{
                            height: normalize(65),
                            width: normalize(65),
                            resizeMode: 'cover',
                            marginTop: normalize(5),
                          }}
                        />
                      </View>
                      <Text
                        style={{
                          fontFamily: Fonts.Poppins_SemiBold,
                          color: Colors.black,
                          fontSize: normalize(7),
                          marginTop: normalize(6),
                          textAlign: 'center',
                        }}>
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          fontFamily: Fonts.Poppins_Regular,
                          color: 'grey',
                          fontSize: normalize(7),
                          textAlign: 'center',
                        }}>
                        Price : ₹ {productPrice}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
            <View
              style={{
                height: normalize(200),
                width: '100%',
                //   backgroundColor: 'yellow',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View>
                <Text
                  style={{
                    fontFamily: Fonts.Poppins_Regular,
                    fontSize: normalize(16),
                    marginLeft: normalize(20),
                  }}>
                  THE BEST VAPE
                </Text>

                <Text
                  style={{
                    fontFamily: Fonts.Poppins_Bold,
                    fontSize: normalize(16),
                    color: Colors.black,
                    marginLeft: normalize(20),
                  }}>
                  STORE IN TOWN
                </Text>

                <Text
                  style={{
                    fontFamily: Fonts.Poppins_Regular,
                    fontSize: normalize(7),
                    //   color: Colors.black,
                    marginLeft: normalize(20),
                  }}>
                  Lorem ipsum dolor sit amet,
                </Text>

                <Text
                  style={{
                    fontFamily: Fonts.Poppins_Regular,
                    fontSize: normalize(7),
                    //   color: Colors.black,
                    marginLeft: normalize(20),
                  }}>
                  Nunc nec pharetra odio. Mauris eget
                </Text>

                <Text
                  style={{
                    fontFamily: Fonts.Poppins_Regular,
                    fontSize: normalize(7),
                    //   color: Colors.black,
                    marginLeft: normalize(20),
                  }}>
                  Lorem ipsum dolor
                </Text>

                <Text
                  style={{
                    fontFamily: Fonts.Poppins_Regular,
                    fontSize: normalize(7),
                    //   color: Colors.black,
                    marginLeft: normalize(20),
                  }}>
                  Lorem ipsum dolor sit amet,
                </Text>

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('AboutSection');
                  }}
                  style={{
                    height: normalize(25),
                    width: normalize(50),
                    backgroundColor: 'blue',
                    borderRadius: normalize(5),
                    marginLeft: normalize(20),
                    marginTop: normalize(10),
                    justifyContent: 'center',
                    alignItems: 'center',
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
                        fontSize: normalize(6),
                        color: Colors.white,
                        textAlign: 'center',
                      }}>
                      READ MORE
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
              <Image
                source={Icons.aboutPic}
                style={{
                  height: normalize(130),
                  width: normalize(130),
                  resizeMode: 'contain',
                  marginLeft: normalize(20),
                }}
              />
              <Image
                source={Icons.aboutPic2}
                style={{
                  height: normalize(80),
                  width: normalize(80),
                  resizeMode: 'contain',
                  marginLeft: normalize(20),
                  position: 'absolute',
                  right: normalize(90),
                  bottom: normalize(10),
                }}
              />
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            height: normalize(280),
            width: '100%',
            backgroundColor: Colors.black,
          }}>
          <ImageBackground
            source={Icons.saleProduct}
            style={{
              flex: 1,
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: normalize(30),
                marginTop: normalize(25),
              }}>
              <Text
                style={{
                  fontFamily: Fonts.Poppins_Regular,
                  fontSize: normalize(14),
                  color: Colors.white,
                }}>
                PRODUCTS
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.Poppins_SemiBold,
                  color: Colors.white,
                  fontSize: normalize(14),
                  marginLeft: normalize(7),
                }}>
                ON SALE!
              </Text>
            </View>
            <View
              style={{
                height: normalize(150),
                width: '100%',
                // backgroundColor: 'yellow',
              }}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  paddingHorizontal: normalize(9),
                  alignItems: 'center',
                }}>
                {allproducts.map((item, index) => {
                  let productPrice = '';
                  let productDiscount = '';
                  let productColor = '';
                  let productAbout = '';
                  let productCategory = '';

                  try {
                    const parsedDescription = JSON.parse(item.description);
                    productPrice = parsedDescription.product_price;
                    productDiscount = parsedDescription.product_discount;
                    productColor = parsedDescription.product_color;
                    productAbout = parsedDescription.product_description;
                    productCategory = parsedDescription.product_category;
                  } catch (error) {}
                  return (
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => {
                        navigation.navigate('ProductEdit', {
                          title: item.title,
                          id: item._id,
                          description: productAbout,
                          image: item.image,
                          color: productColor,
                          price: productPrice,
                          discount: productDiscount,
                          category: productCategory,
                        });
                        dispatch(
                          selectedProductRequest({
                            product_title: item.title,
                            product_image: item.image,
                            product_color: productColor,
                            product_category: productCategory,
                            product_price: productPrice,
                            product_id: item._id,
                            product_description: productAbout,
                            product_discount: productDiscount,
                            productDetails: item.description,
                          }),
                        );
                      }}
                      key={index}
                      style={{
                        height: normalize(109),
                        width: normalize(85),
                        marginHorizontal: normalize(8),
                      }}>
                      <View
                        style={{
                          height: '75%',
                          width: '100%',
                          backgroundColor: Colors.white,
                          borderColor: 'grey',
                          borderRadius: normalize(4),
                          justifyContent: 'center',
                          alignItems: 'center',
                          shadowColor: Colors.black,
                          elevation: normalize(7),
                        }}>
                        <Image
                          source={{
                            uri:
                              item?.image !== ''
                                ? constants.PRODUCT_IMG_URI.concat(item?.image)
                                : 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg',
                          }}
                          style={{
                            height: normalize(65),
                            width: normalize(65),
                            resizeMode: 'cover',
                          }}
                        />
                      </View>
                      <Text
                        style={{
                          fontFamily: Fonts.Poppins_SemiBold,
                          color: Colors.white,
                          fontSize: normalize(7),
                          marginTop: normalize(6),
                          textAlign: 'center',
                        }}>
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          fontFamily: Fonts.Poppins_Regular,
                          color: Colors.white,
                          fontSize: normalize(7),
                          textAlign: 'center',
                        }}>
                        Price : ₹ {productPrice}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Products')}
              style={{
                height: normalize(20),
                width: normalize(80),
                backgroundColor: 'blue',
                borderRadius: normalize(3),
                alignSelf: 'center',
                marginTop: normalize(20),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <LinearGradient
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: normalize(3),
                  justifyContent: 'center',
                }}
                colors={[Colors.mediumState_blue, Colors.moonstone_blue]}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}>
                <Text
                  style={{
                    fontSize: normalize(6),
                    color: Colors.white,
                    textAlign: 'center',
                  }}>
                  VIEW {'  '}ALL{'  '}PRODUCTS
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View
          style={{
            height: normalize(300),
            width: '100%',
            backgroundColor: Colors.white,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: normalize(10),
            }}>
            <Text
              style={{
                fontFamily: Fonts.Poppins_Regular,
                fontSize: normalize(20),
              }}>
              FEATURED
            </Text>
            <Text
              style={{
                fontFamily: Fonts.Poppins_SemiBold,
                color: Colors.black,
                fontSize: normalize(20),
                marginLeft: normalize(7),
              }}>
              BRANDS
            </Text>
          </View>
          <FlatList
            data={Brands}
            numColumns={4}
            keyExtractor={(item, index) => index.toString()}
            style={{
              marginTop: normalize(15),
            }}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    height: normalize(90),
                    width: normalize(60),
                    marginHorizontal: normalize(6.5),
                    // backgroundColor: 'red',
                    marginBottom: normalize(20),

                    alignItems: 'center',
                  }}>
                  <Image
                    source={item?.Logo}
                    style={{
                      height: normalize(50),
                      width: normalize(50),
                      resizeMode: 'contain',
                      borderWidth: 0.5,
                      borderColor: 'grey',
                      borderRadius: normalize(100),
                    }}
                  />
                  <Text
                    style={{
                      fontSize: normalize(6.5),
                      textAlign: 'center',
                      marginTop: normalize(5),
                      color: Colors.black,
                      fontFamily: Fonts.Poppins_SemiBold,
                    }}>
                    {item?.title}
                  </Text>
                </View>
              );
            }}
          />
        </View>
        <FooterSecond
          onPress={() => {
            navigation.navigate('Products');
          }}
        />

        {/* <View
          style={{
            height: normalize(200),
            width: '100%',
            backgroundColor: Colors.black,
            borderBottomWidth: 2,
            borderBottomColor: 'blue',
            // marginTop: normalize(40),
          }}>
          <ImageBackground
            source={Icons.FooterBack}
            style={{
              flex: 1,
              opacity: 1,
            }}>
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,0.6)',
                flex: 1,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  // backgroundColor: 'red',
                  alignItems: 'center',
                  height: normalize(25),
                  marginTop: normalize(30),
                }}>
                <Text
                  style={{
                    fontFamily: Fonts.Poppins_Regular,
                    color: Colors.white,
                    fontSize: normalize(17),
                  }}>
                  GET
                </Text>
                <Text
                  style={{
                    fontFamily: Fonts.Poppins_Bold,
                    color: Colors.white,
                    fontSize: normalize(17),
                    marginHorizontal: normalize(8),
                  }}>
                  25% OFF
                </Text>
                <Text
                  style={{
                    fontFamily: Fonts.Poppins_Regular,
                    color: Colors.white,
                    fontSize: normalize(17),
                  }}>
                  FOR YOUR
                </Text>
              </View>
              <Text
                style={{
                  fontFamily: Fonts.Poppins_Bold,
                  color: Colors.white,
                  fontSize: normalize(17),
                  textAlign: 'center',
                  marginHorizontal: normalize(8),
                }}>
                FIRST ORDER
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.Poppins_Regular,
                  color: Colors.white,
                  fontSize: normalize(8),
                  textAlign: 'center',
                  marginHorizontal: normalize(8),
                }}>
                Curabitur eget massa sagittis, pretium tortor eu, pulvinar
                lacus.
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.Poppins_Regular,
                  color: Colors.white,
                  fontSize: normalize(8),
                  textAlign: 'center',
                  marginHorizontal: normalize(8),
                }}>
                Curabitur eget massa sagittis
              </Text>

              <TouchableOpacity
                style={{
                  height: normalize(30),
                  width: normalize(85),
                  backgroundColor: 'blue',
                  marginTop: normalize(20),
                  alignSelf: 'center',
                  borderRadius: normalize(5),
                  justifyContent: 'center',
                  alignItems: 'center',
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
                      color: Colors.white,
                      fontSize: normalize(8),
                      fontFamily: Fonts.Poppins_Regular,
                      textAlign: 'center',
                    }}>
                    GO TO SHOP
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View> */}
        <Footer />
      </ScrollView>
    </View>
  );
};

export default Home;
