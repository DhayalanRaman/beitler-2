export const loginService = (request) => {
  return fetch('https://lmsapi.wjbeitler.com/api/Auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request.payload),
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json;
    })
    .catch((error) => {
      return error;
    });
};

export const logIn = async(payload) => {
  try{
    const response = await axios.post(LOGIN_API, { payload });      
    return response.data;
  }catch (err) {
    console.error(err);    
  }
};