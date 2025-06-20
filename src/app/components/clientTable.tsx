"use client";
import React from "react";
import { Table } from "antd";
import dayjs from "dayjs";
import { IClient } from "@/providers/TrainerProvider/context";
 

interface ClientTableProps {
  data: IClient[];
}

const ClientTable: React.FC<ClientTableProps> = ({ data }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Sex",
      dataIndex: "sex",
      key: "sex",
    },
    {
      title: "Contact Number",
      dataIndex: "contactNumber",
      key: "contactNumber",
    },
    {
      title: "Date of Birth",
      dataIndex: "dateOfBirth",
      key: "dateOfBirth",
      render: (dob: string) => dayjs(dob).format("YYYY-MM-DD"),
    },
    {
      title: "Active",
      dataIndex: "activeState",
      key: "activeState",
      render: (active: boolean) => (active ? "Yes" : "No"),
    },
  ];

  return (
      <Table
        columns={columns}
        dataSource={data}
        rowKey="_id"
        pagination={{ pageSize: 10 }}
      />
  );
};

export default ClientTable;
