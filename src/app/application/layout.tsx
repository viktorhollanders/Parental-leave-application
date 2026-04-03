import { StepNavigation } from "@/components/step-nav";
import { ApplicationProvider } from "@/context/application-context";

export default function ApplicationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ApplicationProvider>
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr]">
        <StepNavigation />
        {children}
      </div>
    </ApplicationProvider>
  );
}
