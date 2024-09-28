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
  Animated,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Colors, Fonts, Icons} from '../../themes/Themes';
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
  getCartListRequest,
  selectedProductRequest,
} from '../../redux/reducer/ProductReducer';
import constants from '../../utils/constants';

let status = '';

const Product = props => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const productReducer = useSelector(state => state.ProductReducer);
  const [allproducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigation = useNavigation();
  const [page, setPage] = useState(1);
  const [callingListApi, setCallingListApi] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchVisible, setSearchVisible] = useState(false);
  const [cartValue, setCartValue] = useState(0);
  const FilterReducer = useSelector(state => state.FilterReducer);
  const widthAnim = useRef(new Animated.Value(0)).current;

  const handleExpand = () => {
    widthAnim.setValue(0);
    Animated.timing(widthAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  function getProductList(page) {
    connectionrequest()
      .then(state => {
        if (state) {
          dispatch(
            getAllProductListRequest({
              page: page,
              perpage: 20,
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

  const merge = (first, second) => {
    for (let i = 0; i < second.length; i++) {
      first.push(second[i]);
    }
    return first;
  };

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

  useEffect(() => {
    if (isFocused) {
      setAllProducts([]);
      setFilteredProducts([]);
      setPage(1);
      getProductList(1);
    }
  }, [isFocused]);

  useEffect(() => {
    setFilteredProducts(allproducts);
  }, [allproducts]);

  useEffect(() => {
    if (FilterReducer.type === 'Filter/addFilter') {
      setTimeout(() => {
        // console.log(FilterReducer.filterList);
        handleFilter();
      }, 2000);
    }
  }, [FilterReducer]);

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
          setFilteredProducts(arr);
        } else if (page == 1 && !_.isEmpty(_data)) {
          storeObjectData(constants.PRODUCT_LIST, _data);
          setAllProducts(_data);
          setCallingListApi(false);
          setFilteredProducts(_data);
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

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 50;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  const handleSearch = text => {
    setSearchQuery(text);
    if (text) {
      const filtered = allproducts.filter(item => {
        const productName = item.title || '';
        return productName.toLowerCase().includes(text.toLowerCase());
      });
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(allproducts);
    }
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
    if (!searchVisible) {
      setSearchQuery('');
      setFilteredProducts(allproducts);
    }
  };

  const handleFilter = () => {
    let filters = FilterReducer.filterList;

    // Convert filters to an array of keys that are true
    let activeFilters = Object.keys(filters).filter(key => filters[key]);

    // If no filters are selected, display all products
    if (activeFilters.length === 0) {
      setFilteredProducts(allproducts);
      return;
    }

    // Filter products based on active filters
    let filtered = allproducts.filter(item => {
      try {
        let itemCategory = JSON.parse(
          item.description,
        ).product_category.toLowerCase();
        return activeFilters.some(filter =>
          itemCategory.includes(filter.toLowerCase()),
        );
      } catch (error) {
        console.error('Error parsing product description:', error);
        return false;
      }
    });

    setFilteredProducts(filtered);
  };

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
                paddingHorizontal: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {searchVisible && (
                <Animated.View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    marginLeft: normalize(5),
                    width: widthAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0%', '80%'],
                    }),
                    transform: [
                      {
                        translateX: widthAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [328, 0],
                        }),
                      },
                    ],
                  }}>
                  <TextInput
                    placeholder="Search by name"
                    value={searchQuery}
                    onChangeText={handleSearch}
                    style={{
                      flex: 1,
                      borderWidth: 4,
                      borderColor: Colors.moonstone_blue,
                      borderRadius: normalize(10),
                      paddingHorizontal: normalize(10),
                      backgroundColor: Colors.white,
                      height: normalize(33),
                    }}
                  />
                </Animated.View>
              )}

              <View
                style={{
                  flexDirection: 'row',
                  position: 'absolute',
                  right: 20,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    toggleSearch();
                    handleExpand();
                  }}>
                  <Image
                    source={Icons.search}
                    style={{
                      height: normalize(17),
                      width: normalize(17),
                      marginHorizontal: normalize(10),
                      tintColor: Colors.white,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('CartSection');
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
                      right: -5,
                      top: -5,
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
            top: normalize(40),
          }}
        />
        <View
          style={{
            flex: 1,
            marginBottom: normalize(35),
          }}>
          <ImageBackground source={Icons.aboutEffect}>
            <View
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
                    // color: 'grey',
                    fontSize: normalize(20),
                    marginLeft: normalize(30),
                  }}>
                  FEATURED
                </Text>
                <Text
                  style={{
                    fontFamily: Fonts.Poppins_SemiBold,
                    color: Colors.black,
                    fontSize: normalize(20),
                    marginLeft: normalize(8),
                  }}>
                  PRODUCTS
                </Text>
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: normalize(8),
                  fontFamily: Fonts.Poppins_Regular,
                }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                dolorum numquam deserunt repellat ducimus at.
              </Text>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.openDrawer();
                }}
                style={{
                  height: normalize(30),
                  width: normalize(40),
                  borderWidth: 1,
                  borderColor: Colors.moonstone_blue,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: normalize(15),
                  marginTop: normalize(15),
                  borderRadius: normalize(5),
                }}>
                <Image
                  source={Icons.filter}
                  style={{
                    height: normalize(25),
                    width: normalize(25),
                    tintColor: Colors.moonstone_blue,
                  }}
                />
              </TouchableOpacity>
              <FlatList
                data={filteredProducts}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                style={{
                  flex: 1,
                  marginTop: normalize(5),
                }}
                renderItem={({item, index}) => {
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
                      style={{
                        width: '45%',
                        alignSelf: 'center',
                        marginVertical: normalize(8),
                        height: normalize(150),
                        justifyContent: 'center',
                        borderRadius: normalize(9),
                        borderWidth: 1,
                        borderColor: Colors.moonstone_blue,
                        marginHorizontal: normalize(8),
                      }}>
                      <Image
                        source={{
                          uri:
                            item?.image !== ''
                              ? constants.PRODUCT_IMG_URI.concat(item?.image)
                              : 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg',
                        }}
                        style={{
                          height: normalize(85),
                          width: normalize(85),
                          resizeMode: 'cover',
                          borderRadius: 10,
                          borderWidth: 0.6,
                          borderColor: 'grey',
                          alignSelf: 'center',
                          marginVertical: normalize(5),
                        }}
                      />

                      <Text
                        style={{
                          fontSize: normalize(7),
                          color: Colors.black,
                          fontFamily: Fonts.Poppins_SemiBold,
                          marginTop: normalize(5),
                          textAlign: 'center',
                        }}>
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          fontSize: normalize(10),
                          color: 'grey',
                          fontFamily: Fonts.Poppins_Italic,
                          textAlign: 'center',
                        }}>
                        Price : ₹ {productPrice}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
                ListEmptyComponent={<Text>no data found</Text>}
                onScroll={({nativeEvent}) => {
                  if (isCloseToBottom(nativeEvent)) {
                    if (page != productReducer?.page) {
                      setPage(productReducer?.page);
                      getProductList(productReducer?.page);
                    }
                  }
                }}
                scrollEventThrottle={32} // 32 || 16
                ListFooterComponent={() =>
                  callingListApi ? (
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        marginVertical: 10,
                      }}>
                      <ActivityIndicator size="large" color="black" />
                    </View>
                  ) : null
                }
              />
            </View>
          </ImageBackground>
        </View>
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

export default Product;
