import React, { useEffect, useState } from 'react';
import { Select, Button, Input } from 'antd';
import { v4 as uuid } from 'uuid';
import { types } from '../../util/global';
import MyCard from '../Dashboard/MyCard';

const MyQuestionModal = (props) => {
    const data = types
    const [displayShow, setDisplayShow] = useState(0)
    const [type, setType] = useState('')
    const [question, setQuestion] = useState('')
    useEffect(() => {
        setDisplayShow(props.show)
    },[props.show])

    const handleChange = (value) => { setType(value) }
    return(
        <>
            <div style={{display: displayShow ? 'block': 'none'}} className='modalBack'></div>
            <div style={{display: displayShow ? 'block': 'none'}} className='modalBox'>
                
                <MyCard title="Question">
                    <div className='labelType'>Type</div>
                    <Select
                        className='mt-lg'
                        defaultValue="Choose type."
                        style={{
                            width: 545,
                            height: 45
                        }}
                        onChange={handleChange}
                        options={data}
                    />
                    <Input className='mt-sm modalIn' value={question} placeholder="Question" onChange={(e) => setQuestion(e.target.value)} />
                    <div className='mt-lg flex-row-space-between'>
                        <Button onClick={() => {
                            props.disable(); 
                            props.action(props.part, {
                                    choices: [],
                                    disqualify: false,
                                    id : uuid(),
                                    maxChoice: 0,
                                    other: false,
                                    question: question,
                                    type: type
                            }); setQuestion('')}} type="primary">
                            Save
                        </Button>
                        <Button onClick={() => {props.disable(); setQuestion('')}} type="primary">
                            Cancel
                        </Button>
                    </div>
                </MyCard>
            </div>
        </>
    )
}

export default MyQuestionModal;