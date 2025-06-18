"use client";
import React, { useState } from "react";
import SignUpForm from "@/app/components/trainerReg";
import LoginForm from "@/app/components/Login";
import { useUserActions } from "@/providers/AuthProvider";
import { ILogin, ITrainer } from "@/providers/AuthProvider/context";
import NavBar from "@/app/components/NavBar";
import styles from './page.module.css' 

const AuthPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const { createTrainer, login } = useUserActions();

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
        <NavBar path="Client"/>
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
