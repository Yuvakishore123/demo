import React, {useEffect} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import styles from './OwnerHomestyle';
import {useSelector, useDispatch} from 'react-redux';
import {Text} from 'react-native';
import {fetchProducts} from '../../redux/slice/productSlice';
import {ScrollView} from 'react-native-gesture-handler';
import OwnerBottomTab from '../../components/molecules/OwnerBottomTab';
type Props = {
  route: {name: string};
  navigation: any;
};
export default function OwnerHome({route, navigation}: Props) {
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
    <View style={styles.mainContainer}>
      <ScrollView>
        <View>
          <Text style={styles.headertxt}>Welcome John</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>dashboard</Text>
          <View style={styles.rentalitemscard}>
            <Text style={styles.renteditems1}>Rented items</Text>
            <Text style={styles.renteditems2}>Total Earnings</Text>
          </View>
          <View style={styles.rentalitemscard}>
            <Text style={styles.cardsrentalprices}>100</Text>
            <Text style={styles.cardsTotalprices}>2000</Text>
          </View>
        </View>
        <View>
          <Text style={styles.headertxt}>Recently Added</Text>
        </View>
        <View>
          <FlatList
            data={products}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            renderItem={({item}) => (
              <TouchableOpacity key={item.id} style={styles.recentlyaddedcard}>
                <Image
                  source={{uri: item.imageURL}}
                  style={styles.recentlyaddedimage}
                />
                <View style={styles.cardText}>
                  {/* <Text style={styles.recentlyaddedname}>{item.title}</Text> */}
                  <Text style={styles.recentlyaddedname}>{item.price}</Text>
                  <Text style={styles.recentlyaddedname}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View>
          <Text style={styles.Rentalhistory}>Rentalhistory</Text>
        </View>
        <View>
          <FlatList
            data={products}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            renderItem={({item}) => (
              <TouchableOpacity key={item.id} style={styles.recentlyaddedcard}>
                <Image
                  source={{uri: item.image}}
                  style={styles.recentlyaddedimage}
                />
                <View style={styles.cardText}>
                  <Text style={styles.recentlyaddedname}>
                    {item.description}
                  </Text>
                  <Text style={styles.recentlyaddedname}>{item.price}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
      <View style={{marginTop: 10}}>
        <OwnerBottomTab navigation={navigation} />
      </View>
    </View>
  );
}
