import React from 'react'
import {View, Text} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import {LinearGradient} from 'expo-linear-gradient';

import {styles} from './styles';
import { theme } from '../../global/styles/theme';
import { SvgProps } from 'react-native-svg';


type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
  hasChecked?: boolean;
}

export function Category({
  title,
  icon: Icon,
  hasChecked,
  checked = false,
  ...rest
}: Props) {
  const {secondary50, secondary70, secondary40, secondary75} = theme.colors;
  return (
    <RectButton {...rest}>
      <LinearGradient
      colors={[secondary50, secondary70]}
      style={styles.container}
      >
        <LinearGradient 
          style={[styles.content, {opacity: checked ? 1 : 0.4}]}
          colors={[checked ? secondary75 : secondary50, secondary40]}
        >
          
          {
              hasChecked && 
              <View style=
              {checked ? styles.checked : styles.hasChecked}
              />
          }
         
          <Icon
              width={48}
              height={48}
            />
          <Text style={styles.title}>
            {title}
          </Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  )
}
