import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
const FormContainer = styled.div``;
const Form = styled.form``;
const Input = styled.input``;
const Submit = styled.button``;
let idCount =() => {
    let id = 0;
    return function upCount() {
        return id++
    }
}
const upId = idCount();

export default function MemberForm (props) {
    const [inputValue, setInputValue] = useState({
        name:'',
        email:'',
        job:'',
    });
    useEffect(() => {
        setInputValue(props.update);
      }, [props.update]);
    

    const changeHandler = event => {
        setInputValue({ ...inputValue, [event.target.name]: event.target.value});
    };
    const handleSubmit = event => {
        event.preventDefault();
        if (!props.isUpdating){
            props.setMembers([...props.members, {...inputValue, id: upId()}])
            props.setIsUpdating(false)
            setInputValue({
                name: "",
            email: "", 
            job: ""
            })
        } else if (props.isUpdating) {
            const updatedList = props.members.filter(member => member.id !== inputValue.id)
            updatedList.push(inputValue)
            props.setMembers(updatedList)
        }
        
    };
    return(
        <FormContainer>
            <Form onSubmit={handleSubmit}>
                <Input type="text"placeholder="Name" onChange={changeHandler} name='name' value ={inputValue.name}/>
                <Input type="email" placeholder="Email" onChange={changeHandler} name="email" value ={inputValue.email} />
                <Input placeholder="Job" onChange={changeHandler} name="job" value ={inputValue.job}/>
                <Submit type='submit'>{props.isUpdating ? 'Update Team Member' : 'Add to Team'}</Submit>
            </Form>
        </FormContainer>
    );
}