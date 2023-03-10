import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../styles';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import Color from '../../../utils/constant/colors';
import {useDispatch, useSelector} from 'react-redux';
import Strings from '../../../utils/constant/string';
import {useNavigation} from '@react-navigation/native';
import TopAuthHeader from '../components/topAuthHeader';
import {storeLoginData} from '../../../redux/auth/action';
import CountryCode from '../../../components/countryCode';
import CustomButton from '../../../components/customButton';
import LocalImages from '../../../utils/constant/localImages';
import CustomTextInput from '../../../components/customTextInput';
import ComponentNames from '../../../utils/constant/componentNames';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Loader from '../../../components/loader';
import {showToast} from '../../../utils/commonFunctions';

export default function Login() {
  const dispatch = useDispatch<any>();
  const navigation = useNavigation<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [currentCountryCode, setCurrentCountryCode] = React.useState('+65');
  const [countryName, setCountryName] = useState('Singapore');
  const [number, setNumber] = React.useState('');
  const [showModal, setShowModal] = useState(false);
  const {countryId} = useSelector((state: any) => state.AuthReducer);

  const validateNumber = () => {
    return number.length < 8;
  };
  const onChangeText = (text: string) => {
    setNumber(text);
  };

  const onContinuePress = () => {
    setIsLoading(true);
    let payload = {
      countryCode: currentCountryCode,
      phoneNo: number,
      countryId: countryId,
      countryName: countryName,
    };
    dispatch(
      storeLoginData(
        payload,
        (resp: any) => {
          setIsLoading(false);
          if (resp?.data?.data?.userExist) {
            navigation.navigate(ComponentNames.Password);
          } else {
            navigation.navigate(ComponentNames.signUp);
          }
        },
        (error: any) => {
          setIsLoading(false);
          showToast(error.data.message);
        },
      ),
    );
  };
  const onCountryCodePress = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };
  return (
    <KeyboardAwareScrollView
      bounces={false}
      scrollEnabled={false}
      style={styles.container}>
      <TopAuthHeader
        countryName={countryName}
        setCountryName={setCountryName}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>{Strings.LoginHeader}</Text>
          <Text style={styles.subheaderText}>{Strings.LoginSubHeader}</Text>
        </View>
        <Text style={styles.textInputHeader}>{Strings.Phone_Number}</Text>

        <View style={styles.textInputView}>
          <TouchableOpacity
            onPress={onCountryCodePress}
            activeOpacity={0.8}
            style={styles.countryCodeView}>
            <Text style={styles.countryCodeText}>{currentCountryCode}</Text>
            <Image
              source={LocalImages.arrowDown}
              style={styles.dropDownButton}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <Modal
            isVisible={showModal}
            style={styles.modalStyles}
            onBackdropPress={onCloseModal}>
            <CountryCode
              onCloseModal={onCloseModal}
              setCountryName={setCountryName}
              setCurrentCountryCode={setCurrentCountryCode}
            />
          </Modal>
          <CustomTextInput
            value={number}
            secureTextEntry={false}
            maxLength={10}
            keyboardType={'number-pad'}
            placeholder={Strings.Phone_Number_Input}
            onChangeText={onChangeText}
            width={259}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            text={Strings.Continue}
            textColor={Color.white}
            bgColor={Color.cyanBlue}
            disableColor={Color.lightGrey}
            onPressButton={onContinuePress}
            disable={validateNumber()}
          />
        </View>
      </View>
      {isLoading && <Loader />}
    </KeyboardAwareScrollView>
  );
}
