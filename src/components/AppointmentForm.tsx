"use client"
import React, { useState } from 'react';
import type { CascaderProps } from 'antd';
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from 'antd';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const { Option } = Select;

interface AppointmentFormProps {
  service: string | null;
  servicesOptions: { value: string; label: string }[];
}

interface DataNodeType {
  value: string;
  label: string;
  children?: DataNodeType[];
}

const residences: CascaderProps<DataNodeType>['options'] = [
  {
    value: 'karnataka',
    label: 'Karnataka',
    children: [
      {
        value: 'bengaluru',
        label: 'Bengaluru',
        children: [
          {
            value: 'lalbagh',
            label: 'Lalbagh',
          },
        ],
      },
    ],
  },
  {
    value: 'maharashtra',
    label: 'Maharashtra',
    children: [
      {
        value: 'mumbai',
        label: 'Mumbai',
        children: [
          {
            value: 'gatewayofindia',
            label: 'Gateway of India',
          },
        ],
      },
    ],
  },
  {
    value: "tamilnadu",
    label: "Tamil Nadu",
    children: [
      {
        value: "chennai",
        label: "Chennai",
        children: [
          {
            value: "marina",
            label: "Marina Beach"
          },
          {
            value: "kapaleeshwarar",
            label: "Kapaleeshwarar Temple"
          },
          {
            value: "valluvar",
            label: "Valluvar Kottam"
          },
          {
            value: "fortstgeorge",
            label: "Fort St. George"
          },
          {
            value: "guindy",
            label: "Guindy National Park"
          }
        ]
      }
    ]
  }
];



const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const AppointmentForm = ({ service, servicesOptions }: AppointmentFormProps) => {
  const [form] = Form.useForm();
  const stripe = useStripe();
  const elements = useElements();
  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!;

  const stripePromise = loadStripe(publishableKey);

  const onFinish = async(values: any) => {
    console.log('Received values of form: ', values);
    const stripe = await stripePromise;
    const checkoutSession = await axios.post("/api/payment", {
      data: {
        amount: 500,
        service: values.service,
      },
    });
    const result = await stripe!.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }} defaultValue={'91'}>
        <Option value="91">+91</Option>
      </Select>
    </Form.Item>
  );

  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );

  const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

  const onWebsiteChange = (value: string) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));



  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      scrollToFirstError
    >
      <Form.Item
        name="nickname"
        label="Name"
        tooltip="What do you want others to call you?"
        rules={[{ message: 'Please input your nickname!', whitespace: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="place"
        label="Place"
        tooltip="Where do you come from?"
        rules={[{ message: 'Please input your place]!', whitespace: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ message: 'Please input your phone number!' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        name="select"
        label="Select"
        hasFeedback
        rules={[{  message: 'Please select your country!' }]}
      >
        <Select placeholder="Please select a service" defaultValue={service}>
          {servicesOptions.map((service) => (
            <Option key={service.value} value={service.value}>
              {service.label}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="description"
        label="Description"
        rules={[{  message: 'Please input Description' }]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[{  message: 'Please select gender!' }]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="DatePicker"
        name="DatePicker"
        rules={[{  message: 'Please input!' }]}
      >
        <DatePicker showTime />
      </Form.Item>


      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="default" htmlType="submit">
          Pay 500 
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AppointmentForm;