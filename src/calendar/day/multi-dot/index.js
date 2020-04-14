import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import PropTypes from 'prop-types';

import { shouldUpdate } from '../../../component-updater';

import styleConstructor from './style';

class Day extends Component {
  static displayName = 'IGNORE';

  static propTypes = {
    // TODO: disabled props should be removed
    state: PropTypes.oneOf(['disabled', 'today', 'isSat', 'isSun', 'isPreviousMonthSat','isPreviousMonthSun','isNextMonthSun','isNextMonthSat','']),

    // Specify theme properties to override specific styles for calendar parts. Default = {}
    theme: PropTypes.object,
    marking: PropTypes.any,
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    date: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.style = styleConstructor(props.theme);
    this.onDayPress = this.onDayPress.bind(this);
    this.onDayLongPress = this.onDayLongPress.bind(this);
  }

  onDayPress() {
    this.props.onPress(this.props.date);
  }

  onDayLongPress() {
    this.props.onLongPress(this.props.date);
  }

  shouldComponentUpdate(nextProps) {
    return shouldUpdate(this.props, nextProps, ['state', 'children', 'marking', 'onPress', 'onLongPress']);
  }

  renderDots(marking) {
    console.log(marking, 'markingmarkingmarking')
    const baseDotStyle = [this.style.dot, this.style.visibleDot];
    if (marking.dots && Array.isArray(marking.dots) && marking.dots.length > 0) {
      // Filter out dots so that we we process only those items which have key and color property
      const validDots = marking.dots.filter(d => (d && d.color));

      return validDots.map((dot, index) => {
        console.log(dot,'dddddddddddooooooooooooyyyyy')
        return (
         
          <View key={dot.key ? dot.key : index} style={[baseDotStyle,
            { backgroundColor: marking.selected && dot.selectedDotColor ? dot.selectedDotColor : dot.color }]} /> 
            )
          })
        }
    // }
    return;
  }

  render() {
    console.log(this.style.SatTextStyle)
    const containerStyle = [this.style.base];
    const textStyle = [this.style.text];

    const marking = this.props.marking || {};
    // const isD = typeof marking.isSat !== 'undefined' ? marking.isSat : this.props.state === 'isSat';
    console.log(this.props.state, 'this.props.statethis.props.statethis.props.statethis.props.state');
    const dot = this.renderDots(marking);

    console.log(dot,Array.isArray(dot), 'dotdotdotdotdotdotdotdotdotdotdotdotdotdotdot')
    console.log(this.props, 'isDisDisDisDisDisDisDisDisDisD')
    // alert(this.props.state)
    if (marking.selected) {
      containerStyle.push(this.style.selected);
      textStyle.push(this.style.selectedText);

      if (marking.selectedColor) {
        containerStyle.push({ backgroundColor: marking.selectedColor });
      }
    } else if (typeof marking.disabled !== 'undefined' ? marking.disabled : this.props.state === 'disabled') {
      textStyle.push(this.style.disabledText);
    } else if (this.props.state === 'today') {
      containerStyle.push(this.style.today);
      textStyle.push(this.style.todayText);
    }

    else if (this.props.state == 'isSat') {

      // containerStyle.push(this.style.today);
      textStyle.push(this.style.SatTextStyle);
    }
    else if (this.props.state == 'isSun') {
      // containerStyle.push(this.style.today);
      textStyle.push(this.style.SunTextStyle);
    }
    else if (this.props.state == 'isPreviousMonthSat') {
      console.log('isPreviousMonthSatisPreviousMonthSatisPreviousMonthSatisPreviousMonthSatisPreviousMonthSatisPreviousMonthSat')
      // containerStyle.push(this.style.today);
      textStyle.push(this.style.PreviousMonthSatTextStyle);
    }
    else if (this.props.state == 'isPreviousMonthSun') {
      console.log('fdfgfgfgfgffgfggg')
      // containerStyle.push(this.style.today);
      textStyle.push(this.style.PreviousMonthSunTextStyle);
    }

    else if (this.props.state == 'isNextMonthSat') {
      console.log('isPreviousMonthSatisPreviousMonthSatisPreviousMonthSatisPreviousMonthSatisPreviousMonthSatisPreviousMonthSat')
      // containerStyle.push(this.style.today);
      textStyle.push(this.style.NextMonthSatTextStyle);
    }
    else if (this.props.state == 'isNextMonthSun') {
      console.log('fdfgfgfgfgffgfggg')
      // containerStyle.push(this.style.today);
      textStyle.push(this.style.NextMonthSunTextStyle);
    }

    return (
      <TouchableOpacity
        testID={this.props.testID}
        style={containerStyle}
        onPress={this.onDayPress}
        onLongPress={this.onDayLongPress}>
        <Text allowFontScaling={false} style={textStyle}>{String(this.props.children)}</Text>
       {/* { dot.length > 0 && dot.length < 3 &&
         <View style={{ flexDirection: 'row' }}>{dot}</View> }  */}

         <View style={{ flexDirection: 'row' }}>{dot}</View>
      </TouchableOpacity>
    );
  }
}

export default Day;
