const postData = () => {
  // Метод fetch принимает уже 2 аргумента: 1) это URL по которому он получает инфу, 2) аргумент в виде объекта с настройками данного запроса. Method 'POST', который означает, что мы отправляем инфу, некое тело запроса (свойство body) и определённые хедеры.
  return (
    fetch('http://localhost:3000/goods', {
      method: 'POST',
      body: JSON.stringify({
        title: 'Игра Ведьмак 3',
        price: 3333,
        sale: true,
        img: 'https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D0%B4%D1%8C%D0%BC%D0%B0%D0%BA_3:_%D0%94%D0%B8%D0%BA%D0%B0%D1%8F_%D0%9E%D1%85%D0%BE%D1%82%D0%B0#/media/%D0%A4%D0%B0%D0%B9%D0%BB:The_Witcher_3-_Wild_Hunt_Cover.jpg',
        category: 'Игры и софт',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      // Ответ нужно обработать. res - сокращение от response.
      .then((res) => res.json())
  );
};

export default postData;
