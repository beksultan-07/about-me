import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


function Contacts() {
    const state = useSelector(state => state)
    
    const [description, setDescription] = useState(state.ru.contacts)
    const [styles, setStyles] = useState({})

    useEffect(() => {
        if (state.languages == 'ru') {
            setDescription(state.ru.contacts)
        }else{
            setDescription(state.en.contacts)
        }
        if (state.light) {
            setStyles({
                color: '#0011ff',
                transition: '.4s'
            })
        }else{
            setStyles({
                color: '#0bbaff',
                transition: '.4s'
            })
        }
    }, [state.languages, state.light])

    return (
        <div id='cоntacts' className='contacts'>
            <div className="container">
                <h1 className="title contacts__title">
                    {description.title}
                </h1>

                <ul className="contacts__list">
                    {description.data.map((item, index) => {
                        if (item[0] == 'number') {
                            return <li className="contacts__item">
                                <span className='contacts__item__title'>{item[0]}  </span>
                                <span  className="contacts__item__link">{item[1]}</span>
                            </li>
                        }
                        return (
                            <li className="contacts__item">
                                <span className='contacts__item__title'>{item[0]}  </span>
                                <a 
                                style={styles}
                                href={item[1]} 
                                className="contacts__item__link">{item[1]}</a>
                            </li>
                        )
                    })}
                </ul>

            </div>
        </div>
    )
}

export default Contacts
