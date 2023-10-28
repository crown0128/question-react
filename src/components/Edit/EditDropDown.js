import React, { useState } from 'react';
import { Button, Input, Select } from 'antd';
import {
    CloseOutlined,
    UnorderedListOutlined,
    PlusOutlined
} from '@ant-design/icons';

import { types } from '../../util/global';

const EditDropDown = (props) => {
    const [data, setData] = useState(props.data)
    const [tmpChoice, setTmpChoice] = useState('')
    const handleChange = (value) => {setData({...data, type: value})}
    return (
        <>
            <div className='mt-lg labelType'>Type</div>
            <Select
                className='mt-lg'
                defaultValue= {props.data.type}
                style={{
                    width: 545,
                    height: 45
                }}
                onChange={handleChange}
                options={types}
            />
            <div className='mt-lg labelQuestion'>Question</div>
            <Input className='mt-sm p-15' placeholder="Type here" onChange={(e) => setData({...data,question: e.target.value})} />
            <div className='mt-lg pl-32 labelChoice'>Choice</div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'start'}} className='mt-sm'>
                <div style={{}}>
                    <Button icon={<UnorderedListOutlined />} type='link' />
                </div>
                <Input className='mt-sm p-13' placeholder="Type here" onChange={(e) => setTmpChoice(e.target.value)} />
                <div className='flex-column-center'>
                    <Button icon={<PlusOutlined />} onClick={() => { 
                        if(tmpChoice == '') return;
                        let tmp = data.choices;
                        tmp.push(tmpChoice);
                        setData({...data, choices: tmp})
                    }} type='link' />
                </div>
            </div>
            <div className='mt-sm flex-row-space-between'>
                <Button className='deleteBtn' onClick={() => props.delete(props.data.id)} type='link' danger icon={<CloseOutlined />}> Delete question </Button>
                <Button className='saveBtn' onClick={() => props.save(props.dataWh, props.data.id, data) } type="primary">
                    Save
                </Button>
            </div>
        </>
    )
}
export default EditDropDown;