import { Dispatch, SetStateAction } from "react";

export interface ISidebarStore {
  active: string,
  setActive: Dispatch<SetStateAction<string>>
}