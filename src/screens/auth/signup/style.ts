import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../utils/dimensions';
import Color from '../../../utils/constant/colors';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Color.White,
  },
  topHeaderView: {
    height: vh(44),
    width: vw(375),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#f3f3f3',
    backgroundColor: Color.White,
  },
  headerText: {
    fontSize: 16,
    marginLeft: 8,
    fontWeight: '600',
  },
  backArrow: {
    height: vh(24),
    width: vh(24),
    marginLeft: 15,
  },

  signUpTitleText: {
    lineHeight: vh(24),
    fontWeight: '500',
    fontSize: vh(16),
    marginTop: vh(20),
    color: Color.Black,
  },
  FirstNameText: {
    lineHeight: vh(24),
    fontWeight: '400',
    fontSize: vh(14),
    marginTop: vh(32),
    color: Color.Black,
  },
  scrollViewStyle: {
    paddingHorizontal: vw(16),
    paddingBottom: vh(70),
    backgroundColor: Color.White,
  },
  astrickColor: {
    color: 'red',
  },
  passwordTextInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputTextViewStyle: {
    height: vh(42),
    padding: vh(16),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#dfebff',
    borderRadius: 4,
    flexDirection: 'row',
  },
  NextNameText: {
    lineHeight: vh(24),
    fontWeight: '400',
    fontSize: vh(14),
    marginTop: vh(20),
    color: Color.Black,
  },
  optionalTextColor: {
    color: '#858585',
  },
  bottomFooterView: {
    height: vh(135),
    marginTop: vh(4),
    borderTopWidth: vh(5),
    borderTopColor: '#f3f3f3',
  },
  bottomTextView: {
    height: vh(36),
    marginTop: vh(16),
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleImageStyle: {
    marginLeft: vw(20),
    height: vw(24),
    width: vw(24),
  },
  blueColorText: {
    color: '#2474ff',
  },
  creatingAccountText: {
    fontSize: vh(12),
    width: 317,
    marginLeft: vw(8),
  },
  buttonContainerView: {
    marginHorizontal: vw(16),
  },
  phoneTextViewStyle: {
    height: vh(42),
    alignItems: 'center',
    borderRadius: 4,
    flexDirection: 'row',
    marginTop: vh(10),
  },
  countryCodeView: {
    height: vh(42),
    width: vw(56),
    backgroundColor: Color.textInputBackground,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countryCodeText: {fontSize: vh(16), color: '#6e7f80'},
  phoneView: {
    marginLeft: vw(8),
    justifyContent: 'center',
    backgroundColor: Color.textInputBackground,
    width: vw(279),
    height: vh(42),
    borderRadius: 4,
  },
  eyeContainer: {
    height: vh(30),
    width: vh(30),
    position: 'absolute',
    right: vw(10),
    top: vh(17),
  },
  eyeIconStyle: {
    height: '100%',
    width: '100%',
  },
  phNumberTextStyle: {
    marginLeft: vw(10),
    fontSize: vh(15),
    color: '#6e7f80',
  },
  errorStyleView: {
    top: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  errorImg: {
    height: 20,
    width: 20,
  },
  errorText: {
    marginLeft: 5,
    color: 'red',
  },
});

export default styles;
