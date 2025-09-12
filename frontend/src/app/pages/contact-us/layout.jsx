import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export default function ContactLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Shared Header */}
      <Header />

      {/* Page-specific content */}
      <main className="flex-grow">{children}</main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
