import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addAddress} from '../../redux/actions/actions';

export const OwnerAddAddressCustomHook = navigation => {
  const [city, setCity] = useState('');
  const [building, setBuilding] = useState('');
  const [pincode, setPincode] = useState('');
  const [stateName, setStateName] = useState('');

  const dispatch = useDispatch();

  const handleSaveAddress = () => {
    if (city !== '' && building !== '' && pincode !== '' && stateName !== '') {
      dispatch(
        addAddress({
          city: city,
          building: building,
          pincode: pincode,
          stateName: stateName,
        }),
      );
      navigation.goBack();
    }
  };

  return {
    city,
    building,
    pincode,
    stateName,
    setCity,
    setBuilding,
    setPincode,
    setStateName,
    handleSaveAddress,
  };
};
