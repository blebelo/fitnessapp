"use client";
import React, { useState } from "react";
import SignUpForm from "@/app/components/clientReg";
import LoginForm from "@/app/components/Login";
import { useUserActions } from "@/providers/AuthProvider";
import { IClient } from "@/providers/AuthProvider/context";
import NavBar from "@/app/components/NavBar";
import styles from '../trainer/page.module.css' 

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const { registerUser, login } = useUserActions();

  const handleSignUp = (client: IClient) => {
    registerUser({
      name: client.name,
      email: client.email,
      role: "client",
      password: client.password,
      dateOfBirth:  client.dateOfBirth,
      confirmPassword: client.confirmPassword,
      contactNumber: client.contactNumber,
      policiesAccepted: client.policiesAccepted,
    });
  };

  const handleLogin = (values: { email: string; password: string }) => {
    console.log("Log in with:", values);
    login(values);
  };

  return (
    <div>
      <header className={styles.header}>
        <NavBar path="Trainer"/>
      </header>
      
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
    </div>
  );
};

export default AuthPage;
