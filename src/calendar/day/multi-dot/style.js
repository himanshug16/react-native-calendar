import { StyleSheet, Platform } from 'react-native';
import * as defaultStyle from '../../../style';

const STYLESHEET_ID = 'stylesheet.day.multiDot';

export default function styleConstructor(theme = {}) {
  const appStyle = { ...defaultStyle, ...theme };
  return StyleSheet.create({
    base: {
      // width: 32,
      width: 53,
      // height: 32,
      height: 55,
      borderWidth: 1,
      // border
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderColor: '#e0e0e0',
      // alignItems: 'center'
    },
    text: {
      marginTop: 4,
      marginLeft: 4,
      fontSize: appStyle.textDayFontSize,
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
    disabledText: {
      color: appStyle.textDisabledColor
    },
    dot: {
      width: 8,
      height: 8,
      marginTop: 4,
      marginLeft: 12,
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
