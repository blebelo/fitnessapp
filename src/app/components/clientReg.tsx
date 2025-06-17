"use client";
import React from "react";
import { Button, Checkbox, DatePicker, Form, Input, Typography } from "antd";
import type { FormProps } from "antd";
import { useStyles } from "./style/style";
import { IClient } from "@/providers/AuthProvider/context";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  LockOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

interface SignUpFormProps {
  onFinish: FormProps<IClient>["onFinish"];
  onFinishFailed?: FormProps<IClient>["onFinishFailed"];
  toggleForm: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  onFinish,
  onFinishFailed,
  toggleForm,
}) => {
  const { styles } = useStyles();
  const [form] = Form.useForm();
  const acceptPolicies = Form.useWatch("acceptPolicies", form);

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
        <Typography className={styles.Typography}>Client Sign Up</Typography>

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
            name="dateOfBirth"
            rules={[
              { required: true, message: "Please select your date of birth" },
            ]}
          >
            <DatePicker
              className={styles.Input}
              suffixIcon={null}
              prefix={<CalendarOutlined />}
              placeholder="Date of Birth"
              onChange={(_, dateString) => {
                form.setFieldsValue({ dateOfBirth: dateString });
              }}
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
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match"));
                },
              }),
            ]}
          >
            <Input.Password
              className={styles.Input}
              prefix={<LockOutlined />}
              placeholder="Confirm Password"
            />
          </Form.Item>
        </div>

        <Form.Item
          name="acceptPolicies"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(
                      new Error("You must accept the app policies")
                    ),
            },
          ]}
        >
          <Checkbox className={styles.Checkbox}>
            I accept all app policies
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.Submit}
            disabled={!acceptPolicies}
          >
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
