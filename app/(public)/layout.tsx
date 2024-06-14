import LiveChatBubble from "@/components/LiveChatBubble";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PubliCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <Navbar />
      {children}
      <LiveChatBubble />
      <Footer />
    </div>
  );
}
