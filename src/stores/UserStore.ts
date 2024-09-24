import { IUserStore } from "@/types/store";
import { Store } from "pullstate";

export const UserStore = new Store<IUserStore>({
  type: "partner"
}) 