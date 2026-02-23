import "./MobileForm.css";
import React, { useState } from "react";
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

export default function MobileForm() {
  const [form] = Form.useForm<FormValues>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: FormValues) => {
    try {
      setLoading(true);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form Submitted:", values);

      form.resetFields();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mobile-form-container">
      <Title level={5} className="contact-us-text">
        Contact Us
      </Title>

      <Title level={2} className="appointment-title">
        Make an Appointment
      </Title>

      <Form<FormValues>
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        requiredMark={false}
        className="mobile-form"
      >
        {/* Name & Email */}
        <div className="row-wrapper">
          <Form.Item
            name="fullName"
            rules={[{ required: true, message: "Full Name is required" }]}
            className="form-item"
          >
            <Input placeholder="Full Name *" size="large" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Email is required" },
              { type: "email", message: "Enter a valid email" },
            ]}
            className="form-item"
          >
            <Input placeholder="Email *" size="large" />
          </Form.Item>
        </div>

        {/* Dropdowns */}
        <div className="row-wrapper">
          <Form.Item name="dropdown1" className="form-item">
            <Select placeholder="Please Select" size="large">
              <Option value="option1">Option 1</Option>
              <Option value="option2">Option 2</Option>
            </Select>
          </Form.Item>

          <Form.Item name="dropdown2" className="form-item">
            <Select placeholder="Select Time" size="large">
              <Option value="5pm">5:00 Available</Option>
              <Option value="6pm">6:00 Available</Option>
            </Select>
          </Form.Item>
        </div>

        {/* Message */}
        <Form.Item name="message" className="message-item">
          <TextArea
            placeholder="Message"
            rows={5}
            maxLength={500}
            showCount
          />
        </Form.Item>

        {/* Submit */}
        <Form.Item className="submit-wrapper">
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={loading}
            block
          >
            Book Appointment
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
