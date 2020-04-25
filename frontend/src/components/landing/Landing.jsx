import React from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

const Landing = () => {
  const history = useHistory();

  const goSignup = () => history.push('signup');

  const goSignin = () => history.push('signin');

  return (
    <div className="vertical-center-parent full-height">
      <div style={{ minHeight: '80vh' }}>
        <h1 style={{ marginBottom: '2rem' }}>Kopi Chat</h1>

        <div
          style={{
            minHeight: '300px',
            backgroundColor: '#cccccc',
            padding: '2rem'
          }}
        >
          <p>Talk on the phone with professionals on the go.</p>
        </div>

        <div>
          <Button
            type="primary"
            size="large"
            block
            style={{ margin: '1.2rem 0' }}
            onClick={goSignup}
          >
            Get started
          </Button>
          <Button
            type="primary"
            size="large"
            block
            style={{ margin: '1.2rem 0' }}
            onClick={goSignin}
          >
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
