import Header from "@/components/shared/dashboard/Header";
import Sidebar from "@/components/shared/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div>
          <Sidebar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
