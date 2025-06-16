"use client";
import React, { useState } from "react";
import SignUpForm from "@/app/components/trainerReg";
import LoginForm from "@/app/components/Login";
import { useUserActions } from "@/providers/AuthProvider";
import { ITrainer } from "@/providers/AuthProvider/context";
import NavBar from "@/app/components/NavBar";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const { createTrainer, login } = useUserActions();

  const handleSignUp = (trainer: ITrainer) => {
    console.log("Sign up with:", trainer);
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
      policiesAccepted: true,
    });
  };

  const handleLogin = (values: { email: string; password: string }) => {
    console.log("Log in with:", values);
    login(values);
  };

  return (
    <div>
      <header style={{ width: "100vw" }}>
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
