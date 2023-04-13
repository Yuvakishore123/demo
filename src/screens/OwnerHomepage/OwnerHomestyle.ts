import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.main,
    height: '100%',
    width: '100%',
  },
  headertxt: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.iconscolor,
    marginTop: 40,
    marginLeft: 25,
  },
  // bottomTabWrapper: {
  //   position: 'absolute',
  //   bottom: 0,
  //   width: '100%',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // },
  card: {
    backgroundColor: Colors.iconscolor,
    borderRadius: 10,
    padding: 20,
    margin: 10,
    height: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.white,
    marginLeft: 100,
  },
  renteditems1: {
    fontSize: 16,
    marginLeft: 20,
    color: Colors.white,
  },
  rentalitemscard: {
    flexDirection: 'row',
  },
  renteditems2: {
    fontSize: 16,
    marginLeft: 100,
    color: Colors.white,
  },
  cardsrentalprices: {
    fontSize: 16,
    marginLeft: 50,
    color: Colors.white,
    marginTop: 10,
  },
  cardsTotalprices: {
    fontSize: 16,
    marginLeft: 170,
    color: Colors.white,
    marginTop: 10,
  },
  recentlyaddedcontainer: {
    height: 150,
    width: '100%',
    backgroundColor: 'white',
    marginBottom: 20,
  },
  recentlyaddedcard: {
    backgroundColor: Colors.main,
    borderRadius: 10,
    padding: 20,
    margin: 20,
    width: 150,
  },
  recentlyaddedimage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    // backgroundColor: '#000'
  },
  recentlyaddedname: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  recentlyaddedprice: {
    fontSize: 16,
    textAlign: 'center',
  },
  Rentalhistory: {
    fontWeight: 'bold',
    fontSize: 20,
    // backgroundColor: '#000',
    color: Colors.iconscolor,
    marginLeft: 25,
  },
});
export default Styles;
