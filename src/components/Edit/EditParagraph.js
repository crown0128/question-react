import React, {useState} from 'react';
import { Button, Input, Select } from 'antd';
import {
    CloseOutlined,
} from '@ant-design/icons';
import { types } from '../../util/global';

const EditParagraph = (props) => {
    const [data, setData] = useState(props.data)
    const handleChange = (value) => {setData({...data, type: value})}
    return(
        // <MyCard title="Question">
        <>
            <div className='mt-lg labelType'>Type</div>
            <Select
                className='mt-lg'
                defaultValue={props.type}
                style={{
                    width: 545,
                    height: 45
                }}
                onChange={handleChange}
                options={types}
            />
            <div className='mt-lg labelQuestion'>Question</div>
            <Input onChange={(e) => setData({...data,question: e.target.value})} className='mt-sm p-15' placeholder="Type here" />
            
            <div className='mt-sm flex-row-space-between'>
                <Button className='deleteBtn' onClick={() => props.delete(props.data.id)} type='link' danger icon={<CloseOutlined />}> Delete question </Button>
                <Button className='saveBtn' onClick={() => props.save(props.dataWh, props.data.id, data)} type="primary">
                    Save
                </Button>
            </div>
        </>
        // </MyCard>
    )
}
export default EditParagraph;