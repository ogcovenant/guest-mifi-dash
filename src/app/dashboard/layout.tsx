"use client";

import Header from "../../components/shared/dashboard/Header";
import Sidebar from "../../components/shared/dashboard/Sidebar";
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
    if (pathname === "/dashboard/admin" || pathname === "/dashboard/partner") {
      SidebarStore.update((s) => {
        s.active = "dashboard";
      });
    }
    if (pathname === "/dashboard/admin/partners" || pathname.includes("/dashboard/admin/partners")) {
      SidebarStore.update((s) => {
        s.active = "partners";
      });
    }

    if (pathname === "/dashboard/admin/data-providers" || pathname.includes("/dashboard/admin/data-providers")) {
      SidebarStore.update((s) => {
        s.active = "data-providers";
      });
    }

    if (pathname === "/dashboard/admin/earnings") {
      SidebarStore.update((s) => {
        s.active = "earnings";
      });
    }

    if (pathname === "/dashboard/admin/add-product") {
      SidebarStore.update((s) => {
        s.active = "add-product";
      });
    }

    if(pathname === "/dashboard/partner/billings"){
      SidebarStore.update((s) => {
        s.active = "billings"
      })
    }

    if(pathname === "/dashboard/partner/rentals" || pathname.includes("/dashboard/partner/rentals")){
      SidebarStore.update((s) => {
        s.active = "rentals"
      })
    }

    if(pathname === "/dashboard/partner/notifications"){
      SidebarStore.update((s) => {
        s.active = "notifications"
      })
    }

    if(pathname === "/dashboard/partner/history"){
      SidebarStore.update((s) => {
        s.active = "history"
      })
    }

    if(pathname === "/dashboard/partner/settings"){
      SidebarStore.update((s) => {
        s.active = "settings"
      })
    }
  }, [pathname]);

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
