"use client"

import { UserStore } from "@/stores/UserStore"
import { useRouter } from "next/navigation";
import { useEffect } from "react"

const page = () => {

  const userType = UserStore.useState((s) => s.type);
  const router = useRouter();

  useEffect(() => {
    if(userType === "admin"){
      router.replace("/dashboard/admin");
    }else{
      router.replace("/dashboard/partner");
    }
  }, [])

  return (
    <div></div>
  )
}

export default page