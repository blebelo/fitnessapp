"use client";
import React, { useEffect } from "react";
import {
  Button,
  Collapse,
  Form,
  Input,
  Select,
  Space,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { IFood, IMealPlan } from "@/providers/FoodProvider/context";
import { useFoodActions, useFoodState } from "@/providers/FoodProvider";

const { TextArea } = Input;

const MealPlanForm: React.FC = () => {
  const [form] = Form.useForm();
  const { getFoodItems } = useFoodActions();
  const { foodItems } = useFoodState();

  useEffect(() => {
    getFoodItems();
  }, []);

  const onFinish = (values: IMealPlan) => {
    console.log("Meal Plan Submitted:", values);
  };

  return (
    <div>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          mealTotals: { calories: 0, carbs: "", protein: "", fat: "" },
          meals: [],
          clientNotes: [""],
        }}
      >
        <h2>Create Meal Plan</h2>

        <Form.Item
          name="name"
          label="Meal Plan Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="client" label="Client ID" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item
          name="clientName"
          label="Client Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="description" label="Description"  rules={[{ required: true }]}>
          <TextArea rows={2} />
        </Form.Item>

        <Form.Item name="notes" label="Notes"  rules={[{ required: true }]}>
          <TextArea rows={2} />
        </Form.Item>


        <Form.List name="clientNotes">
          {(fields, { add, remove }) => (
            <>
              <h3>Client Notes</h3>
              {fields.map(({ key, name }) => (
                <Space
                  key={key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item
                    name={name}
                    rules={[{ required: true, message: "Missing note" }]}
                  >
                    <Input placeholder="Note" />
                  </Form.Item>
                  <MinusCircleOutlined
                    style={{ color: "red" }}
                    onClick={() => remove(name)}
                  />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  icon={<PlusOutlined />}
                >
                  Add Note
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.List name="meals">
          {(mealFields, { add: addMeal, remove: removeMeal }) => (
            <>
              <h3>Meals</h3>
              <Collapse accordion>
                {mealFields.map(({ key, name }) => (
                  <Collapse.Panel
                    header={`Meal ${name + 1}`}
                    key={key}
                    extra={
                      <MinusCircleOutlined
                        onClick={(e) => {
                          e.stopPropagation();
                          removeMeal(name);
                        }}
                      />
                    }
                  >
                    <Form.Item
                      name={[name, "name"]}
                      label="Meal Name"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item name={[name, "note"]} label="Meal Note">
                      <Input />
                    </Form.Item>

                    <Form.Item
                      name={[name, "items"]}
                      label="Select Items"
                      rules={[
                        { required: true, message: "Select at least one item" },
                      ]}
                    >
                      <Select mode="multiple" placeholder="Choose items">
                        {foodItems?.map((item: IFood) => (
                          <Select.Option key={item._id} value={item._id}>
                            {item.name}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Collapse.Panel>
                ))}
              </Collapse>

              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => addMeal()}
                  icon={<PlusOutlined />}
                >
                  Add Meal
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit Meal Plan
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default MealPlanForm;
