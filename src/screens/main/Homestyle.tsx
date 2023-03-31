import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: '100%',
    height: 130,
    borderRadius: 20,
    marginBottom: 20,
    overflow: 'hidden',
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cardTextContainer: {
    position: 'absolute',
    bottom: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
export default styles;