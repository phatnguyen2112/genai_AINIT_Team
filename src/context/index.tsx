import { createContext, useContext } from "react";

export const appData = {
  notiList: [],
  noti: undefined,
  setState: () => {},
};

export const appContext = createContext<AppData>(appData);

export const useAppContext = () => useContext(appContext);

export interface AppData {
  notiList: Noti[];
  noti?: Noti;
  setState: (value: Partial<Omit<AppData, "setState">>) => void;
}

export interface UserForm {
  program: string;
  name: string;
  habit: string;
  content: string;
  service: string;
  imgs: string[];
  img: string;
}

interface Noti extends UserForm {
  notiTitle: string;
  notiContent: string;
}
