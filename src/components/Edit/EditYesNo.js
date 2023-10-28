import React,{useState} from 'react';
import { Button, Input, Select, Checkbox } from 'antd';
import {
    CloseOutlined,
} from '@ant-design/icons';
import { types } from '../../util/global';

const EditYesNo = (props) => {
    const [data, setData] = useState(props.data)
    const handleChange = (value) => {setData({...data, type: value})}
    const onChange = (e) => {setData({...data, disqualify: e.target.checked})}
    return ( 
        // <MyCard title="Question">
        <>
            <div className='mt-lg labelType'>Type</div>
            <Select
                className='mt-lg'
                defaultValue={props.data.type}
                style={{
                    width: 545,
                    height: 45
                }}
                onChange={handleChange}
                options={types}
            />
            <div className='mt-lg labelQuestion'>Question</div>
            <Input className='mt-sm p-15' placeholder="Type here" onChange={(e) => setData({...data,question: e.target.value})} />
            

            <Checkbox checked={data.disqualify} onChange={onChange} className='mt-lg checkDisqua'>Disqualify candidate if the answer is no</Checkbox>

            <div className='mt-vlg flex-row-space-between'>
                <Button onClick={() => props.delete(props.data.id)} className='pl-0 deleteBtn' type='link' danger icon={<CloseOutlined />}> Delete question </Button>
                <Button onClick={() => props.save(props.dataWh, props.data.id, data)} className='saveBtn' type="primary">
                    Save
                </Button>
            </div>
        </>    
        // </MyCard>
    )
}
export default EditYesNo;