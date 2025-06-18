"use client";
import React, { useState } from "react";
import { Row, Col, Button, Typography, Modal, Form } from "antd";
import { useStyles } from "./style";
import Navbar from "@/app/components/NavBar";
import CreateClient from "@/app/components/createClient";
import UserCard from "@/app/components/userCard";
import { IClient } from "@/providers/TrainerProvider/context";
import { useTrainerActions } from "@/providers/TrainerProvider";

export interface IUserData {
  id?: number;
  fullname: string;
  contactNumber: number;
  email: string;
  sex: string;
}

const TrainerDashboard: React.FC = () => {
  const { styles } = useStyles();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const {createClient} = useTrainerActions()
  const userDetails = JSON.parse(sessionStorage.getItem('userDetails') || '{}');

  const submitForm = (client: IClient) => {
    console.log({
      fullName: client.fullName,
      email: client.email,
      sex: client.sex,
      contactNumber: client.contactNumber,
      dateOfBirth: client.dateOfBirth.toISOString().split('T')[0],
      activeState: true,
      trainerId: userDetails.id 
    })
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


  const clientDetails: IUserData[] = [
    {
      id: 1,
      fullname: "Karabo",
      contactNumber: 782227638,
      email: "email1@nutricoach.com",
      sex: "male",
    },
    {
      id: 2,
      fullname: "Smith",
      contactNumber: 785123456,
      email: "smith@nutricoach.com",
      sex: "female",
    },
    {
      id: 3,
      fullname: "Bokang",
      contactNumber: 786543210,
      email: "bokang@nutricoach.com",
      sex: "male",
    },
    {
      id: 4,
      fullname: "Xolani",
      contactNumber: 781112223,
      email: "xolani@nutricoach.com",
      sex: "male",
    },
    {
      id: 5,
      fullname: "Willeam",
      contactNumber: 789998877,
      email: "willeam@nutricoach.com",
      sex: "male",
    },
    {
      id: 6,
      fullname: "Tshepo",
      contactNumber: 787878787,
      email: "tshepo@nutricoach.com",
      sex: "male",
    },
    {
      id: 7,
      fullname: "Anroux",
      contactNumber: 784444555,
      email: "anroux@nutricoach.com",
      sex: "female",
    },
    {
      id: 8,
      fullname: "Polane",
      contactNumber: 783336666,
      email: "polane@nutricoach.com",
      sex: "male",
    },
    {
      id: 9,
      fullname: "Nthabiseng",
      contactNumber: 786666999,
      email: "nthabiseng@nutricoach.com",
      sex: "female",
    },
    {
      id: 10,
      fullname: "Tebogo",
      contactNumber: 782223344,
      email: "tebogo@nutricoach.com",
      sex: "male",
    },
    {
      id: 11,
      fullname: "Lerato",
      contactNumber: 785555333,
      email: "lerato@nutricoach.com",
      sex: "female",
    },
    {
      id: 12,
      fullname: "Kagiso",
      contactNumber: 780009999,
      email: "kagiso@nutricoach.com",
      sex: "male",
    },
  ];

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
          <Button onClick={showModal} className={styles.NewClient}>
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
