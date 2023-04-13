import {useNavigation} from '@react-navigation/native';
import Additems from '../Additems/Additems';
import Imagepicker from '../../components/atoms/Imagepicker';

const OwnerImage = () => {
  const navigation = useNavigation();
  const onHandleOwnerItems = () => {
    navigation.navigate(Additems);
  };
  const Onhandlepress = () => {
    navigation.navigate(Imagepicker);
  };
  return {onHandleOwnerItems, Onhandlepress};
};

export default OwnerImage;
