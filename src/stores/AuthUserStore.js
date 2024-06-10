import { defineStore } from "pinia";
import sourceData from "@/data.json";

export const useAuthUserStore = defineStore("AuthUserStore", {
  state: () => {
    return {
      sourceData: { ...sourceData },
      authId: "VXjpr2WHa8Ux4Bnggym8QFLdv5C3",
    };
  },
  getters: {
    authUser: (state) =>
      state.sourceData.users.find((user) => user.id === state.authId),
  },
});
