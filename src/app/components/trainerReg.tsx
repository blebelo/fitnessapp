"use client";
import React from "react";
import { Button, Form, Input, Typography } from "antd";
import type { FormProps } from "antd";
import type { StoreValue } from "rc-field-form/lib/interface";
import { useStyles } from "./style/style";
import { ITrainer } from "@/providers/AuthProvider/context";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  LockOutlined,
} from "@ant-design/icons";

interface SignUpFormProps {
  onFinish: FormProps<ITrainer>["onFinish"];
  onFinishFailed?: FormProps<ITrainer>["onFinishFailed"];
  toggleForm: () => void;
}

const validateConfirmPassword = (
  getFieldValue: (name: string) => StoreValue) => ({
  validator(value: StoreValue): Promise<void> {
    if (!value || getFieldValue("password") === value) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("Passwords do not match"));
  },
});

const SignUpForm: React.FC<SignUpFormProps> = ({
  onFinish,
  onFinishFailed,
  toggleForm,
}) => {
  const { styles } = useStyles();
  const [form] = Form.useForm();

  return (
    <div className={styles.Container}>
      <Form
        form={form}
        name="signup"
        className={styles.Form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Typography className={styles.Typography}>Sign Up</Typography>

        <div className={styles.FormItems}>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your name" }]}
          >
            <Input
              className={styles.Input}
              prefix={<UserOutlined />}
              placeholder="Name"
            />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email" }]}
          >
            <Input
              className={styles.Input}
              prefix={<MailOutlined />}
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item
            name="contactNumber"
            rules={[
              { required: true, message: "Please input your contact number" },
            ]}
          >
            <Input
              className={styles.Input}
              prefix={<PhoneOutlined />}
              placeholder="Contact Number"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password" }]}
          >
            <Input.Password
              className={styles.Input}
              prefix={<LockOutlined />}
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password" },
              validateConfirmPassword(form.getFieldValue),
            ]}
          >
            <Input.Password
              className={styles.Input}
              prefix={<LockOutlined />}
              placeholder="Confirm Password"
            />
          </Form.Item>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.Submit}>
            Sign Up
          </Button>
        </Form.Item>

        <Button type="link" onClick={toggleForm}>
          Already Have An Account? <strong>Log In</strong>
        </Button>
      </Form>
    </div>
  );
};

export default SignUpForm;
