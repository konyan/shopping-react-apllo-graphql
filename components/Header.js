import React from 'react'
import Link from 'next/link'
import Nav from './Nav'

const Header = () => {
    return (
        <div>
            <div className="bar">
                <Link href="">Sick Fits</Link>
                <Nav />
            </div>
            <div className="sub-bar">
                <Link href="">Search</Link>
            </div>
            <div>Cart</div>
        </div>
    )
}

export default Header
