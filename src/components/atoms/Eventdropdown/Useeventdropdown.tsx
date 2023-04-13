import axios from 'axios';
import {useEffect, useState} from 'react';

const Useeventdropdown = () => {
  const [CategoriesData, setCategoriesData] = useState([]);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  useEffect(() => {
    var config = {
      method: 'get',
      url: 'https://e7c9-103-172-208-76.ngrok-free.app/category/list',
    };
    axios(config)
      .then(response => {
        console.log(JSON.stringify(response.data));
        var count = Object.keys(response.data).length;
        let CategoriesArray = [];
        for (var i = 0; i < count; i++) {
          CategoriesArray.push({
            value: response.data[i].id,
            label: response.data[i].categoryName,
          });
        }
        setCategoriesData(CategoriesArray);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  // eslint-disable-next-line no-dupe-keys
  return {CategoriesData, value, setValue, isFocus, setIsFocus};
};

export default Useeventdropdown;
