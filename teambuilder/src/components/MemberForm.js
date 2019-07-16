import React, { useState } from 'react';
import styled from 'styled-components';
const FormContainer = styled.div``;
const Form = styled.form``;
const Input = styled.input``;
const Submit = styled.button``;
export default function MemberForm () {
    const [inputValue, setInputValue] = useState({name: "", email: "", job:""});
    //const [emailValue, setEmailValue] = useState("");
    //const [jobValue, setJobValue] = useState("");

    const changeNameHandler = event => {
        setInputValue({ ...inputValue, name: event.target.value});
    };
    const changeEmailHandler = event => {
        setInputValue({ ...inputValue, email: event.target.value});
    };
    const changeJobHandler = event => {
        setInputValue({ ...inputValue, job: event.target.value});
    };
    const handleSubmit = event => {
        event.preventDefault();
        console.log(inputValue.name);
        console.log(inputValue.email);
        console.log(inputValue.job);
    }
    return(
        <FormContainer>
            <Form onSubmit={event=> handleSubmit(event)}>
                <Input placeholder="Name" onChange={event => changeNameHandler(event)}/>
                <Input type="email" placeholder="Email" onChange={event => changeEmailHandler(event)} />
                <Input placeholder="Job" onChange={event => changeJobHandler(event)}/>
                <Submit>Submit</Submit>
            </Form>
        </FormContainer>
    );
}