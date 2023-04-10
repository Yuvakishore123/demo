import styles from './Homestyle';
import {TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text} from 'react-native';
import {fetchProducts} from '../../redux/slice/productSlice';
import {ScrollView} from 'react-native-gesture-handler';
import {Image} from 'react-native';
function Homelogic() {
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.data);
  console.log(JSON.stringify(products));
  if (!products) {
    return <Text>Loading products...</Text>;
  }
  return (
    <ScrollView style={styles.container}>
      {products.map(product => (
        <TouchableOpacity key={product.id} style={styles.card}>
          <Image source={{uri: product.imageUrl}} style={styles.cardImage} />
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>{product.categoryName}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
export default Homelogic;