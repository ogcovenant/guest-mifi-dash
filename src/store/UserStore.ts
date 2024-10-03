import { IUserStore } from "@/types/store";
import { getStoredData } from "@/utils/Storage";
import { Store } from "pullstate";

export const UserStore = new Store<IUserStore>({
  type: String(getStoredData("userType")),
}) 