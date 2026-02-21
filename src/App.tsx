import React, { useRef } from "react";
import "./App.css";
import { Typography, Input, Form, Select, Button } from "antd";
import type { FormInstance } from "antd/es/form";

const { Title } = Typography;
const { Option } = Select;
const { TextArea } = Input;

interface FormValues {
  fullName: string;
  email: string;
  dropdown1?: string;
  dropdown2?: string;
  message?: string;
}

const inputStyle: React.CSSProperties = {
  height: "50px",
  width: "255px",
  fontWeight: 600,
  fontSize: "14px",
  backgroundColor: "#F9F9F9",
  border: "1.5px solid #E6E6E6",
  borderRadius: "5px",
};

const textAreaStyle: React.CSSProperties = {
  height: "140px",
  width: "537px",
  fontWeight: 600,
  fontSize: "16px",
  backgroundColor: "#F9F9F9",
  padding: "16px 26px",
  border: "1px solid #BDBDBD",
  borderRadius: "5px",
};

const buttonStyle: React.CSSProperties = {
  height: "58px",
  width: "218px",
  fontWeight: 600,
  fontSize: "16px",
};

function App() {
  const formRef = useRef<FormInstance<FormValues>>(null);

  const handleFinish = (values: FormValues) => {
    console.log("Form Submitted:", values);
    formRef.current?.resetFields();
  };

  return (
    <div className="App">
      {/* Header Section */}
      <Title
        level={5}
        className="contact-us-text"
        style={{ fontSize: 16, fontWeight: 700, marginBottom: 0 }}
      >
        Contact Us
      </Title>

      <Title
        level={2}
        style={{
          fontSize: 40,
          fontWeight: 700,
          lineHeight: "57px",
          marginTop: 0,
          marginBottom: 40,
        }}
      >
        Make an Appointment
      </Title>

      {/* Form Section */}
      <Form<FormValues>
        ref={formRef}
        layout="vertical"
        onFinish={handleFinish}
        autoComplete="off"
      >
        {/* Name & Email */}
        <div className="input-wrapper">
          <Form.Item
            name="fullName"
            rules={[
              { required: true, message: "Please enter Full Name" },
              { min: 3, message: "Name must be at least 3 characters" },
            ]}
          >
            <Input
              style={{ ...inputStyle, marginRight: 20 }}
              placeholder="Full Name *"
            />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please enter Email ID" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input style={inputStyle} placeholder="Email *" />
          </Form.Item>
        </div>

        {/* Dropdowns */}
        <div className="dropdown-wrapper">
          <Form.Item name="dropdown1">
            <Select
              style={{ ...inputStyle, marginRight: 20 }}
              placeholder="Please Select"
            >
              <Option value="option1">Option 1</Option>
              <Option value="option2">Option 2</Option>
            </Select>
          </Form.Item>

          <Form.Item name="dropdown2">
            <Select style={inputStyle} placeholder="4:00 Available">
              <Option value="5pm">5:00 Available</Option>
              <Option value="6pm">6:00 Available</Option>
            </Select>
          </Form.Item>
        </div>

        {/* Message */}
        <div className="message-wrapper">
          <Form.Item name="message">
            <TextArea style={textAreaStyle} placeholder="Message" />
          </Form.Item>
        </div>

        {/* Submit */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={buttonStyle}
            block
          >
            Book Appointment
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
