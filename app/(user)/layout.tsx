import { Nav } from "./_components/nav";
import Footer from "@/components/user/footer";
import type { Metadata } from "next";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: "Tour",
    template: "%s | Tour",
  },
};

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="h-auto min-h-full w-full flex flex-col px-2 items-center   bg-red-300">
      <Nav />
      <div className="mb-16">{children}</div>
    </div>
  );
};

export default ProtectedLayout;
