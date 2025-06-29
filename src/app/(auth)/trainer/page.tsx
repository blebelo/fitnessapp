"use client";
import React, { useState } from "react";
import SignUpForm from "@/app/components/trainerReg";
import LoginForm from "@/app/components/Login";
import { useUserActions, useUserState } from "@/providers/AuthProvider";
import { ILogin, ITrainer } from "@/providers/AuthProvider/context";
import NavBar from "@/app/components/NavBar";
import styles from "./page.module.css";
import Loader from "@/app/components/Loader";
import { Typography } from "antd";

const AuthPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const { createTrainer, login } = useUserActions();
  const { isPending, isError } = useUserState();

  const handleSignUp = (trainer: ITrainer) => {
    createTrainer({
      name: trainer.name,
      email: trainer.email,
      role: "admin",
      password: trainer.password,
      confirmPassword: trainer.confirmPassword,
      contactNumber: trainer.contactNumber,
      planType: "base",
      activeState: true,
      trial: false,
      policiesAccepted: trainer.policiesAccepted,
    });
  };

  const handleLogin = (values: ILogin) => {
    login(values);
  };

  return (
    <div>
      <header className={styles.header}>
        <NavBar path="Client" />
      </header>

      {isPending && (
        <div className={styles.CenteredContent}>
          <Loader />
        </div>
      )}

      {isSignUp ? (
        <SignUpForm
          onFinish={handleSignUp}
          toggleForm={() => setIsSignUp(!isSignUp)}
        />
      ) : (
        <LoginForm
          onFinish={handleLogin}
          toggleForm={() => setIsSignUp(!isSignUp)}
        />
      )}

      {!isPending && isError && (
        <div className={styles.CenteredContent}>
          <Typography.Text type="danger">
            Error Authenticating User
          </Typography.Text>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
