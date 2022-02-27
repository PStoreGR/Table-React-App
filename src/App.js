import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Form, Table, Row } from 'react-bootstrap';
import avatar from './images/avatar.svg'; 
import questionmark from './images/questionmark.svg';
import { useSelector, useDispatch } from 'react-redux';
import { showContacts } from './features/Contacts';
import axios from 'axios';

function App(){   
    const dispatch = useDispatch();
    const [users, setUsers] = useState([]);

    useEffect(() => {
      const fetchUsers = async () => {
        const responce = await axios.get('https://efthymios.users.challenge.dev.monospacelabs.com/users');
        setUsers(responce.data);
      }

      fetchUsers();
    }, [])

    dispatch(showContacts(users));

    const user = useSelector((state) => state.user.value);
  
    return (
      <div style={{ marginTop: '10rem', marginLeft: '7rem',  alignItems: 'center' }}>

        <Container fluid={true}>
          <Row className="justify-content-md-center"
          style={{left: '111px', right: '207px', width: '1678px', height: '32px' }}>
            <Col sm={true}
            style={{
              height: '22px',
              width: '51px',
              color: '#22242A',
              fontFamily: 'Montserrat',
              size: '18px',
              letter: 'normal',
              align: 'left',
              fontWeight: '500',
              letterSpacing: '0',
              lineHeight: '22px',
              left: '155px',
              top: '212px',
              color: '#39628D'        
            }}>
              <img src={avatar} style={{ 
              left:'110.5px',
              right:'206.5px',
              width:'32.48px',
              height:'32.48px',
              border: 'solid 2px',
              borderRadius: '2rem',
              color: '#22242A',
              position: 'center',
            }}/> Users</Col>
            <Col sm={true}></Col>
            <Col sm={true}></Col>
            <Col sm={true}></Col>
            <Col 
            style={{
              height: '15px',
              width: '62px',
              color: '#808080',
              fontFamily: 'Montserrat',
              fontSize: '12px',
              fontWeight: '500',
              letterSpacing: '0',
              lineHeight: '15px',
              textAlign: 'right',
              color: '#39628D'          
            }}>2 selected&nbsp;  <img src={questionmark}/></Col>        
          </Row>
        </Container>

        <Table striped bordered hover onLoad={ () => {dispatch(showContacts(users)); }}
        style={{ top: '255px', bottom: '207px', left: '99px', right: '255px', width: '1722px', height: '618px'}}>
          <thead>
            <tr>
              <th style={{ left: '155px', right: '277px', width: '34px', height: '50px' }}>
                <Form.Check disabled={true}/>             
              </th>
              <th style={{ left: '155px', right: '277px', width: '34px', height: '50px', color: '#39628D'}}>TYPE</th>
              <th style={{ left: '369px', right: '277px', width: '119px', height: '50px', color: '#39628D'}}>NAME</th>
              <th style={{ left: '668px', right: '277px', width: '215px', height: '50px', color: '#39628D'}}>EMAIL</th>
              <th style={{ left: '1063px', right: '277px', width: '118px', height: '50px', color: '#39628D'}}>TELEPHONE</th>
              <th style={{ left: '1741px', right: '277px', width: '48px', height: '50px', color: '#39628D'}}>STATUS</th>
            </tr>
          </thead>
          <tbody>              
              {user.map((user) => 
                <tr>
                  <td
                  style={{ left: '155px', right: '277px', width: '34px', height: '50px' }}
                  ><Form.Check disabled={user.active? true: false}/></td>
                  <td style={{ color: '#39628D' }}>{user.type}</td>
                  <td style={{ color: '#39628D' }}>{user.name}</td>
                  <td style={{ color: '#39628D' }}>{user.email}</td>
                  <td style={{ color: '#39628D' }}>{user.phone}</td>
                  <td style={{ color: '#39628D' }}><Form.Switch disabled={user.active? true: false}/></td>
                </tr>
              )}           
          </tbody>
        </Table>
      </div>
    );
  }

export default App;