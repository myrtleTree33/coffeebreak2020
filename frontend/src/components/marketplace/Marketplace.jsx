import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, List, Button } from 'antd';

import { getTherapists } from '../../services/marketplace/maketplaceService';

const Marketplace = () => {
  const [therapists, setTherapists] = useState([]);
  const [hasErrors, setErrors] = useState(false);

  const history = useHistory();

  const goBook = therapist => history.push('/book', therapist);

  useEffect(() => {
    (async () => {
      try {
        const therapistsRes = await getTherapists();
        setTherapists(therapistsRes);
      } catch (e) {
        setErrors(true);
      }
    })();
  });

  return (
    <div className="content-spacing">
      <h1>Marketplace</h1>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3
        }}
        dataSource={therapists}
        renderItem={therapist => (
          <List.Item>
            <Card
              title={therapist.displayName}
              // cover={<img alt="example" src={therapist.photoURL} />}
              cover={
                <iframe
                  // width="1280"
                  height="200"
                  src="https://www.youtube.com/embed/kayOhGRcNt4"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              }
            >
              <p>{therapist.description}</p>
              <Button block type="primary" onClick={() => goBook(therapist)}>
                Select me
              </Button>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Marketplace;
