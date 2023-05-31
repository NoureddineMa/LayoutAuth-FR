import React from 'react'
import Background from '../Assets/Images/Background.jpg'
import { Outlet } from 'react-router-dom'


function AuthLayout() {
    return (
        <>
            <div className='flex flex-row-reverse w-full h-screen' >
            <div
                className=' lg:flex h-full w-2/3 items-center justify-center relative' style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', }}>
            </div>
            <div className='w-full flex  justify-center lg:w-1/3' style={{ marginTop: '152px' }}>
                <Outlet />
            </div>
            </div>
        </>
    )
}
export default AuthLayout