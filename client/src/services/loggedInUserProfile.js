import axios from "axios";

const getCurrentUserProfile = async () => {
  const response = await axios.get(`/api/user/`);
  // const response = await axios.get(`/api/decks`)
  return response.data || [];
};

// All of the endpoints in this file can be exported below
export { getCurrentUserProfile };