import React from 'react';
import { Button, List } from 'antd';
import {
    PlusOutlined
} from '@ant-design/icons';
import MyListVideoEditCom from '../List/MyListVideoEditCom';

const EditVideo = (props) => {
    const data = [
        {
          type: '4 minute',
          description: 'Tell me about yourself?',
          onEdit: () => {}
        },
        {
          type: '2 minute',
          description: 'Why did you apply for this program?',
          onEdit: () => {}
        }
    ].map(item => <MyListVideoEditCom data={item} onAdd={() => {}} /> );
    return ( 
        // <MyCard title="Video based questions">
        <>
            <List
                itemLayout="horizontal"
                dataSource={data}
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
            <Button onClick={props.onAdd} className='pl-0 addquestion' type="link" icon={<PlusOutlined />}>
                Add a question
            </Button>       
        </>     
        // </MyCard>
    )
}
export default EditVideo;