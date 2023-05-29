import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import './AuthPage.css'
const Signup = () => {
    return (
        <div className='authpage'>
            <Navbar reloadnavbar={false}/>

            <div className='authcont'>
                <img src={require('../../ASSETS/sign.jpg')}
                    alt='signup' />

                <form className='authform'>
                    <h1>Signup</h1>
                    <div className='form-group-row'>
                        <div className='formgroup'>
                            {/* <label htmlFor='fname'>First Name</label> */}
                            <input type='text' id='fname' placeholder='First Name' />
                        </div>
                        <div className='formgroup'>
                            {/* <label htmlFor='lname'>Last Name</label> */}
                            <input type='text' id='lname' placeholder='last Name' />
                        </div>
                    </div>
                    <div className='formgroup'>
                        {/* <label htmlFor='email'>Email</label> */}
                        <input type='email' id='email' placeholder='Email' />
                    </div>

                    <div className='form-group-row'>
                        <div className='formgroup'>
                            {/* <label htmlFor='password'>Password</label> */}
                            <input type='password' id='password'  placeholder='Password'/>
                        </div>
                        <div className='formgroup'>
                        {/* <label htmlFor='cpassword'>Confirm Password</label> */}
                        <input type='password' id='cpassword'  placeholder='Confirm Password'/>
                    </div>
                    </div>

                    <Link to='/login'
                        className='stylenone'
                    >
                        <p>Already have an account?</p>
                    </Link>
                    <Link to='/login'
                        className='stylenone'
                    >
                        <button className='btn'>Signup</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Signup