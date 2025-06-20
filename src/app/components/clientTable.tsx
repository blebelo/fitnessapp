"use client";
import React, { useState } from "react";
import { Table, Input } from "antd";
import dayjs from "dayjs";
import { IClient } from "@/providers/TrainerProvider/context";
import { ColumnsType } from "antd/es/table";

interface ClientTableProps {
  data: IClient[];
}

const ClientTable: React.FC<ClientTableProps> = ({ data }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value.toLowerCase());
  };

  const filteredData = data.filter((client) =>
    client.fullName.toLowerCase().includes(searchText)
  );

  const columns: ColumnsType<IClient> = [
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
      filters: [
        { text: "Male", value: "male" },
        { text: "Female", value: "female" },
      ],
    onFilter: (value: boolean | bigint | string | number | symbol, 
      record: IClient) => record.sex === value,

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
    <>
      <div style={{ marginBottom: 16 }}>
        <Input
          placeholder="Search by name"
          value={searchText}
          onChange={handleSearch}
          allowClear
          style={{ maxWidth: 250 }}
        />
      </div>
      <Table
        columns={columns}
        dataSource={filteredData}
        rowKey="_id"
        pagination={{ pageSize: 8, showSizeChanger: false }}
      />
    </>
  );
};

export default ClientTable;
