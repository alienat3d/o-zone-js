const deleteData = () => {
  return (
    fetch('http://localhost:3000/goods/24', {
      method: 'DELETE',
    })
      // Ответ нужно обработать. res - сокращение от response.
      .then((res) => res.json())
  );
};

export default deleteData;
