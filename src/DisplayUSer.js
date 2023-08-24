import axios from 'axios';
import React, { useState, useEffect } from 'react';

const DisplayUser = () =>
{
    const [users, setUsers] = useState( [] );



    const getData = async () =>
    {
        try
        {
            const usersResponse = await axios.get( "https://reqres.in/api/users?page=1" );
            setUsers( usersResponse.data.data );
        } catch ( error )
        {
            console.error( "Error fetching user data:", error );
        }
    };

    return (
        <>
            <h1 className='text-center'> Heartily welcome to all </h1>
            <div className='getuser-btn'>
                <button className='btn btn-primary' onClick={ getData }>Get User</button>
            </div>
            <div className="user-cards d-flex flex-row flex-wrap col-md-9   justify-content-center w-100 ">
                { users.map( ( userData ) => (
                    <div className="card m-3 shadow " style={ { width: "18rem" } } key={ userData.id }>
                        <div className="card-body">
                            <h5 className="card-title">User id: { userData.id }</h5>
                            <h6 className="card-subtitle mb-2">Name: { userData.first_name } { userData.last_name }</h6>
                            <img src={ userData.avatar } alt={ `Avatar of ${ userData.first_name }` } className="card-img-top" />
                        </div>
                    </div>
                ) ) }
            </div>
        </>
    );
};

export default DisplayUser;
