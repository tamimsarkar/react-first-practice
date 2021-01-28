import React from 'react';
const Main = ({user, salary}) => {
   const userStyle = {
        border: '1px solid black',
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px'
   }
    return (
        <div style={userStyle} className='user'>
            <img src={user.avatar} alt=""/>
            <div className='details'>
                <h4>{user.first_name} {user.last_name}</h4>
                <p>{user.email}</p>
                <button onClick={() => salary(user)}>Salary</button>
            </div>
        </div>
    );
};

export default Main;