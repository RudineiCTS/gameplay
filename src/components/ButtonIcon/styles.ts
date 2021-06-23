import { StyleSheet } from 'react-native';
import { Theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container:{
    width:'100%',
    height: 56,
    backgroundColor: Theme.colors.primary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex:1,
    color: Theme.colors.heading,
    fontSize: 15,
    textAlign: 'center'
  },
  iconWrapper:{
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth:1,
    borderColor: Theme.colors.line
  },
  icon:{
    width: 24,
    height: 18,
  }
})