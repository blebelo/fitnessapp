"use client";
import React from "react";
import { Button, Form, Input, Typography } from "antd";
import type { FormProps } from "antd";
import { useStyles } from "./style/style";
import { ILogin } from "@/providers/AuthProvider/context";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

interface LoginFormProps {
  onFinish: FormProps<ILogin>["onFinish"];
  onFinishFailed?: FormProps<ILogin>["onFinishFailed"];
  toggleForm: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onFinish,
  onFinishFailed,
  toggleForm,
}) => {
  const { styles } = useStyles();

  return (
    <div className={styles.Container}>
      <Form
        name="login"
        className={styles.Form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Typography className={styles.Typography}>Login</Typography>

        <div className={styles.FormItems}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              className={styles.Input}
              prefix={<MailOutlined />}
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              className={styles.Input}
              prefix={<LockOutlined />}
              placeholder="Password"
            />
          </Form.Item>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.Submit}>
            Login
          </Button>
        </Form.Item>

        <Button type="link" onClick={toggleForm}>
          Don&apos;t have an account? <strong>Sign up</strong>
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
