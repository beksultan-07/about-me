import React,{useState, useEffect} from 'react'
import { useSelector } from 'react-redux';

import linkedin from '../assets/linkedin.png'
import insta from '../assets/instagram.png'
import github from '../assets/github.png'

export default function Footer() {
    const state = useSelector(state => state)
  
    const [styles, setStyles] = useState()

    useEffect(() => {
        if (state.light) {
            setStyles({
                background: '#4c3a38'
            })
        }else{
            setStyles({
                background: '#191323c4'
            })
        } 
    }, [state.light])

    return (
        <div className='footer' style={styles}>
            <div className="container">
                <div className="footer__wrap">
                    <a href='https://www.instagram.com/obbbbbby_21/'>
                        <img src={insta} alt="" className="footer__icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/bakytov-beksultan/">
                        <img src={linkedin} alt="" className="footer__icon" />
                    </a>
                    <a href="https:/github.com/beksultan-07">
                        <img src={github} alt="" className="footer__icon" />
                    </a>

                </div>
            </div>
        </div>
    )
}

