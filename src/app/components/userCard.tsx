import styles from "./style/Navbar.module.css";
import React from "react";
import { useRouter } from "next/navigation";
import { Card, Button } from "antd";
import { IClient } from "@/providers/TrainerProvider/context";





const UserCard: React.FC<IClient> = (user) => {
  const router = useRouter();

  return (
    <Card
      hoverable
      onClick={() => router.push("/trainer/client-details")}
      className={styles.card}
    >
      <h2>{user.fullName}</h2>
      <h2>{user.contactNumber}</h2>
      <p>{user.email}</p>
      <p>{user.sex}</p>
      <Button className={styles.Button}>View</Button>
    </Card>
  );
};

export default UserCard;
