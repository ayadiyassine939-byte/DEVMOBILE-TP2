import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import products from '../data/products';

const ProductsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        )}
        numColumns={2}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    width: '50%',
    padding: 5,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 5,
  },
  price: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ProductsScreen;