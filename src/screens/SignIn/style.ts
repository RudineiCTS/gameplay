import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
  image:{
    width:'100%',
    height: 465,
  },
  content:{
    marginTop: -60,
    paddingHorizontal: 56,
  },
  title:{
    fontSize: 40,
    textAlign: 'center',
    color: theme.colors.heading,
    marginBottom: 16,
    marginHorizontal: -56,
    fontFamily: theme.fonts.title700,
    lineHeight: 40,
  },
  subtitle:{
    color: theme.colors.heading,
    fontSize:15,
    textAlign: 'center',
    marginBottom:64,
    fontFamily: theme.fonts.text400,
  }
  
})