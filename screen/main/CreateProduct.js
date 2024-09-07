import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Colors, Fonts, Icons} from '../../themes/Themes';
import normalize from '../../utils/normalize';
import TextInputComponent3 from '../../components/TextInputComponent3';
import FooterSecond from '../../components/FooterSecond';
import Footer from '../../components/Footer';
import ImagePicker2 from '../../components/ImagePicker2';
import connectionrequest from '../../utils/NetInfo';
import {useDispatch, useSelector} from 'react-redux';
import showMessage from '../../utils/showMessage';
import {CreateProductRequest} from '../../redux/reducer/ProductReducer';
import LinearGradient from 'react-native-linear-gradient';
let status = '';

const CreateProduct = ({navigation}) => {
  const ProductReducer = useSelector(state => state.ProductReducer);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('');
  const [discount, setDiscount] = useState('');
  const [about, setAbout] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [productUri, setProductUri] = useState(null);
  const [productImagePath, setProductImagePath] = useState(null);
  const titleRef = useRef();
  const categoryRef = useRef();
  const priceRef = useRef();
  const colorRef = useRef();
  const discountRef = useRef();
  const aboutRef = useRef();
  const dispatch = useDispatch();

  function ValidInfo() {
    if (title == '') {
      showMessage('Please enter product name');
    } else if (category == '') {
      showMessage('please enter product category');
    } else if (price == '') {
      showMessage('please enter product price');
    } else if (color == '') {
      showMessage('please enter product color');
    } else if (discount == '') {
      showMessage('please enter product discount');
    } else if (about == '') {
      showMessage('please enter product description');
    } else {
      const formData = new FormData();
      formData.append('title', title);
      formData.append(
        'description',
        JSON.stringify({
          product_price: price,
          product_category: category,
          product_color: color,
          product_discount: discount,
          product_description: about,
        }),
      );

      if (productImagePath !== null) {
        formData.append('image', productImagePath);
      }
      connectionrequest()
        .then(state => {
          if (state) {
            dispatch(CreateProductRequest(formData));
          }
        })
        .catch(error => {
          showMessage('Please connect to the internet');
        });
    }
  }

  if (status == '' || ProductReducer?.type != status) {
    switch (ProductReducer?.type) {
      case 'product/CreateProductRequest':
        status = ProductReducer?.type;
        break;
      case 'product/CreateProductSuccess':
        status = ProductReducer?.type;
        setTitle('');
        setAbout('');
        setColor('');
        setDiscount('');
        setPrice('');
        setCategory('');
        setProductImagePath(null);
        setProductUri(null);

        setTimeout(() => {
          navigation.navigate('Products');
        }, 1000);
        break;
    }
  }

  return (
    <View
      style={{
        backgroundColor: 'red',
        flex: 1,
      }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: Colors.white,
        }}>
        {/* <TouchableOpacity
          // onPress={() => navigation.goBack()}
          style={{
            marginLeft: normalize(30),
            marginTop: normalize(20),
          }}>
          <Image
            source={Icons.back}
            style={{
              height: normalize(25),
              width: normalize(25),
              resizeMode: 'contain',
              tintColor: Colors.black,
            }}
          />
        </TouchableOpacity> */}
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: normalize(40),
          }}>
          <Text
            style={{
              fontFamily: Fonts.Poppins_Regular,
              fontSize: normalize(18),
              marginLeft: normalize(10),
              // color: Colors.white,
            }}>
            SELL YOUR
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Poppins_SemiBold,
              fontSize: normalize(18),
              marginLeft: normalize(5),
              color: Colors.black,
            }}>
            PRODUCT
          </Text>
        </View>
        <Text
          style={{
            fontFamily: Fonts.Poppins_Regular,
            fontSize: normalize(8),
            marginLeft: normalize(10),
            alignSelf: 'center',
            color: Colors.black,
          }}>
          Add a new product to your store for online sell
        </Text>
        <TouchableOpacity
          onPress={() => setIsVisible(true)}
          style={{
            height: normalize(120),
            width: normalize(120),
            alignSelf: 'center',
            marginTop: normalize(25),
            borderRadius: normalize(9),
            borderWidth: 2,
            borderColor: Colors.powder_blue,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Colors.white,
          }}>
          <Image
            source={{
              uri:
                productUri == null
                  ? 'https://cdn-icons-png.flaticon.com/128/16891/16891551.png'
                  : productUri,
            }}
            style={{
              height: normalize(90),
              width: normalize(90),
              borderRadius: 9,
              resizeMode: 'cover',
            }}
          />
        </TouchableOpacity>
        {/* <View
          style={{
            height: normalize(25),
            width: normalize(25),
            borderRadius: normalize(100),
            backgroundColor: Colors.powder_blue,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            bottom: normalize(13),
            shadowColor: Colors.black,
            elevation: normalize(8),
            borderWidth: 0.5,
            borderColor: Colors.black,
          }}>
          <Image
            source={Icons.add}
            style={{
              height: normalize(15),
              width: normalize(15),
              resizeMode: 'contain',
              tintColor: Colors.mediumState_blue,
            }}
          />
        </View> */}
        <TextInputComponent3
          title={'NAME'}
          width={'95%'}
          placeholder={'Enter product name'}
          refer={titleRef}
          maxLength={30}
          value={title}
          onChangeText={e => setTitle(e)}
          onSubmitEditing={() => {
            categoryRef.current.focus();
          }}
        />
        <TextInputComponent3
          title={'CATEGORY'}
          placeholder={'Enter product category'}
          refer={categoryRef}
          width={'95%'}
          value={category}
          onChangeText={e => setCategory(e)}
          onSubmitEditing={() => {
            priceRef.current.focus();
          }}
        />
        <TextInputComponent3
          title={'PRICE'}
          placeholder={'Enter product price'}
          refer={priceRef}
          value={price}
          width={'95%'}
          onChangeText={e => setPrice(e)}
          onSubmitEditing={() => {
            colorRef.current.focus();
          }}
        />
        <TextInputComponent3
          title={'COLOR'}
          placeholder={'Enter product color'}
          refer={colorRef}
          width={'95%'}
          value={color}
          onChangeText={e => setColor(e)}
          onSubmitEditing={() => {
            discountRef.current.focus();
          }}
        />
        <TextInputComponent3
          title={'DISCOUNT'}
          placeholder={'Enter product discount'}
          refer={discountRef}
          width={'95%'}
          value={discount}
          onChangeText={e => setDiscount(e)}
          onSubmitEditing={() => {
            aboutRef.current.focus();
          }}
        />
        <TextInputComponent3
          title={'ABOUT'}
          height={200}
          placeholder={'Type here...'}
          refer={aboutRef}
          width={'95%'}
          multiline={true}
          textAlignVertical={'top'}
          value={about}
          onChangeText={e => setAbout(e)}
        />

        <TouchableOpacity
          onPress={() => ValidInfo()}
          style={{
            height: normalize(45),
            width: '85%',
            backgroundColor: Colors.navy_blue,
            marginTop: normalize(15),
            marginBottom: normalize(30),
            borderRadius: normalize(6),
            alignSelf: 'center',
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
                fontSize: normalize(11),
                textAlign: 'center',
              }}>
              POST
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <FooterSecond
          onPress={() => {
            navigation.navigate('Products');
          }}
        />
        <Footer />
        <ImagePicker2
          isVisible={isVisible}
          onBackdropPress={() => setIsVisible(false)}
          onSelectImage={res => {
            setProductUri(res?.uri);
            setProductImagePath(res?.path);
          }}
        />
      </ScrollView>
    </View>
  );
};

export default CreateProduct;
