export type SettingsContainerProps = {
  children: React.ReactNode;
};

const SettingsContainer: React.FC<SettingsContainerProps> = ({ children }) => {
  return (
    <div className="ml-10  flex h-fit w-[760px] flex-col dark:bg-neutral-950 border border rounded-md   gap-y-4 md:px-6 md:py-4">
      {children}
    </div>
  );
};

export default SettingsContainer;
