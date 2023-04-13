import {useDispatch} from 'react-redux';
import {Logout} from '../../redux/actions/actions';
const Ownerprofilehook = () => {
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(Logout());
  };
  return {submit};
};
export default Ownerprofilehook;
