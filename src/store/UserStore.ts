import { IUserStore } from "@/types/store";
import { getStoredData } from "@/utils/storage";
import { Store } from "pullstate";

export const UserStore = new Store<IUserStore>({
  type: String(getStoredData("userType")),
}) 