const getDataFromAPi = () => {
  const url = process.env.PORT
    ? 'https://murmuring-woodland-48882.herokuapp.com/phones'
    : 'http://localhost:4000/phones';
  return fetch(url).then((response) => response.json());
};

export default getDataFromAPi;
