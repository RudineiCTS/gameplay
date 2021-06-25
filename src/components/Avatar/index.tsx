import React, {ReactNode} from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import {Image} from 'react-native';
import {styles} from './styles';
import { theme } from '../../global/styles/theme';

type Props ={
  urlImage: string
}

export function Avatar({urlImage}: Props) {
  const {secondary50, secondary70} = theme.colors
  return (
    <LinearGradient
    colors={[secondary50, secondary70]}
    style={styles.container}
    >
    <Image
      source={{uri: urlImage}}
      style={styles.avatar}
     />
    </LinearGradient>
  )
}