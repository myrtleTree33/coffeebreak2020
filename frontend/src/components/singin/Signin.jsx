import React from 'react';
import { Row, Card, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { useHistory } from 'react-router-dom';

import './Signin.css';
import { loginUser, isUserLoggedIn } from '../../services/user/userService';

const Singin = () => {
  const history = useHistory();

  const goSignup = () => history.push('signup');
  const goForgot = () => history.push('forgot');
  const goMarketplace = () => history.push('/market');

  const onFinish = async values => {
    try {
      const { email, password } = values;
      await loginUser(email, password);

      // If successful, then navigate to sign in page
      goMarketplace();
    } catch (e) {
      console.error(e);
      console.error('Failed to sign in');
    }
  };

  return (
    <div className="vertical-center-parent full-height">
      <Card style={{ width: 300 }} title="Sign in">
        <Form
          name="normal_login"
          className="login-form"
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
                message: 'Please input your Username!'
              }
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
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
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" onClick={goForgot}>
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Sign in
            </Button>
            <span style={{ float: 'right' }}>
              Or <a onClick={goSignup}>register now!</a>
            </span>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Singin;
