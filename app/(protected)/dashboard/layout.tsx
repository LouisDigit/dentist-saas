import DashboardSidebar from "./components/dashboard-sidebar";

export type DashboardLayoutProps = {
  children?: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <>
      <DashboardSidebar />
      {children}
    </>
  );
};

export default DashboardLayout;
