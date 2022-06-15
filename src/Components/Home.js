import React, { useEffect } from 'react'
import { Navbar } from './Navbar';
import { Products } from './Products'
import { useNavigate as useHistory } from 'react-router-dom'
import { auth } from '../Config/Config'

export const Home = ({ user }) => {

    const history = useHistory();

    useEffect(() => {
        // forcing user to signup
        auth.onAuthStateChanged(user => {
            if (!user) {
                history('/login');
            }
        })
    })

    return (
        <div className='wrapper'>
            <Navbar user={user} />
            <Products />
        </div>
    )
}
