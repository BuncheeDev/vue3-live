import { createStore } from "vuex";
import axios from "axios";
import { BASE_API_URL } from "../constants";
export default createStore({
  state: {
    //สีม่วงในรูป
    // profile: {
    //   id: 1,
    //   name: "ปอ",
    //   email: "por@gmail.com55",
    // },
    profile: null, // {} แนะนำให้เป็น null
  },
  mutations: {
    // นิยมเป็นตัวพิมพ์ใหญ่
    SET_USE_PROFILE(state, newProfile) {
      state.profile = newProfile;
    },
  },
  actions: {
    // getProfile(context){
    //   context.commit()
    // }

    // getProfile({ commit },value) {  // value คือ pleyload เผื่อต้องโยนค่ามา
    async getProfile({ commit }) {
      const token = JSON.parse(localStorage.get("token"));
      if (token) {
        const response = await axios.get(`${BASE_API_URL}/api/profile`, {
          headers: { Authorization: "Bearer " + token.access_token },
        });
        const newProfile = JSON.parse(
          JSON.stringify(response.data?.data?.user)
        );
        commit("SET_USE_PROFILE", newProfile);
      }
      // get profile จาก backend มา เพื่อไป update mutations ^
      // const newProfile = { id: 1, name: "ปอ", email: "por@gmail.com55" };
    },
  },
  modules: {},
});
