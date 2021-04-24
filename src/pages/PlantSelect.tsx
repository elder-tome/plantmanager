import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
} from 'react-native';

import Header from '../components/Header';
import EnviromentButton from '../components/EnviromentButton';
import PlantCardPrimary from '../components/PlantCardPrimary';
import api from '../services/api';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import Load from '../components/Load';

export default function PlantSelect() {

  interface EnviromentProps {
    key: string,
    title: string
  }

  interface PlantProps {
    id: number,
    name: string,
    about: string,
    water_tips: string,
    photo: string,
    environments: string[],
    frequency: {
      times: number,
      repeat_every: string
    }
  }

  const [enviroment, setEnviroment] = useState<EnviromentProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
  const [enviromentSelected, setenviromentSelected] = useState('all');
  const [loading, setLoading] = useState(true);

  function handleEnviromentSelected(enviroment: string) {

    setenviromentSelected(enviroment);

    if (enviroment == 'all') {
      return setFilteredPlants(plants);
    }

    const filtered = plants.filter(plant => plant.environments.includes(enviroment));

    setFilteredPlants(filtered);

  }

  useEffect(() => {
    async function fetchEnviroment() {
      const { data } = await api.get('/plants_environments?_sort=title&_order=asc');
      setEnviroment([
        {
          key: 'all',
          title: 'Todos'
        },
        ...data
      ]);
    }

    fetchEnviroment();
  }, []);

  useEffect(() => {
    async function fetchPlants() {
      const { data } = await api.get('/plants?_sort=name&_order=asc');
      setPlants(data);
      setFilteredPlants(data);
      setLoading(false);
    }

    fetchPlants();
  }, []);

  if (loading) {
    return <Load />
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header
          username='Élder'
          image='https://avatars.githubusercontent.com/u/37213852?s=400&u=85560aef28269fcd0a552a323686f8550ea0d4d9&v=4'
        />
        <Text style={styles.text}>Em qual hambiente</Text>
        <Text style={styles.secondaryText}>você quer colocar sua planta?</Text>
      </View>
      <View>
        <FlatList
          data={enviroment}
          renderItem={({ item }) => (
            <EnviromentButton
              title={item.title}
              active={item.key === enviromentSelected}
              onPress={() => handleEnviromentSelected(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
        />
      </View>
      <View style={styles.plant}>
        <FlatList
          data={filteredPlants}
          renderItem={({ item }) => (
            <PlantCardPrimary data={item} />
          )}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    marginTop: StatusBar.currentHeight,
  },
  header: {
    paddingHorizontal: 32
  },
  text: {
    fontSize: 18,
    fontFamily: fonts.complement,
    color: colors.body_dark,
    marginTop: 40,
  },
  secondaryText: {
    fontFamily: fonts.text,
    fontSize: 18,
    color: colors.body_dark,
  },
  enviromentList: {
    height: 40,
    marginRight: 32,
    paddingHorizontal: 32,
    marginTop: 40,
  },
  plant: {
    flex: 1,
    marginVertical: 32,
    marginHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
