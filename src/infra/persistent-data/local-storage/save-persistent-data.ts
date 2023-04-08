import {
  ISavePersistentData,
  savePersistentDataProps,
} from "../../../types/persistent-data/ISavePersistentData";

const savePersistentData = {
  execute: (data: savePersistentDataProps) => {
    localStorage.setItem(data.key, data.value);
  },
} satisfies ISavePersistentData;

export default savePersistentData;
