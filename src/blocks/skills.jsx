import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Skills() {
    const state = useSelector(state => state)
    
    const [description, setDescription] = useState(state.ru.skills)

    useEffect(() => {
        if (state.languages == 'ru') {
            setDescription(state.ru.skills)
        }else{
            setDescription(state.en.skills)
        }
    }, [state.languages])


    return (
        <div id='skills' className='skills'>
            <div className="container">
                <h1 className="title skills__title">
                    {description.title}
                </h1>
                <ul className="skills__list">
                    {description.allSkills.map((item, index) => {
                        return (
                            <li 
                            key={index}
                            className="skills__item">
                                {item}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Skills
