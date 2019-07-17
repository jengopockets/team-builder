import React from 'react';

function TeamMember(props)  {
    const clicker =() => {
        props.setUpdate(props.members)
        props.setIsUpdating(true)
    }
    return(
        <div>
            <h2>Name:{props.teamMember.name}</h2>
            <h3>Email:{props.teamMember.email}</h3>
            <h4>Job:{props.teamMember.job}</h4>
            <buton onClick={clicker}>Update</buton>
        </div>
    );
};
export default TeamMember