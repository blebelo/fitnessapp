"use client";
import React from "react";
import { Button, Form, Input, Typography, DatePicker, Select } from "antd";
import type { FormProps } from "antd";
import { useStyles } from "./style/style";
import {
  CalendarOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { IClient } from "@/providers/TrainerProvider/context";

const { Option } = Select;

interface CreateClientFormProps {
  onFinish: FormProps<IClient>["onFinish"];
  onFinishFailed?: FormProps<IClient>["onFinishFailed"];
}

const CreateClient: React.FC<CreateClientFormProps> = ({
  onFinish,
  onFinishFailed,
}) => {
  const { styles } = useStyles();

  return (
    <div>
      <Form
        name="createClient"
        className={styles.Form}
        style={{ border: "none" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Typography className={styles.Typography}>Create Client</Typography>

        <div className={styles.FormItems}>
          <Form.Item
            name="fullName"
            rules={[{ required: true, message: "Please enter your full name" }]}
          >
            <Input
              className={styles.Input}
              prefix={<UserOutlined />}
              placeholder="Full Name"
            />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Enter a valid email" },
            ]}
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
              { required: true, message: "Please enter your contact number" },
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
            />
          </Form.Item>

          <Form.Item
            name="sex"
            rules={[{ required: true, message: "Please select a sex" }]}
          >
            <Select className={styles.Input} placeholder="Select Sex">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
          </Form.Item>
          
          <Form.Item
            name="activeState"
            rules={[{ required: true, message: "Please select a value" }]}
          >
            <Select className={styles.Input} placeholder="Activate Client?">
              <Option value="true">Yes</Option>
              <Option value="false">No</Option>
            </Select>
          </Form.Item>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.Submit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateClient;
