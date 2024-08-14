// ClubList.js
import React from 'react';
import styled from 'styled-components';
import ClubForm from './ClubForm';

const ListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
`;

const ClubCard = styled.div`
    background-color: #1F1F1F;
    padding: 20px;
    border-radius: 8px;
    width: calc(33.333% - 20px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #F5E8DC;
`;

const CardContent = styled.div`
    flex: 1;
`;

const CardActions = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    button {
        padding: 10px;
        border: none;
        border-radius: 4px;
        cursor: pointer;

        &.edit {
            background-color: #F2613F;
            color: #F5E8DC;

            &:hover {
                background-color: #D9534F;
            }
        }

        &.delete {
            background-color: #D9534F;
            color: #F5E8DC;

            &:hover {
                background-color: #C9302C;
            }
        }
    }
`;

const AddCard = styled.div`
    background-color: #F2613F;
    padding: 20px;
    border-radius: 8px;
    width: calc(33.333% - 20px);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #F5E8DC;

    &:hover {
        background-color: #D9534F;
    }
`;

const FormCard = styled(ClubCard)`
    padding: 0;
`;

const ClubList = ({ clubs, setCurrentClub, deleteClub, addClub, currentClub }) => {
    const handleAddClub = () => {
        setCurrentClub({ id: null, name: '', description: '' });
    };

    return (
        <ListWrapper>
            {clubs.map((club) => (
                <ClubCard key={club.id}>
                    <CardContent>
                        <h4>{club.name}</h4>
                        <p>{club.description}</p>
                    </CardContent>
                    <CardActions>
                        <button 
                            className="edit" 
                            onClick={() => setCurrentClub(club)}
                        >
                            Edit
                        </button>
                        <button 
                            className="delete" 
                            onClick={() => deleteClub(club.id)}
                        >
                            Delete
                        </button>
                    </CardActions>
                </ClubCard>
            ))}
            {currentClub === null ? (
                <AddCard onClick={handleAddClub}>
                    <h4>+ Add Club</h4>
                </AddCard>
            ) : (
                <FormCard>
                    <ClubForm
                        onSubmit={addClub}
                        currentClub={currentClub}
                        setCurrentClub={setCurrentClub}
                    />
                </FormCard>
            )}
        </ListWrapper>
    );
};

export default ClubList;
