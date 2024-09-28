"use client"

import { UserStore } from "@/stores/UserStore"
import { useRouter } from "next/navigation";
import { useEffect } from "react"

const Page = () => {

  const userType = UserStore.useState((s) => s.type);
  const router = useRouter();

  useEffect(() => {
    if(userType === "admin"){
      router.replace("/dashboard/admin");
    }else{
      router.replace("/dashboard/partner");
    }
  }, [userType])

  return (
    <div></div>
  )
}

export default Page