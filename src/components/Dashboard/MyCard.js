import React from 'react';
import { Card } from 'antd';
const MyCard = (props) => (
  <Card
    className='mycard'
    title={props.title}
    bordered={false}
    style={{
      width: 595,
    }}
  >
    {
      props.children
    }
  </Card>
);
export default MyCard;