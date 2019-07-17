import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Form from './components/MemberForm';
import Team from './components/Team';
import './App.css';
const Container = styled.div ``;

function App() {
  const [ members, setMembers ] = useState([])
  const [update, setUpdate] = useState({})
  const [isUpdating, setIsUpdating] = useState(false)

  return (
    <Container>
      <Team members={members} setUpdate={setUpdate} setIsUpdating={setIsUpdating}/>
      <Form setMembers={setMembers} members={members} update={update} isUpdating={isUpdating} setIsUpdating={setIsUpdating}/>
    </Container>
  );
}

export default App;
