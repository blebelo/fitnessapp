"use client";
import { useStyles } from "./style";
import { Typography} from "antd";
import Navbar from "@/app/components/NavBar";


const ClientDashboard: React.FC = () => {
  const { styles } = useStyles();

  return (
    <>
      <header className={styles.Header}>
        <Navbar path={"Logout"} />
      </header>

      <div className={styles.Heading}>
        <Typography className={styles.Typography}>Client Dashboard</Typography>
      </div>
    </>
  );
};

export default ClientDashboard;
