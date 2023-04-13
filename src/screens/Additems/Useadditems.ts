import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Owneraddimages from '../OwnerImage/OwneraddImages';

const Additemshook = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigation = useNavigation();
  const handleItems = () => {
    navigation.navigate(Owneraddimages);
  };

  return {handleItems, name, setName, description, setDescription};
};

export default Additemshook;
