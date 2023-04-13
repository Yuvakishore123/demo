import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {deleteAddress} from '../../redux/actions/actions';

export const OwnerAddressCustomHook = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const addressList = useSelector(state => state.AddressReducers);
  const dispatch = useDispatch();

  const handleOwnerAddAddress = () => {
    navigation.navigate('OwnerAddAddress');
  };

  const handleDeleteAddress = index => {
    dispatch(deleteAddress(index));
  };
  const goBackButton = ()=>{
   navigation.goBack();
  }

  return {
    addressList,
    handleOwnerAddAddress,
    handleDeleteAddress,
    isFocused,
    goBackButton,
  };
};
