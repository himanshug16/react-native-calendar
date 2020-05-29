import {StyleSheet} from 'react-native';
import * as defaultStyle from '../style';

const STYLESHEET_ID = 'stylesheet.calendar.main';

export default function getStyle(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    container: {
      // borderWidth :0.4,
      // borderWidth :2,
      // borderColor : 'green',
      // borderBottomWidth :0,
      // borderColor :'#e0e0e0',
      backgroundColor: appStyle.calendarBackground
    },
    monthView: {
      backgroundColor: appStyle.calendarBackground,
      // borderWidth: 2, borderColor :'orange'
    },
    week: {
      // marginTop: 7,
      // marginBottom: 7,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}

