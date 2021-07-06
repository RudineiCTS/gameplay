import React, { useState } from 'react'
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import {RectButton} from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';

import { Background } from '../../components/Background';
import { CategorySelect } from '../../components/CategorySelect';
import { Header } from '../../components/Header';
import { SmallInput } from '../../components/SmallInput';
import { Button } from '../../components/Button';
import { TextArea } from '../../components/TextArea';
import { ModalView } from '../../components/ModalView';
import { GuildProps } from '../../components/Guild';
import GuildIcon from '../../components/GuildIcon';
import {Guilds} from '../Guilds';


import {theme} from '../../global/styles/theme';
import {styles} from './styles';


export function AppointmentsCreate() {
  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] =useState(false);
  const [guild, setGuild] =useState<GuildProps>({} as GuildProps);

  function handleOpenGuilds(){
    setOpenGuildsModal(true);
  }
  function handleCloseGuilds(){
    setOpenGuildsModal(false);
  }

  function handleGuildSelect(guildSelect: GuildProps){
    setGuild(guildSelect);
    setOpenGuildsModal(false)

  }
  function handleCategorySelect(categoryId: string){
    setCategory(categoryId);
  }

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
  <Background>
    <ScrollView >
          <Header title={'Agendar Partida'}/>
          <Text style={[
            styles.label,
            {marginTop:32, marginLeft:24,marginBottom: 15}]
            }>
            Categoria 
          </Text>

          <CategorySelect 
            hasChecked={true}
            setCategory={handleCategorySelect}
            categorySelected={category}
          />

          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                {
                  guild.icon 
                  ? <GuildIcon />
                  : <View style={styles.image}/>
                }
               

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {
                    guild.name 
                    ? guild.name
                    :'Selecionar servidor'
                    }
                  </Text>
                </View>

                <Feather 
                  name='arrow-right' 
                  color={theme.colors.heading}
                  size={18}
                />

              </View>
            </RectButton>
          
            <View style={styles.field}>
              {/* field está em flex direction row 
                ou seja, uma view vai ficar do lado da outra
              */}
              <View>
                <Text style={[styles.label, {marginBottom:12}]}>
                   Dia e mês
                </Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2}/>
                  <Text style={styles.divider}> / </Text>
                  <SmallInput maxLength={2}/>
                </View>
              </View>

              <View>
                <Text style={[styles.label,{marginBottom:12}]}>
                   Hora e minuto
                </Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2}/>
                  <Text style={styles.divider}> : </Text>
                  <SmallInput maxLength={2}/>
                </View>
              </View>

            </View>
            
              <View style={[styles.field,{marginBottom:12}]}>
                <Text style={styles.label}>
                    Descrição
                </Text>
                <Text style={styles.characterLimits}> Max 100 caracteres </Text>
              </View>
              
              <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
              />
          
            <View style={styles.footer}>
              <Button title='Agendar' />
            </View>
          </View>

      </ScrollView>
    </Background>


      <ModalView visible={openGuildsModal} cloneModal={handleCloseGuilds}>
        <Guilds handleGuildSelect={handleGuildSelect}/>
      </ModalView>
    </KeyboardAvoidingView>
  )
}
 