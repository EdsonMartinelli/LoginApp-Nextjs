export interface getPersistentDataProps {
  key: string;
}

export interface IGetPersistentData {
  execute: (data: getPersistentDataProps) => string | null;
}
