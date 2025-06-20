"use client";
import React, { useState } from "react";
import { Table, Input } from "antd";
import { IFood } from "@/providers/FoodProvider/context";
import { ColumnsType } from "antd/es/table";

interface ClientTableProps {
  data: IFood[];
}

const FoodTable: React.FC<ClientTableProps> = ({ data }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value.toLowerCase());
  };

  const columns: ColumnsType<IFood> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      filters: [
        { text: "Vegetable", value: "veg" },
        { text: "Fruit", value: "fruit" },
        { text: "Protein", value: "protein" },
        { text: "Dairy", value: "dairy" },
      ],
      onFilter: (value: boolean | bigint | string | number | symbol,  record: IFood) => record.category === value,
    },
    {
      title: "Serving Size (g)",
      dataIndex: "servingSize",
      key: "servingSize",
    },
    {
      title: "Energy (kcal)",
      dataIndex: "energy",
      key: "energy",
    },
    {
      title: "Protein (g)",
      dataIndex: "protein",
      key: "protein",
    },
    {
      title: "Carbs (g)",
      dataIndex: "carbs",
      key: "carbs",
    },
    {
      title: "Sugar (g)",
      dataIndex: "sugar",
      key: "sugar",
    },
    {
      title: "Fat (g)",
      dataIndex: "fat",
      key: "fat",
    },
    {
      title: "Fiber (g)",
      dataIndex: "fiber",
      key: "fiber",
    },
    {
      title: "Sodium (mg)",
      dataIndex: "sodium",
      key: "sodium",
    },
    {
      title: "Cholesterol (mg)",
      dataIndex: "cholesterol",
      key: "cholesterol",
    },
    {
      title: "Potassium (mg)",
      dataIndex: "potassium",
      key: "potassium",
    },
  ];

  return (
    <>
      <Input
        placeholder="Search by name"
        value={searchText}
        onChange={handleSearch}
        style={{ marginBottom: 16, maxWidth: 300 }}
        allowClear
      />
      <Table
        columns={columns}
        dataSource={data.filter((item) =>
          item.name.toLowerCase().includes(searchText)
        )}
        rowKey="_id"
        pagination={{ pageSize: 8, showSizeChanger: false }}
      />
    </>
  );
};

export default FoodTable;
