import React, { useState } from 'react';
import { Button, Input, Select, Checkbox } from 'antd';
import {
    CloseOutlined,
    UnorderedListOutlined,
    PlusOutlined
} from '@ant-design/icons';
import { types } from '../../util/global';

const EditMultiChoice = (props) => {
    const [data, setData] = useState(props.data)
    const [tmpChoice, setTmpChoice] = useState('')
    const handleChange = (value) => {setData({...data, type: value})}
    const onChange = (e) => {setData({...data, other: e.target.checked})}
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
            <div className='mt-lg labelChoice pl-32'>Choice</div>
            <div className='mt-sm flex-row-start'>
                <div className='flex-column-center'>
                    <Button icon={<UnorderedListOutlined />} type='link' />
                </div>
                <Input className='p-13' placeholder="Type here" />
                <div className='flex-column-center'>
                    <Button icon={<PlusOutlined />} type='link' onClick={() => { 
                        if(tmpChoice == '') return;
                        let tmp = data.choices;
                        tmp.push(tmpChoice);
                        setData({...data, choices: tmp})
                    }} />
                </div>
            </div>

            <Checkbox checked={data.other} onChange={onChange} className='mt-lg labelOther'>Enable "Other" option</Checkbox>
            <div className='mt-lg labelMax'>Max choice allowed</div>
            <Input onChange={(e) => setData({...data, maxChoice: e.target.value})} className='mt-sm p-15' placeholder="Enter number of choice allowed here" />

            <div className='mt-sm flex-row-space-between'>
                <Button onClick={() => props.delete(props.data.id)} className='pl-0 deleteBtn' type='link' danger icon={<CloseOutlined />}> Delete question </Button>
                <Button className='saveBtn' onClick={() => props.save(props.dataWh, props.data.id, data)} type="primary">
                    Save
                </Button>
            </div>
        </>
        // {/* </MyCard> */}
    )
}
export default EditMultiChoice;