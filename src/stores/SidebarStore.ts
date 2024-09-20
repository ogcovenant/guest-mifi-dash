import { ISidebarStore } from "@/types/store";
import { Store } from "pullstate";



export const SidebarStore = new Store<ISidebarStore>({
  active: "dashboard",
  IsOpen: false,
})