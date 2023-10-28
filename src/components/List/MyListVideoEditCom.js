import React, { useState } from 'react';
import { Button, Input, Select } from 'antd';
import {
    EditOutlined,
    CloseOutlined,
} from '@ant-design/icons';


const { TextArea } = Input;

const MyListVideoEditCom = (props) => {
    const [editShow, setEditShow] = useState(false)

    const handleChange = () => {}
    return(
        <>
            <div className='listtype'>{props.data.type}</div>
            <div className='flex-row-space-between'>
                <div className='listquestion'>{props.data.description}</div>
                <Button onClick={() => setEditShow(prev => !prev)} type="link" icon={<EditOutlined />}>
                </Button> 
            </div>

            {
                editShow && (
                    <>
                        <div className='mt-lg labelQuestion'>Question</div>
                        <Input className='mt-sm p-15' placeholder="Q: Tell us about yourself?" />
                        <TextArea className='mt-sm' rows={4} placeholder='Please talk about your achievements,goals and what you worked on as the latest project'/>
                        <div className='mt-lg flex-row-start'>
                            <Input placeholder="Max duration of video" />
                            <Select
                                defaultValue="in (sec/min)"
                                style={{
                                    width: 400,
                                    height: 50,
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: 'in (sec/min)',
                                        label: 'in (sec/min)'
                                    }
                                ]}
                            />
                        </div>
                        <div className='mt-sm flex-row-space-between'>
                            <Button className='deleteBtn' onClick={props.delete} type='link' danger icon={<CloseOutlined />}> Delete question </Button>
                            <Button className='saveBtn' onClick={props.save} type="primary">
                                Save
                            </Button>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default MyListVideoEditCom;