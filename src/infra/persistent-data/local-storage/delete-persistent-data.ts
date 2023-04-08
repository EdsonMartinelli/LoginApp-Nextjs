import {
  deletePersistentDataProps,
  IDeletePersistentData,
} from "../../../types/persistent-data/IDeletePersistentData";

const deletePersistentData = {
  execute: (data: deletePersistentDataProps) => {
    localStorage.removeItem(data.key);
  },
} satisfies IDeletePersistentData;

export default deletePersistentData;
