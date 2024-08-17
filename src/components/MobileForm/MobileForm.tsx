import './MobileForm.css';
import React from 'react';
import { Typography } from "antd";
import { Input, Form, Select, Button } from "antd";
import { FormInstance } from "antd";
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

 export default function MobileForm() {
    const formRef = React.createRef<FormInstance>();
  
    return (
      <div className="App">
        <Title
          className="contact-us-text"
          level={5}
          style={{ fontSize: "16px", fontWeight: "700", color: "#252B42" }}
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
          }}
        >
          Make an Appointment
        </Title>
  
        <Form ref={formRef} layout="vertical">
          <div className="input-wrapper">
            <Form.Item
              label=""
              name="fullName"
              style={{ marginRight: "10px" }}
              rules={[{ required: true, message: "Please enter Full Name" }]}
            >
              <Input
                style={{
                  height: "50px",
                  width: "255px",
                  fontWeight: "700",
                  fontSize: "16px",
                  color: "#737373",
                }}
                placeholder="Full Name *"
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
                style={{
                  height: "50px",
                  width: "255px",
                  fontWeight: "700",
                  fontSize: "16px",
                  color: "#737373",
                }}
                placeholder="Email *"
              />
            </Form.Item>
          </div>
          <div className="dropdown-wrapper">
            <Form.Item label="" name="dropdown1" style={{ marginRight: "10px" }}>
              <Select
                style={{
                  height: "50px",
                  width: "255px",
                  fontWeight: "700",
                  fontSize: "16px",
                  color: "#737373",
                }}
                placeholder="Please Select"
              >
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
              </Select>
            </Form.Item>
            <Form.Item label="" name="dropdown2" style={{ marginRight: "10px" }}>
              <Select
                style={{
                  height: "50px",
                  width: "255px",
                  fontWeight: "700",
                  fontSize: "16px",
                  color: "#737373",
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
                  color: "#737373",
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
  };