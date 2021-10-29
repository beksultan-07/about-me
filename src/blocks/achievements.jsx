import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ach1 from '../assets/ach1.jpg'
import ach2 from '../assets/ach2.jpg'


function Achievements() {
    const state = useSelector(state => state)
    
    const [description, setDescription] = useState(state.ru.ach)

    useEffect(() => {
        if (state.languages == 'ru') {
            setDescription(state.ru.ach)
        }else{
            setDescription(state.en.ach)
        }
    }, [state.languages])

    return (
        <div id='achievements' className='achievements'>
           <div className='container'>
                <h1 className="title achievements__title">
                    {description.title}
                </h1>

                <ul className='achievements__list'>
                    {description.dec.map((item, index) => {
                        return (
                            <li className="achievements__item" key={index}>
                                <div className='achievements__item__desc'>
                                    <h3 className="achievements__item__title">
                                        {item.title}
                                    </h3>
                                    <p className="achievements__item__text">
                                        {item.text}
                                    </p>
                                </div>
                                <div className='achievements__item__img__wrap'><img src={item.img} alt="" className="achievements__item__img" /></div>
                            </li>
                        )
                    })}
                </ul>
           </div>
        </div>
    )
}

export default Achievements
