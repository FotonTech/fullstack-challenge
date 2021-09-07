import { Dimensions } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

export const HORIZONTAL_SPACING = {
  spacing10: wp('2.5%'),
  spacing15: wp('3.75%'),
  spacing20: wp('5%'),
  spacing30: wp('7.5%'),
  spacing50: wp('12%'),
  spacing75: wp('19.5%'),
  spacing100: wp('25.5%'),
  spacing200: wp('51%'),
  fullWidth: Dimensions.get('window').width
}

export const VERTICAL_SPACING = {
  spacing10: hp('1.25%'),
  spacing15: hp('1.80%'),
  spacing20: hp('2.5%'),
  spacing30: hp('3.9%'),
  spacing50: hp('6%'),
  spacing75: hp('10%'),
  spacing100: hp('12.9%'),
  spacing200: hp('25.8%'),
  fullHeight: Dimensions.get('window').height
}
