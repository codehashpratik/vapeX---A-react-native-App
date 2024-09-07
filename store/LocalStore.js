import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  console.log('storeData');
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log('storeData -- ', e);
  }
};

const getData = async (key, callback = () => {}) => {
  console.log('getData');
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      callback(value);
    } else {
      callback(false);
    }
  } catch (e) {
    callback(false);
  }
};

const storeObjectData = async (key, value) => {
  console.log('storeObjectData -- ');
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};

const getObjectData = async (key, callback = () => {}) => {
  console.log('getObjectData -- ');
  try {
    const jsonValue = await AsyncStorage.getItem(key);

    if (jsonValue != null) {
      callback(JSON.parse(jsonValue));
    } else {
      callback(false);
    }
  } catch (e) {
    // error reading value
    callback(false);
  }
};

const removeValue = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
  }

  console.log('Done.');
};

export {storeData, getData, storeObjectData, getObjectData, removeValue};
