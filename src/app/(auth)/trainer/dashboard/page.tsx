"use client";
import React, { useEffect, useState } from "react";
import { Button, Typography, Modal, Form } from "antd";
import { useStyles } from "./style";
import Navbar from "@/app/components/NavBar";
import CreateClient from "@/app/components/createClient";
import ClientTable from "@/app/components/clientTable";
import { IClient } from "@/providers/TrainerProvider/context";
import {
  useTrainerActions,
  useTrainerState,
} from "@/providers/TrainerProvider";
import { useUserState } from "@/providers/AuthProvider";
import Loader from "@/app/components/Loader";

const TrainerDashboard: React.FC = () => {
  const { styles } = useStyles();
  const [createClientModal, setcreateClientModal] = useState(false);
  const [mealPlanModal, setmealPlanModal] = useState(false);
  const [form] = Form.useForm();
  const { createClient, getClients } = useTrainerActions();
  const { clients } = useTrainerState();
  
  const { isPending, isError } = useUserState();
  const showModal = () => setcreateClientModal(true);
  const hideModal = () => setcreateClientModal(false);
  const showMealForm = () => setmealPlanModal(true);
  const hideMealForm = () => setmealPlanModal(false);
  
  const submitForm = (client: IClient) => {
    try {
      const userId = sessionStorage.getItem("id") ?? "";
      createClient({
        fullName: client.fullName,
        email: client.email,
        sex: client.sex,
        contactNumber: client.contactNumber,
        dateOfBirth: client.dateOfBirth,
        activeState: true,
        trainerId: userId,
      });
      hideModal();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const closeForm = () => {
    form.resetFields();
    hideModal();
  };

  useEffect(() => {
    getClients();
  }, []);


return (
  <>
    <header className={styles.Header}>
      <Navbar path="Logout" />
    </header>

    {isPending && (
      <div className={styles.CenteredContent}>
        <Loader />
      </div>
    )}

    {!isPending && isError && (
      <div className={styles.CenteredContent}>
        <Typography.Text type="danger">Error Authenticating User</Typography.Text>
      </div>
    )}

    {!isPending && !isError && (
      <>
        <div className={styles.Heading}>
          <Typography className={styles.Typography}>Clients</Typography>
          <Button onClick={showModal} className={styles.Button}>
            Create Client
          </Button>
          <Button onClick={showMealForm} className={styles.Button}>
            Create Meal Plan
          </Button>
        </div>

        <div className={styles.Container}>
          <ClientTable data={clients ?? []} />
        </div>

        <Modal open={createClientModal} onCancel={closeForm} footer={null}>
          <CreateClient onFinish={submitForm} />
        </Modal>

        <Modal open={mealPlanModal} onCancel={hideMealForm} footer={null} />
      </>
    )}
  </>
);

};

export default TrainerDashboard;
