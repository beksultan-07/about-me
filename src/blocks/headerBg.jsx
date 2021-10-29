import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import lBg from '../assets/bgSky.jpg'
import dBg from '../assets/bgStarSky2.jpg'


function HeaderBg() {
    const state = useSelector(state => state)
    
    const [description, setDescription] = useState(state.ru.header.headerBg)
    const [bg, setBg] = useState()

    useEffect(() => {
        if (state.languages == 'ru') {
            setDescription(state.ru.header.headerBg)
        }else{
            setDescription(state.en.header.headerBg)
        }

        (state.light)?setBg(lBg):setBg(dBg)
    }, [state.languages, state.light])


    return (
        <div className='header__bg' style={{background: `url(${bg}) 0 0 /cover`}}>
            <div className="container">
                <div className="header__bg__textWrap">
                    <h3 className='header__bg__title'>
                        {description.title}
                    </h3>
                    <p className="header__bg__text">
                        {description.text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeaderBg
