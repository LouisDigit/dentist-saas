import MaxWidthWrapper from "@/components/container";
import SettingsSidebar from "./components/settings-sidebar";
import SettingsContainer from "./components/settings-container";

export type SettingsLayoutProps = {
  children: React.ReactNode;
};

const SettingsLayout: React.FC<SettingsLayoutProps> = ({ children }) => {
  return (
    <main className="flex justify-center w-full md:py-3 px-2.5 md:px-10 lg:px-48 ">
      <SettingsSidebar />
      <SettingsContainer>{children}</SettingsContainer>
    </main>
  );
};

export default SettingsLayout;
