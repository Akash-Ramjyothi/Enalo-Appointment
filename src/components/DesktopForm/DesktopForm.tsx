import "./DesktopForm.css";
import { Typography } from "antd";
import { Input, Form, Select, Button } from "antd";
import { FormInstance } from "antd";
import React from "react";
const { Title } = Typography;
const { Option } = Select;
const { TextArea } = Input;

interface FormValues {
  fullName: string;
  email: string;
  dropdown1: string;
  dropdown2: string;
  message: string;
}

export default function DesktopForm() {
  const formRef = React.createRef<FormInstance>();

  return (
    <div className="App">
      <Title
        className="contact-us-text"
        level={5}
        style={{
          fontSize: "16px",
          fontWeight: "700",
          color: "#252B42",
          marginBottom: "0px",
        }}
      >
        Contact Us
      </Title>
      <Title
        className="Make an Appointment"
        level={2}
        style={{
          fontSize: "40px",
          fontWeight: "700",
          lineHeight: "57px",
          marginTop: "0px",
          color: "#252B42",
          marginBottom: "40px",
        }}
      >
        Make an Appointment
      </Title>

      <Form ref={formRef} layout="vertical">
        <div className="input-wrapper">
          <Form.Item
            label=""
            name="fullName"
            style={{
              marginRight: "20px",
            }}
            rules={[{ required: true, message: "Please enter Full Name" }]}
          >
            <Input
              className="custom-placeholder"
              style={{
                height: "50px",
                width: "255px",
                fontWeight: "600",
                fontSize: "14px",
                backgroundColor: "#F9F9F9",
                border: "1.5px solid #E6E6E6",
                borderRadius: "5px",
              }}
              placeholder="Full Name * "
            />
          </Form.Item>
          <Form.Item
            label=""
            name="email"
            rules={[
              { required: true, message: "Please enter Email ID" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input
              className="custom-placeholder"
              style={{
                height: "50px",
                width: "255px",
                fontWeight: "600",
                fontSize: "14px",
                backgroundColor: "#F9F9F9",
                border: "1.5px solid #E6E6E6",
                borderRadius: "5px",
              }}
              placeholder="Email *"
            />
          </Form.Item>
        </div>
        <div className="dropdown-wrapper">
          <Form.Item label="" name="dropdown1" style={{ marginRight: "20px" }}>
            <Select
              className="custom-select"
              style={{
                height: "50px",
                width: "255px",
                fontWeight: "600",
                fontSize: "14px",
                backgroundColor: "#F9F9F9",
                border: "0px solid #E6E6E6",
                borderRadius: "5px",
              }}
              placeholder="Please Select"
            >
              <Option value="option1">Option 1</Option>
              <Option value="option2">Option 2</Option>
            </Select>
          </Form.Item>
          <Form.Item label="" name="dropdown2">
            <Select
              className="custom-select-2"
              style={{
                height: "50px",
                width: "255px",
                fontWeight: "600",
                fontSize: "14px",
                color: "#737373",
                backgroundColor: "#F9F9F9",
                border: "0px solid #E6E6E6",
                borderRadius: "5px",
              }}
              placeholder="4:00 Available"
            >
              <Option value="option1">5:00 Available</Option>
              <Option value="option2">6:00 Available</Option>
            </Select>
          </Form.Item>
        </div>
        <div className="message-wrapper">
          <Form.Item
            label=""
            name="message"
            style={{
              height: "140px",
              width: "537px",
              fontWeight: "600",
              fontSize: "16px",
              color: "#737373",
            }}
          >
            <TextArea
              style={{
                height: "140px",
                width: "537px",
                fontWeight: "600",
                fontSize: "16px",
                color: "#BDBDBD",
                backgroundColor: "#F9F9F9",
                paddingTop: "16px",
                paddingLeft: "26px",
              }}
              placeholder="Message"
            />
          </Form.Item>
        </div>
        <Form.Item>
          <Button
            style={{
              height: "58px",
              width: "218px",
              fontWeight: "600",
              fontSize: "16px",
              color: "white",
              marginTop: "15px",
              backgroundColor: "#23A6F0",
            }}
            type="primary"
            htmlType="submit"
          >
            Book Appointment
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
