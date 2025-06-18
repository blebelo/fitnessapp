import styles from "./style/Navbar.module.css";
import React from "react";
import { useRouter } from "next/navigation";
import { Card, Button } from "antd";
import { IUserData } from "../(auth)/trainer/dashboard/page";




const UserCard: React.FC<IUserData> = (user) => {
  const router = useRouter();

  return (
    <Card
      hoverable
      onClick={() => router.push("/trainer/client-details")}
      className={styles.card}
    >
      <h2>{user.fullname}</h2>
      <h2>{user.contactNumber}</h2>
      <p>{user.email}</p>
      <p>{user.sex}</p>
      <Button className={styles.Button}>View Client</Button>
    </Card>
  );
};

export default UserCard;
