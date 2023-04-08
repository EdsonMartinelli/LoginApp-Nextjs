import {
  getPersistentDataProps,
  IGetPersistentData,
} from "../../../types/persistent-data/IGetPersistentData";

const getPersistentData = {
  execute: (data: getPersistentDataProps) => {
    return localStorage.getItem(data.key);
  },
} satisfies IGetPersistentData;

export default getPersistentData;
