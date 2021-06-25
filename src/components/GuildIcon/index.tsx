import React from 'react'
import { Image } from 'react-native'

import {styles} from './styles'

export default function GuildIcon() {
  const uri = 'https://s2.glbimg.com/QWdLe0AOdvE1l-N5sLVsJhjurj4=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/j/U/iLO5YCRBmGHUsDwBIBHA/valorant-closed-beta-1200x675.png'
  return (
    <Image 
      source={{uri}}
      style={styles.image}
      resizeMode="cover"
    />
  )
}
