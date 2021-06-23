import { StyleSheet } from 'react-native';
import { Theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: Theme.colors.background,
  },
  image:{
    width:'100%',
    height: 470,
  },
  content:{
    marginTop: -60,
    paddingHorizontal: 56,
  },
  title:{
    fontSize: 40,
    textAlign: 'center',
    color: Theme.colors.heading,
    marginBottom: 16,
  },
  subtitle:{
    color: Theme.colors.heading,
    fontSize:15,
    textAlign: 'center',
    marginBottom:64,
  }
})