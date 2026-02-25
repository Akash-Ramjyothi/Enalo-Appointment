import "./DesktopForm.css";
import React from "react";
import { Typography, Input, Form, Select, Button } from "antd";
import type { FormInstance } from "antd/es/form";

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
  const [form] = Form.useForm<FormValues>();

  const onFinish = (values: FormValues) => {
    console.log("Form Submitted:", values);
    form.resetFields();
  };

  return (
    <div className="desktop-form-container">
      <Title className="contact-us-text" level={5}>
        Contact Us
      </Title>

      <Title className="appointment-title" level={2}>
        Make an Appointment
      </Title>

      <Form<FormValues>
        form={form}
        layout="vertical"
        onFinish={onFinish}
        requiredMark={false}
      >
        <div className="input-wrapper">
          <Form.Item
            name="fullName"
            rules={[{ required: true, message: "Please enter Full Name" }]}
          >
            <Input placeholder="Full Name *" className="form-input" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please enter Email ID" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input placeholder="Email *" className="form-input" />
          </Form.Item>
        </div>

        <div className="dropdown-wrapper">
          <Form.Item
            name="dropdown1"
            rules={[{ required: true, message: "Please select an option" }]}
          >
            <Select placeholder="Please Select" className="form-select">
              <Option value="option1">Option 1</Option>
              <Option value="option2">Option 2</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="dropdown2"
            rules={[{ required: true, message: "Please select time slot" }]}
          >
            <Select placeholder="Select Time" className="form-select">
              <Option value="5pm">5:00 Available</Option>
              <Option value="6pm">6:00 Available</Option>
            </Select>
          </Form.Item>
        </div>

        <div className="message-wrapper">
          <Form.Item name="message">
            <TextArea
              rows={5}
              placeholder="Message"
              className="form-textarea"
            />
          </Form.Item>
        </div>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="submit-button"
          >
            Book Appointment
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
