export interface savePersistentDataProps {
  key: string;
  value: string;
}

export interface ISavePersistentData {
  execute: (data: savePersistentDataProps) => void;
}
