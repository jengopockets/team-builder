import React from 'react';
import TeamMember from './TeamMember';

export default function Team (props) {
    console.log(props.members)
    return(
        <div>
            {props.members.map(teamMember => (
                <TeamMember teamMember={teamMember} setUpdate={props.setUpdate} setIsUpdating={props.setIsUpdating}/>
            ))}
        </div>
    );
}