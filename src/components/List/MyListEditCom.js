import React, { useState } from 'react';
import { Button } from 'antd';
import {
    EditOutlined,
} from '@ant-design/icons';
import EditDropDown from '../Edit/EditDropDown';
import EditParagraph from '../Edit/EditParagraph';
import EditMultiChoice from '../Edit/EditMultiChoice';
import EditYesNo from '../Edit/EditYesNo';
import EditVideo from '../Edit/EditVideo';

const MyListEditCom = (props) => {
    const [editShow, setEditShow] = useState(false)
    const renderPart = () => {
        if(editShow){
            if(props.data.type == 'Paragraph')
                return(
                    <EditParagraph dataWh={props.dataWh} data={props.data} save={(wh,id,data) => props.edit(wh,id,data)} delete={(id) => props.delete(id)} />
                )
            if(props.data.type == 'Dropdown')
                return (
                    <EditDropDown dataWh={props.dataWh} data={props.data} save={(wh,id,data) => props.edit(wh,id,data)} delete={(id) => props.delete(id)} />
                )
            if(props.data.type == 'Multiple choice')
                return(
                    <EditMultiChoice dataWh={props.dataWh} data={props.data} save={(wh,id,data) => props.edit(wh,id,data)} delete={(id) => props.delete(id)} />
                )
            if(props.data.type == "Yes/No")
                return(
                    <EditYesNo dataWh={props.dataWh} data={props.data} save={(wh,id,data) => props.edit(wh,id,data)} delete={(id) => props.delete(id)} />
                )
            if(props.data.type == "Video question")
                return(
                    <EditVideo dataWh={props.dataWh} data={props.data} save={(wh,id,data) => props.edit(wh,id,data)} delete={(id) => props.delete(id)} />
                )
            else
                return (
                    <EditDropDown dataWh={props.dataWh} data={props.data} save={(wh,id,data) => props.edit(wh,id,data)} delete={(id) => props.delete(id)} />
                )
        }
    }
    return(
        <div className='full-width'>
            <div className='listtype' >{props.data.type}</div>
            <div className='flex-row-space-between'>
                <div className='listquestion'>{props.data.question}</div>
                <Button onClick={() => setEditShow(prev => !prev)} type="link" icon={<EditOutlined />}>
                </Button> 
            </div>

            {
                renderPart()
            }
        </div>
    )
}

export default MyListEditCom;