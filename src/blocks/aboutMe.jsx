import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function AboutMe() {
    const state = useSelector(state => state)
    const [description, setDescription] = useState(state.ru.aboutMe)

    useEffect(() => {
        if (state.languages == 'ru') {
            setDescription(state.ru.aboutMe)
        }else{
            setDescription(state.en.aboutMe)

        }
    }, [state.languages])

    return (
        <div id='aboutMe' className='aboutMe'>
            <div className="container">
                <h1 className="title aboutMe__title">
                    {description.title}
                </h1>
                <p className="text aboutMe__text">
                    {description.text.map((el, index) => {
                        if (index == 1) {
                            return (<>{el}<brs/></>)              
                        }
                        return (<>{el}<br/><br/></>)              
                    })}
                </p>
            </div>
        </div>
    )
}

export default AboutMe
