import SettingsMainNav from "./settings-main-nav";

export type SettingsSidebarProps = {};

const SettingsSidebar: React.FC<SettingsSidebarProps> = () => {
  return (
    <>
      <div className="flex flex-col gap-y-4 md:w-[300px]  border-r">
        <h2 className="uppercase px-3 text-opacity-50 text-lg  whitespace-nowrap">
          personnal information
        </h2>
        <SettingsMainNav />
      </div>
    </>
  );
};

export default SettingsSidebar;
