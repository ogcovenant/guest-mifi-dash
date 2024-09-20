"use client";

import Header from "@/components/shared/dashboard/Header";
import Sidebar from "@/components/shared/dashboard/Sidebar";
import { SidebarStore } from "@/stores/SidebarStore";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/dashboard") {
      SidebarStore.update((s) => {
        s.active = "dashboard";
      });
    }
    if (pathname === "/dashboard/partners" || pathname.includes("/dashboard/partners")) {
      SidebarStore.update((s) => {
        s.active = "partners";
      });
    }

    if (pathname === "/dashboard/data-providers" || pathname.includes("/dashboard/data-providers")) {
      SidebarStore.update((s) => {
        s.active = "data-providers";
      });
    }

    if (pathname === "/dashboard/earnings") {
      SidebarStore.update((s) => {
        s.active = "earnings";
      });
    }

    if (pathname === "/dashboard/add-product") {
      SidebarStore.update((s) => {
        s.active = "add-product";
      });
    }
  }, []);

  return (
    <html lang="en">
      <body>
        <main className="h-screen">
          <div className="h-[15%] lg:h-[10%] xl:h-[15%]">
            <Header />
          </div>
          <div className="flex h-[85%] lg:h-[90%] xl:h-[85%] pt-0">
            <Sidebar />
            <div className="w-full lg:w-[85%] bg-[#19173D]">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
