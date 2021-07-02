import React from 'react'
import { ScrollView} from 'react-native'

import {styles} from './styles';
import {categories} from '../../utils/Categories';
import {Category} from '../Category';

type Props ={
  categorySelected: string;
  setCategory: (categoryId: string) =>void;
  hasChecked?: boolean;
}

export function CategorySelect({
  categorySelected,
  setCategory,
  hasChecked,
}: Props) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight: 40}}
    >
      {
        categories.map((category) =>(
          <Category 
            key={category.id}
            title={category.title}
            icon={category.icon}
            hasChecked={hasChecked}
            checked={category.id === categorySelected}
            onPress={()=> setCategory(category.id)}
          />
        ))
      }
      
    </ScrollView>
  )
}
