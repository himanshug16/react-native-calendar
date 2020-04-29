import { StyleSheet, Platform } from 'react-native';
import * as defaultStyle from '../../../style';

const STYLESHEET_ID = 'stylesheet.day.multiDot';

export default function styleConstructor(theme = {}) {
  const appStyle = { ...defaultStyle, ...theme };
  return StyleSheet.create({
    base: {
      // width: 32,
      // width: Platform.OS == 'android' ? 30 : 58  ,
      ...Platform.select({
        ios: { width: 58},
        android: {width: 52}
      }),
      // width: 52,
      // height: 32,
      height: 55,
      borderWidth: 0.4,
      // border
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderColor: '#e0e0e0',
      resizeMode: 'contain'
      // alignItems: 'center'
    },
    // androidBase: {
    //   // width: 32,
    //   // width: Platform.OS == 'android' ? 30 : 58  ,
    //   width: 58,
    //   // height: 32,
    //   height: 55,
    //   borderWidth: 0.4,
    //   // border
    //   borderTopWidth: 0,
    //   borderRightWidth: 0,
    //   borderColor: '#e0e0e0',
    //   resizeMode: 'contain'
    //   // alignItems: 'center'
    // },
    text: {
      marginTop: 4,
      marginLeft: 4,
      // fontSize: appStyle.textDayFontSize,
      fontSize: 13,
      fontFamily: appStyle.textDayFontFamily,
      fontWeight: appStyle.textDayFontWeight,
      color: appStyle.dayTextColor,
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    alignedText: {
      marginTop: Platform.OS === 'android' ? 4 : 6
    },
    selected: {
      backgroundColor: appStyle.selectedDayBackgroundColor,
      // borderRadius: 16
    },
    today: {
      backgroundColor: appStyle.todayBackgroundColor
    },
    todayText: {
      color: appStyle.todayTextColor
    },
    selectedText: {
      color: appStyle.selectedDayTextColor
    },
    SatTextStyle: {
      color: appStyle.SaturdayTextColor
    },
    SunTextStyle: {
      color: appStyle.SundayTextColor
    },

    PreviousMonthSunTextStyle: {
      color: appStyle.PreviousMonthSundayTextColor
    },
    PreviousMonthSatTextStyle: {
      color: appStyle.PreviousMonthSaturdayTextColor
    },
    NextMonthSunTextStyle: {
      color: appStyle.PreviousMonthSundayTextColor
    },
    NextMonthSatTextStyle: {
      color: appStyle.PreviousMonthSaturdayTextColor
    },
    disabledText: {
      color: appStyle.textDisabledColor
    },
    dot: {
      width: 8,
      height: 8,
      marginTop: 4,
      marginLeft: 2,
      marginRight: 1,
      borderRadius: 4,
      opacity: 0
    },
    visibleDot: {
      opacity: 1,
      backgroundColor: appStyle.dotColor
    },
    selectedDot: {
      backgroundColor: appStyle.selectedDotColor
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
