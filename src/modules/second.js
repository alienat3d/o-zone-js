import getData from './getData';

const second = () => {
  const cartBtn = document.getElementById('cart');

  // Используем на функцию getData ещё один метод then, чтобы вывести данные в консоль или например отправить в какую-то другую функцию данные с сервера.
  getData().then((data) => {
    console.log(data);
  });
};

export default second;
