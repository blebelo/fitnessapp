"use client";
import React from "react";
import { Button, Form, Input, InputNumber, Select, Typography } from "antd";
import type { FormProps } from "antd";
import { useStyles } from "./style/style";
import { IFood } from "@/providers/FoodProvider/context";

interface ICreateFoodFormProps {
    onFinish: FormProps<IFood>["onFinish"];
    onFinishFailed?: FormProps<IFood>["onFinishFailed"];
}
const { Option } = Select;

const FoodItemForm: React.FC<ICreateFoodFormProps> = ({
  onFinish,
  onFinishFailed,
}) => {
  const { styles } = useStyles();

  return (
    <div>
      <Form
        name="createFood"
        className={styles.Form}
        style={{ border: "none" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Typography className={styles.Typography}>Create Food Item</Typography>

        <div className={styles.FormItems}>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please enter the food name" }]}
          >
            <Input className={styles.Input} placeholder="Food Name" />
          </Form.Item>

          <Form.Item
            name="protein"
            rules={[{ required: true, message: "Enter protein amount" }]}
          >
            <InputNumber
              className={styles.Input}
              placeholder="Protein (g)"
              min={0}
            />
          </Form.Item>

          <Form.Item
            name="carbs"
            rules={[{ required: true, message: "Enter carb amount" }]}
          >
            <InputNumber
              className={styles.Input}
              placeholder="Carbs (g)"
              min={0}
            />
          </Form.Item>

          <Form.Item
            name="sugar"
            rules={[{ required: true, message: "Enter sugar amount" }]}
          >
            <InputNumber
              className={styles.Input}
              placeholder="Sugar (g)"
              min={0}
            />
          </Form.Item>

          <Form.Item
            name="fat"
            rules={[{ required: true, message: "Enter fat amount" }]}
          >
            <InputNumber
              className={styles.Input}
              placeholder="Fat (g)"
              min={0}
            />
          </Form.Item>

          <Form.Item
            name="fiber"
            rules={[{ required: true, message: "Enter fiber amount" }]}
          >
            <InputNumber
              className={styles.Input}
              placeholder="Fiber (g)"
              min={0}
            />
          </Form.Item>

          <Form.Item
            name="sodium"
            rules={[{ required: true, message: "Enter sodium amount" }]}
          >
            <InputNumber
              className={styles.Input}
              placeholder="Sodium (mg)"
              min={0}
            />
          </Form.Item>

          <Form.Item
            name="potassium"
            rules={[{ required: true, message: "Enter potassium amount" }]}
          >
            <InputNumber
              className={styles.Input}
              placeholder="Potassium (mg)"
              min={0}
            />
          </Form.Item>

          <Form.Item
            name="category"
            rules={[{ required: true, message: "Please select a category" }]}
          >
            <Select className={styles.Input} placeholder="Select category">
              <Option value="veg">Veg</Option>
              <Option value="fruit">Fruit</Option>
              <Option value="meat">Meat</Option>
              <Option value="dairy">Dairy</Option>
              <Option value="grain">Grain</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="servingSize"
            rules={[{ required: true, message: "Enter serving size" }]}
          >
            <InputNumber
              className={styles.Input}
              placeholder="Serving Size (g)"
              min={0}
            />
          </Form.Item>

          <Form.Item
            name="cholesterol"
            rules={[{ required: true, message: "Enter cholesterol amount" }]}
          >
            <InputNumber
              className={styles.Input}
              placeholder="Cholesterol (mg)"
              min={0}
            />
          </Form.Item>

          <Form.Item
            name="energy"
            rules={[{ required: true, message: "Enter energy value" }]}
          >
            <InputNumber
              className={styles.Input}
              placeholder="Energy (kcal)"
              min={0}
            />
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

export default FoodItemForm;
