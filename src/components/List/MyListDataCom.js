import React, {useEffect, useState} from 'react'
import { Checkbox, Switch } from 'antd';
import MyListEditCom from './MyListEditCom';

const MyListDataCom = (props) => {
    const [show, setShow] = useState(0);
    useEffect(() => {
        props.data.type.search('Question') == -1 ? setShow(props.data.switch.check) : setShow(0)
    },[])
    return (
        <>
            {
                props.data.type.search('Question') == -1 ? (
                    <div className='flex-row-space-between'>
                        <div className='ttype'>{props.data.type}</div>
                        <Checkbox className='checktitle' checked={props.data.check.check} >{props.data.check.title}</Checkbox>
                        <Switch onChange={() => setShow(prev => !prev)} checked={!show}></Switch>
                        <div className='switchtitle'>{show ? 'show' : 'hide'}</div>
                    </div>
                ) : (
                    <>
                    {
                        props.data.data.map(item => <MyListEditCom dataWh={props.data.type} edit={(wh,id,data) => props.edit(wh,id,data)} delete={(id) => props.delete(id)} data={item} key={item.id} /> )
                    }
                    </>
                )
            }
            
        </>
    )
}
export default MyListDataCom;
