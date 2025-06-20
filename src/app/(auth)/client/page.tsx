"use client";
import React, { useState } from "react";
import SignUpForm from "@/app/components/clientReg";
import LoginForm from "@/app/components/Login";
import { useUserActions, useUserState } from "@/providers/AuthProvider";
import { IClient, ILogin } from "@/providers/AuthProvider/context";
import NavBar from "@/app/components/NavBar";
import styles from "../trainer/page.module.css";
import Loader from "@/app/components/Loader";
import { Typography } from "antd";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const { registerUser, login } = useUserActions();
  const { isPending, isError } = useUserState();

  const handleSignUp = (client: IClient) => {
    registerUser({
      name: client.name,
      email: client.email,
      password: client.password,
      dateOfBirth: client.dateOfBirth,
      confirmPassword: client.confirmPassword,
      contactNumber: client.contactNumber,
      policiesAccepted: true,
    });
  };

  const handleLogin = (values: ILogin) => {
    login(values);
  };

  return (
    <div>
      <header className={styles.header}>
        <NavBar path="Trainer" />
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
