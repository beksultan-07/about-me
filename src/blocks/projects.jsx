import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';


function Projects() {
    const state = useSelector(state => state)
    
    const [description, setDescription] = useState(state.ru.projects)

    useEffect(() => {
        if (state.languages == 'ru') {
            setDescription(state.ru.projects)
        }else{
            setDescription(state.en.projects)
        }
    }, [state.languages])

    return (
        <div id='projects' className='projects'>
            <div className="container">
                <h1 className="title projects__title">
                    {description.title}
                </h1>

                <p className="text projects__text">
                    {description.text}
                </p>

            </div>
        </div>
    )
}

export default Projects
