const getDataFromAPi = () => {
  const url = process.env.API_URL || 'http://localhost:4000/phones';
  return fetch(url).then((response) => response.json());
};

export default getDataFromAPi;
