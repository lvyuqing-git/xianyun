export const state = () => {
  return {
    userInfo: {}
  };
};

export const mutations = {
  setUserInfo(state, data) {
    state.userInfo = data;
  }
};

export const actions = {
  register(store,data) {
    return this.$axios({
      url: "/captchas",
      method: "POST",
      data
    }).then((res)=>{
        return res
    })
  }
};
