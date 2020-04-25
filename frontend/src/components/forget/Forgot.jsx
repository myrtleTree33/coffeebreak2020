import React from 'react';
import { Row, Card, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { useHistory } from 'react-router-dom';

import './forgot.css';

const Forgot = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  const history = useHistory();

  const goSignin = () => history.push('signin');

  return (
    <div className="vertical-center-parent full-height">
      <Card style={{ width: 300 }} title="Reset password">
        <Form
          name="forgot_login"
          className="forgot-form"
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
                message: 'Please input your email!'
              }
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="forgot-form-button">
              Reset password
            </Button>
            <span style={{ float: 'left' }}>
              <a onClick={goSignin}>Go back to signing in.</a>
            </span>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Forgot;
