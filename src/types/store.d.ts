import { Dispatch, SetStateAction } from "react";

export interface ISidebarStore {
  active: string,
  IsOpen?: boolean
}

export interface IUserStore {
  type: string,
}