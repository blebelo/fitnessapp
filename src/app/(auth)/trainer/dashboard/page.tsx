"use client";
import React, { useState } from "react";
import { Row, Col, Button, Typography, Modal, Form } from "antd";
import { useStyles } from "./style";
import Navbar from "@/app/components/NavBar";
import CreateClient from "@/app/components/createClient";
import UserCard from "@/app/components/userCard";
import { IClient } from "@/providers/TrainerProvider/context";
import { useTrainerActions } from "@/providers/TrainerProvider";


const TrainerDashboard: React.FC = () => {
  const { styles } = useStyles();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const {createClient} = useTrainerActions()
  const userDetails = JSON.parse(sessionStorage.getItem('userDetails') || '{}');

  const submitForm = (client: IClient) => {
    createClient({
      fullName: client.fullName,
      email: client.email,
      sex: client.sex,
      contactNumber: client.contactNumber,
      dateOfBirth: client.dateOfBirth.toISOString().split('T')[0],
      activeState: true,
      trainerId: userDetails.id 
    });
  };

  const clientDetails = sessionStorage.getItem('clientDetails')
  const showModal = () => setIsModalVisible(true);

  const closeForm = () => {
    form.resetFields();
    setIsModalVisible(false);
  };

  return (
    <>
      <Navbar path={"Logout"} />
      <div className={styles.Container}>
        <div className={styles.Heading}>
          <Typography className={styles.Typography}>Clients</Typography>
          <Button onClick={showModal} className={styles.CreateButton}>
            Create Client
          </Button>
        </div>

        <Row gutter={[16, 16]}>
          {clientDetails.map((user) => (
            <Col key={user.id} xs={22} sm={12} md={8} lg={6}>
              <UserCard {...user} />
            </Col>
          ))}
        </Row>
      </div>

      <Modal open={isModalVisible} onCancel={closeForm} footer={null}>
        <CreateClient onFinish={submitForm}/>
      </Modal>
    </>
  );
};

export default TrainerDashboard;
