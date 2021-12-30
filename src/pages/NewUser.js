import React from 'react';
import { TheList } from "../styles/styled-elements"
import styled from "styled-components";

const UserForm = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const UserItem = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-right: 20px;
    label {
        margin-bottom: 10px;
        font-size: 14px;
        font-weight: 600;
        color: rgb(151, 150, 150);
    }
    input {
        height: 20px;
        padding: 10px;
        border: 1px solid gray;
        border-radius: 5px;
    }
    select{
        height: 40px;
        border-radius: 5px;
    }
`
const UserRadio = styled.div`
    input {
        margin-top: 15px;
    }
    label{
        margin: 10px;
        font-size: 18px;
        color: #555;
    }
`
const UserButton = styled.button`
    width: 200px;
    border: none;
    background-color: #1876F2;
    color: white;
    padding: 7px 10px;
    font-weight: 600;
    border-radius: 10px;
    margin-top: 30px;
    cursor: pointer;
`

const NewUser = () => {
    return (
        <TheList>
            <h1>New User</h1>
            <UserForm>
                <UserItem>
                    <label>Username</label>
                    <input type="text" placeholder="john" />
                </UserItem>
                <UserItem>
                    <label>Full Name</label>
                    <input type="text" placeholder="John Smith" />
                </UserItem>
                <UserItem>
                    <label>Email</label>
                    <input type="email" placeholder="john@gmail.com" />
                </UserItem>
                <UserItem>
                    <label>Password</label>
                    <input type="password" placeholder="password" />
                </UserItem>
                <UserItem>
                    <label>Phone</label>
                    <input type="text" placeholder="+1 123 456 78" />
                </UserItem>
                <UserItem>
                    <label>Address</label>
                    <input type="text" placeholder="New York | USA" />
                </UserItem>
                <UserItem>
                    <label>Gender</label>
                    <UserRadio>
                        <input type="radio" name="gender" id="male" value="male" />
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other" />
                        <label for="other">Other</label>
                    </UserRadio>
                </UserItem>
                <UserItem>
                    <label>Active</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </UserItem>
                <UserButton>Create</UserButton>
            </UserForm>
        </TheList>
    )
}

export default NewUser
