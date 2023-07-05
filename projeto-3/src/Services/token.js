const getToken = () => {
  const valor = localStorage.getItem('token');
  return valor;
}

export default getToken;