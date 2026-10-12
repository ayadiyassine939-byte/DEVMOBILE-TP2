import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import products from './src/data/products';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
      <FlatList data={products} renderItem={({ item }) =>
      (<View style={styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>)
      }
        numColumns={2} // Définit toujours 2 colonnes
        key={2} // Utilisez une clé statique pour éviter les changements dynamiques
        keyExtractor={(item) => item.id} // Assurez-vous que chaque élément a un id unique

      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 50,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
});