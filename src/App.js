import './App.css';
import axios from 'axios';
import Dashboard from './components/Dashboard/Layout';
import MyCard from './components/Dashboard/MyCard';
import MyUpload from './components/Com/MyUpload';
import MyList from './components/List/MyList';
import MyListDataCom from './components/List/MyListDataCom';
import MyListEditCom from './components/List/MyListEditCom';
import MyQuestionModal from './components/Modal/MyQuestionModal';
import { useEffect, useState } from 'react';
import EditParagraph from './components/Edit/EditParagraph';
import EditMultiChoice from './components/Edit/EditMultiChoice';
import EditYesNo from './components/Edit/EditYesNo';
import EditVideo from './components/Edit/EditVideo';
import { test, testAddition } from './util/global';
import Step from './components/Com/Step';

function App() {
  const dataAdditional = testAddition
       
  const [personData, setPersonData] = useState([]);
  const [profileData, setProfileData] = useState([]);

  const [modalShow , setModalShow] = useState(0);
  const [whPart, setWhPart] = useState('')

  useEffect(() => {
    axios.get('http://127.0.0.1:4010/api/468.15004720741956/programs/rerum/application-form')
         .then(res => {
            setProfileData(Object.entries(res.data.data.attributes.profile).map(item => item[0] != 'profileQuestions' ? ({
              type: item[0],
              check: {
                title: 'Mandatory',
                check: item[1].internalUse
              },
              switch: {
                check: item[1].show
              }
            }) : ({
              type: item[0],
              data: item[1]
            })))
            setPersonData(Object.entries(res.data.data.attributes.personalInformation).map(item => item[0] != 'personalQuestions' ? ({
              type: item[0],
              check: {
                title: 'Internal',
                check: item[1].internalUse
              },
              switch: {
                check: item[1].show
              }
            }) : ({
              type: item[0],
              data: item[1]
            })))
         })
  },[])

  const onModalDisable = () => {
    setModalShow(0)
  }
  const addAction = (part, data) => {
    if(part == 'personalQuestions') {
      let tmp = personData.map(item => item.type != 'personalQuestions' ? item : {
        type: item.type,
        data: [...item.data, data]
      })
      setPersonData(tmp)
    }else{
      let tmp = profileData.map(item => item.type != 'profileQuestions' ? item : {
        type: item.type,
        data: [...item.data, data]
      })
      setProfileData(tmp)
    }
  }
  const onEdit = (wh,id,data) => {
    if(wh == 'personalQuestions'){
      let tmp = personData.map(item => 
        item.type != 'personalQuestions' ? item : {
          type: item.type,
          data: item.data.map(value => value.id != id ? value : data)
        }
      )
      setPersonData(tmp);
    }
    else{
      let tmp = profileData.map(item => 
        item.type != 'profileQuestions' ? item : {
          type: item.type,
          data: item.data.map(value => value.id != id ? value : data)
        }
      )
      setProfileData(tmp);
    }
  }
  const onDelete = (id) => {

    let tmp = personData.map(item => 
      item.type != 'personalQuestions' ? item : {
        type: item.type,
        data: item.data.filter(value => value.id != id )
      }
    )
    setPersonData(tmp);
    let tmp1 = profileData.map(item => 
      item.type != 'profileQuestions' ? item : {
        type: item.type,
        data: item.data.filter(value => value.id != id)
      }
    )
    setProfileData(tmp1);
  }
  return (
    <>
      <Dashboard>
        <Step />
        <MyCard title="Upload cover image">
          <MyUpload />
        </MyCard>
        <br />
        <MyCard title="Personal Information">
          <MyList data={personData.map((item) => <MyListDataCom data={item} edit={(wh,id,data) => onEdit(wh,id,data)} delete={onDelete} />)}  onAdd={() => {setWhPart('personalQuestions');setModalShow(1)}}/>
        </MyCard>
        <br />
        <MyCard title="Profile">
          <MyList data={profileData.map((item) => <MyListDataCom data={item} edit={(wh,id,data) => onEdit(wh,id,data)} delete={onDelete} />)} onAdd={() => {setWhPart('profileQuestions');setModalShow(1)}}/>
        </MyCard>
        <br />
        <MyCard title="Additional questions">
          <MyList data={dataAdditional.map((item) => <MyListEditCom data={item} edit={() => {}} delete={() => {}} />)} onAdd={() => {setModalShow(1)}}/>
        </MyCard>
        <br />

        <MyCard title="Question">
          <EditParagraph dataWh={'personalQuestions'} data={test} save={() => {}} delete={() => {}} />
        </MyCard>
        <br />
        <MyCard title="Question">
          <EditMultiChoice dataWh={'personalQuestions'} data={test} save={() => {}} delete={() => {}} />
        </MyCard>
        
        <br />
        <MyCard title="Question">
          <EditYesNo dataWh={'personalQuestions'} data={test} save={() => {}} delete={() => {}} />
        </MyCard>
        
        <br />
        <MyCard title="Video based questions">
          <EditVideo />
        </MyCard>
        
        <MyQuestionModal disable={onModalDisable} part={whPart} show={modalShow} action={addAction} />
      </Dashboard>
    </>
  );
}

export default App;
