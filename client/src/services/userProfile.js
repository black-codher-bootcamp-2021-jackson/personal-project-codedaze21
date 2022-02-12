import axios from "axios";

const getUserProf = async () => {
  const response = await axios.get('/api/loginuser');

  return response.data || [];
};

// All of the endpoints in this file can be exported below
export { getUserProf };