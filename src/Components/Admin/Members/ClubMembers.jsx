import React from 'react';
import styled from 'styled-components';

const ClubMembersWrapper = styled.div`
    background-color: #1F1F1F;
    padding: 20px;
    border-radius: 8px;
    color: #F5E8DC;
`;

const MemberCard = styled.div`
    margin-bottom: 15px;
    padding: 10px;
    background-color: #2E2E2E;
    border-radius: 8px;
`;

const MemberName = styled.h3`
    margin: 0;
    color: #F2613F;
`;

const ClubMembers = ({ members }) => {
    return (
        <ClubMembersWrapper>
            {members.length > 0 ? (
                members.map(member => (
                    <MemberCard key={member.id}>
                        <MemberName>{member.fullName}</MemberName>
                        <p>Email: {member.email}</p>
                        <p>Student ID: {member.studentId}</p>
                        <p>Department: {member.department}</p>
                        <p>Year of Study: {member.yearOfStudy}</p>
                        <p>Club: {member.clubName}</p>
                    </MemberCard>
                ))
            ) : (
                <p>No members found.</p>
            )}
        </ClubMembersWrapper>
    );
};

export default ClubMembers;
