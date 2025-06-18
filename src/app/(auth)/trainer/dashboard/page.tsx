"use client";
import React, { useEffect, useState } from "react";
import { Row, Col, Button, Typography, Modal, Form } from "antd";
import { useStyles } from "./style";
import Navbar from "@/app/components/NavBar";
import CreateClient from "@/app/components/createClient";
import UserCard from "@/app/components/userCard";
import { IClient } from "@/providers/TrainerProvider/context";
import {
  useTrainerActions,
  useTrainerState,
} from "@/providers/TrainerProvider";

const TrainerDashboard: React.FC = () => {
  const { styles } = useStyles();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const { createClient, getClients } = useTrainerActions();
  const { clients } = useTrainerState();
  
const submitForm = (client: IClient) => {
  try {
    const userId = sessionStorage.getItem('id') ?? '';
    createClient({
      fullName: client.fullName,
      email: client.email,
      sex: client.sex,
      contactNumber: client.contactNumber,
      dateOfBirth: client.dateOfBirth,
      activeState: true,
      trainerId: userId,
    });
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

  const showModal = () => setIsModalVisible(true);

  const closeForm = () => {
    form.resetFields();
    setIsModalVisible(false);
  };

  useEffect(() => {
    getClients();
  }, []);

  return (
    <>
      <Navbar path={"Logout"} />
      <div className={styles.Container}>
        <div className={styles.Heading}>
          <Typography className={styles.Typography}>Clients</Typography>
          <Button onClick={showModal} className={styles.Button}>
            Create Client
          </Button>
        </div>
      </div>
      <Row gutter={[16, 16]}>
        {clients?.map((user) => (
          <Col key={user._id} xs={22} sm={12} md={8} lg={6}>
            <UserCard {...user} />
          </Col>
        ))}
      </Row>

      <Modal open={isModalVisible} onCancel={closeForm} footer={null}>
        <CreateClient onFinish={submitForm} />
      </Modal>
    </>
  );
};

export default TrainerDashboard;
