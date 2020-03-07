import {StyleSheet, Platform} from 'react-native';
import * as defaultStyle from '../../../style';

const STYLESHEET_ID = 'stylesheet.day.multiDot';

export default function styleConstructor(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    base: {
      // width: 32,
      width: 55,
      // height: 32,
      height: 55,
      borderWidth :1,
      // border
      borderTopWidth : 0,
      borderRightWidth : 0,
      borderColor : '#e0e0e0',
      alignItems: 'center'
    },
    text: {
      marginTop: 4,
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
    SatTextStyle :{
      color: 'blue'
    },
    SunTextStyle :{
      color : 'red'
    },
    disabledText: {
      color: appStyle.textDisabledColor
    },
    // dot: {
    //   width: 4,
    //   height: 4,
    //   marginTop: 1,
    //   marginLeft: 1,
    //   marginRight: 1,
    //   borderRadius: 2,
    //   opacity: 0
    // },
    dot: {
      width: 8,
      height: 8,
      marginTop: 4,
      marginLeft: 1,
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
