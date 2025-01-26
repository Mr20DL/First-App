import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import React from 'react';

const games = [
  { id: '1', name: 'Pokémon FireRed', image: require('./../../assets/images/firered.jpg') },
  { id: '2', name: 'Pokémon Emerald', image: require('./../../assets/images/emerald.jpg') },
  { id: '3', name: 'Pokémon Platinum', image: require('./../../assets/images/platinum.jpg') },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokémon Games</Text>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.gameItem}>
            <Image source={item.image} style={styles.gameImage} />
            <Text style={styles.gameName}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  gameItem: {
    marginBottom: 16,
  },
  gameImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  gameName: {
    fontSize: 18,
    marginTop: 8,
  },
});