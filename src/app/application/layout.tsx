import { ApplicationProvider } from "@/context/application-context";

export default function ApplicationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ApplicationProvider>{children}</ApplicationProvider>
    </div>
  );
}
