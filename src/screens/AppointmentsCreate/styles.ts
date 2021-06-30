import {StyleSheet} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  label:{
    fontFamily: theme.fonts.title700,
    fontSize:18,
    color: theme.colors.heading,
  },
  form:{
    paddingHorizontal:24,
    marginTop:32,

  },
  selection:{
    flexDirection: 'row',
    width:'100%',
    height: 68,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius:8,
    borderColor:theme.colors.secondary50,
    paddingRight:25,
  },
  selectBody:{
    flex: 1,
    alignItems: 'center',
  },
  image:{
    width: 64,
    height: 68,
    backgroundColor:'#1D2766',
    borderWidth: 1,
    borderColor:'#243189',
    borderRadius:8,
  },
  title:{
    fontFamily: theme.fonts.title700,
    fontSize:18,
    color: theme.colors.heading,
  }
})