import SidebarLayout from "../sidebar/sidebar";
import AuthGuard from "@/components/auth/AuthGuard";

export default function DashboardLayout({ children }) {
  return (
    <AuthGuard>
      <SidebarLayout>{children}</SidebarLayout>
    </AuthGuard>
  );
}
