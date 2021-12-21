import getData from './getData';
import deleteData from './deleteData';
// import postData from './postData';

const second = () => {
  const cartBtn = document.getElementById('cart');

  getData().then((data) => {
    console.log(data);
  });
};

export default second;
