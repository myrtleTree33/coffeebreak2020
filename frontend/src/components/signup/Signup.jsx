import React from 'react';
import { Row, Card, Form, Input, Button, Checkbox, Select } from 'antd';
import { UserOutlined, LockOutlined, PhoneOutlined } from '@ant-design/icons';

import { useHistory } from 'react-router-dom';

import './Signup.css';
import { createUser } from '../../services/user/userService';

const { Option } = Select;

const Signup = () => {
  // const onRoleChange = value => {
  //   switch (value) {
  //     case 'client':
  //       form.setFieldsValue({ role: 'client' });
  //       return;
  //     case 'therapist':
  //       form.setFieldsValue({ note: 'therapist' });
  //       return;
  //   }
  // };

  const history = useHistory();

  const goSignin = () => history.push('signin');
  const goForgot = () => history.push('forgot');

  const onFinish = async values => {
    try {
      const { email, phoneNumber, password, firstName, lastName, role } = values;
      await createUser({ email, phoneNumber, password, firstName, lastName, role });

      // If successful, then navigate to sign in page
      goSignin();
    } catch (e) {
      console.error(e);
      console.error('Failed to sign up user');
    }
  };

  return (
    <div className="vertical-center-parent full-height">
      <Card style={{ width: 300 }} title="Sign up">
        <Form
          name="normal_signup"
          className="signup-form"
          initialValues={{
            remember: true
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Email!'
              }
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!'
              }
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item
            name="firstName"
            rules={[
              {
                required: true,
                message: 'Please input your first name!'
              }
            ]}
          >
            <Input placeholder="First name" />
          </Form.Item>

          <Form.Item
            name="lastName"
            rules={[
              {
                required: true,
                message: 'Please input your last name!'
              }
            ]}
          >
            <Input placeholder="Last name" />
          </Form.Item>

          <Form.Item
            name="phoneNumber"
            rules={[
              {
                required: true,
                message: 'Please input your phone number!'
              }
            ]}
          >
            <Input
              prefix={<PhoneOutlined className="site-form-item-icon" />}
              placeholder="Phone number"
            />
          </Form.Item>

          <Form.Item name="role" label="I'm a..." rules={[{ required: true }]}>
            <Select placeholder="Select one" allowClear>
              <Option value="client">Client</Option>
              <Option value="therapist">Therapist</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="signup-form-forgot" onClick={goForgot}>
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="signup-form-button">
              Sign up now!
            </Button>
            <span style={{ float: 'right' }}>
              Or <a onClick={goSignin}>Sign in instead.</a>
            </span>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Signup;
