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
  select:{
    flexDirection: 'row',
    width:'100%',
    height: 68,
    alignItems: 'center',
    borderColor:theme.colors.secondary50,
    borderWidth: 1,
    borderRadius:8,
    paddingRight:25,
  },
  selectBody:{
    flex: 1,
    alignItems: 'center',
  },
  image:{
    width: 64,
    height: 68,
    backgroundColor:theme.colors.secondary40,
    borderWidth: 1,
    borderColor:theme.colors.secondary50,
    borderRadius:8,
  },
  title:{
    fontFamily: theme.fonts.title700,
    fontSize:18,
    color: theme.colors.heading,
  },
  field:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:30,
  },
  column:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider:{
    marginRight:4,
    fontSize:15,
    fontFamily:theme.fonts.text500,
    color:theme.colors. heading,
  }
})