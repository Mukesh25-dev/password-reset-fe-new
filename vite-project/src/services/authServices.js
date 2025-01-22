import instance from "./instance";

const authServices = {
  register: async (data) => {
    return await instance.post("/register", data);
  },
  login: async (data) => {
    return await instance.post("/login", data);
  },
  // requestPasswordReset: async(email) =>{
  //     return await instance.post('/request-password-reset', {email})
  // },
  // resetPassword: async(token, newPassword) =>{
  //     return await instance.post(`/reset-password/${token}`, {newPassword})
  // }
};

export default authServices;
