import { defineStore } from "pinia";
import sourceData from "@/data.json";
export const useSourceDataStore = defineStore("SourceDataStore", {
  state: () => ({
    sourceData: sourceData,
  }),
});
