export interface deletePersistentDataProps {
  key: string;
}

export interface IDeletePersistentData {
  execute: (data: deletePersistentDataProps) => void;
}
