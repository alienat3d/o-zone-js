const postData = () => {
  // Метод fetch принимает уже 2 аргумента: 1) это URL по которому он получает инфу, 2) аргумент в виде объекта с настройками данного запроса. Method 'POST', который означает, что мы отправляем инфу, некое тело запроса (свойство body) и определённые хедеры.
  return (
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
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
