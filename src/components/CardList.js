import React from 'react';
import Card from './Card.js';

const CardList = ({ robots }) => {
    return (
        <div>
        {
            robots.map((user, index) => {
                return (
                    <Card 
                        id={robots[index].id} 
                        username={robots[index].username}
                        name={robots[index].name} 
                        email={robots[index].email} 
                        key={robots[index].id} 
                    />
                );
            })
        }
        </div>
    );
}

export default CardList;