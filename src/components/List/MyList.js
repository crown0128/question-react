import React from 'react';
import { List, Button } from 'antd';
import {
    PlusOutlined
} from '@ant-design/icons';

const MyList = (props) => (
  <>
    <List
        itemLayout="horizontal"
        dataSource={props.data}
        renderItem={(item, index) => (
        <List.Item>
            <List.Item.Meta
            title={
                item
            }
            />
        </List.Item>
        )}
    />
    <Button className='addquestion' onClick={props.onAdd} type="link" icon={<PlusOutlined />}>
        Add a question
    </Button> 
  </>
);
export default MyList;