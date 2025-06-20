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
import FoodItemForm from "@/app/components/CreateFood";
import { IFood } from "@/providers/FoodProvider/context";
import { useFoodActions, useFoodState } from "@/providers/FoodProvider";
import FoodTable from "@/app/components/foodTable";

const TrainerDashboard: React.FC = () => {
  const { styles } = useStyles();
  const [createClientModal, setcreateClientModal] = useState(false);
  const [createFoodModal, setCreateFoodModal] = useState(false);
  const [form] = Form.useForm();
  const { createClient, getClients } = useTrainerActions();
  const { createFood, getFoodItems } = useFoodActions();
  const { clients } = useTrainerState();
  const { foodItems } = useFoodState();

  const { isPending, isError } = useUserState();

  const [currentView, setCurrentView] = useState<"clients" | "food">("clients");

  const showModal = () => setcreateClientModal(true);
  const hideModal = () => setcreateClientModal(false);
  const showFoodForm = () => setCreateFoodModal(true);
  const hideFoodForm = () => setCreateFoodModal(false);

  const submitForm = (client: IClient) => {
    try {
      const userId = sessionStorage.getItem("id") ?? "";
      createClient({
        fullName: client.fullName,
        email: client.email,
        sex: client.sex,
        contactNumber: client.contactNumber,
        dateOfBirth: client.dateOfBirth,
        activeState: client.activeState,
        trainerId: userId,
      });
      hideModal();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const submitFoodForm = (food: IFood) => {
    try {
      createFood({
        name: food.name,
        protein: food.protein,
        carbs: food.carbs,
        sugar: food.sugar,
        fat: food.fat,
        fiber: food.fiber,
        sodium: food.sodium,
        potassium: food.potassium,
        category: food.category,
        servingSize: food.servingSize,
        cholesterol: food.cholesterol,
        energy: food.energy,
      });
      hideFoodForm();
    } catch (error) {
      console.error("Error submitting food form:", error);
    }
  };

  const closeForm = () => {
    form.resetFields();
    hideModal();
  };

  useEffect(() => {
    getClients();
    getFoodItems();
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

      {!isPending && !isError && (
        <>
          <div className={styles.Heading}>
            <div className={styles.Views}>
              <Typography
                className={currentView === "clients" ? 
                  styles.CurrentView : styles.Typography}
                onClick={() => setCurrentView("clients")}
              >
                Clients
              </Typography>
              <Typography
                className={currentView === "food" ? styles.CurrentView : styles.Typography}
                onClick={() => setCurrentView("food")}
              >
                Food Items
              </Typography>
            </div>

            <div>
              {currentView === "clients" && (
                <Button onClick={showModal} className={styles.Button}>
                  Create Client
                </Button>
              )}
              {currentView === "food" && (
                <Button onClick={showFoodForm} className={styles.Button}>
                  Create Food Item
                </Button>
              )}
            </div>
          </div>

          <div className={styles.Container}>
            {currentView === "clients" && <ClientTable data={clients ?? []} />}
            {currentView === "food" && <FoodTable data={foodItems ?? []} />}
          </div>

          <Modal open={createClientModal} onCancel={closeForm} footer={null}>
            <CreateClient onFinish={submitForm} />
          </Modal>

          <Modal open={createFoodModal} onCancel={hideFoodForm} footer={null}>
            <FoodItemForm onFinish={submitFoodForm} />
          </Modal>
        </>
      )}
    </>
  );
};

export default TrainerDashboard;
