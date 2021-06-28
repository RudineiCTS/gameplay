import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  banner: {
    width: '100%',
    height: 234,
  },
  bannerContent:{
    flex: 1,
    justifyContent:'flex-end',
    paddingHorizontal: 24,
    marginBottom:30,
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize:24,
    color: theme.colors.heading,
  },
  subtitle:{
    fontFamily: theme.fonts.text400,
    fontSize:13,
    color: theme.colors.heading,
  }
})