import React from 'react'

interface IUserList {
    id:number;
    name:string;
    userName: string;
    email:string;
    address:{
        street:string,
        suite:string,
        city:string,
        zipcode:string,
        geo:{
            lat:string,
            lng: string
        },
    };
    phone:string;
    website:string;
    company:{
        name:string,
        catchPhrase:string,
        bs:string
    };
}

const UsersPage = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const userList: IUserList[] = await res.json();  
        
        return (
            <>
                <h1>Users:</h1>
                <ul>
                    {userList.map((user: IUserList, index)=>{
                        return(
                            <>
                                <li key={user.id}>{ index+1 + ")" } {user.name}</li>
                            </>
                        )
                    })}
                </ul>
            </>
        )
    } catch (error) {
        console.error("Unable to fetch user list: ", error);
    }

    
}

export default UsersPage;
