import React, { useEffect, useState } from 'react'
import HeaderBg from './headerBg'
import { Link, animateScroll as scroll } from "react-scroll";
import { useDispatch, useSelector } from 'react-redux';

function Header() {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    
    const [dayNight, setDayNight] = useState(true)
    const [dropDown, setDropDown] = useState(false)
    const [lang, setLang] = useState(state.languages)
    const [styles, setStyles] = useState({})
    const [description, setDescription] = useState(state.ru.header.headerTop)
    const [burgerClick, setBurgerClick] = useState(false)

    useEffect(() => {
        if (state.languages == 'ru') {
            setDescription(state.ru.header.headerTop)
        }else{
            setDescription(state.en.header.headerTop)
        }

        if (state.languages != lang) {
            dispatch({type: 'changeLang', value: lang})
        }
        if (state.light != dayNight) {
            dispatch({type: 'changeLight', value: dayNight})
        }

        if (!dayNight) {
            setStyles({
                headerTopBg: {background:'#191323c4'},
                langBtn: {
                    background: '#fff',
                    color: '#191323'
                },
                controllBg: {
                    background: '#fff'
                },
                controllCircle: {background:'#191323'}
            })
        }else{
            setStyles({
                headerTopBg: {background:'#4c3a38c4'},
                langBtn: {
                    background: '#EEDEAA',
                    color: '#4c3a38'
                },
                controllBg: {
                    background: '#EEDEAA'
                },
                controllCircle: {background:'#4c3a38'}
            })
        }
    }, [dayNight, lang, state.languages])

    return (
        <header id='header' className='header' >
            <div className="header__top" style={styles.headerTopBg}>
                <div className='container'>
                    <div className='header__top__cont'>
                        <div className="header__logo"><a href='#'>Bekas</a></div>

                        <div onClick={()=>setBurgerClick(val => !val)} class={`hamburger hamburger--collapse ${burgerClick?'is-active':''}`}>
                            <div class="hamburger-box">
                            <div class="hamburger-inner"></div>
                            </div>
                        </div>
        
                        <nav className="header__top__list">
                            <Link 
                                to="header"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}
                                className="header__top__link underline">
                                {description[0]}
                            </Link>
                            <Link 
                                to="aboutMe"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500} 
                                className="header__top__link underline">
                                {description[1]}
                            </Link>
                            <Link 
                                to="skills" 
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500} 
                                className="header__top__link underline">
                                {description[2]}
                            </Link>
                            <Link 
                                to="achievements" 
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500} 
                                className="header__top__link underline">
                                {description[3]}
                            </Link>
                            <Link 
                                to="projects" 
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500} 
                                className="header__top__link underline">
                                {description[4]}
                            </Link>
                            <Link 
                                to="contacts" 
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500} 
                                className="header__top__link underline">
                                {description[5]}
                            </Link>
                        </nav>

                        <div className="header__controll">
                            <div className="dayNight" style={styles.controllBg}>
                                <button
                                    style={styles.controllCircle}
                                    onClick={() => setDayNight(val => !val)} 
                                    className={`dayNight-btn ${dayNight?'dayNight-btn-active':''}`}></button>
                            </div>

                            <div className="laguages">
                                <button 
                                    style={styles.langBtn}
                                    className='langChoose' 
                                    onClick={() => setDropDown(val => !val)}>
                                        {lang}
                                    </button>
                                <ul 
                                    className="langDropedown" 
                                    style={dropDown?{top: '8px', visibility: 'visible'}: {top: '-100px', visibility: 'hidden'}}>
                                    <li 
                                        style={styles.langBtn}
                                        className='langDropedown__item' 
                                        onClick={() => setLang('ru')}>ru</li>
                                    <li 
                                        style={styles.langBtn}
                                        className='langDropedown__item'
                                        onClick={() => setLang('en')}>en</li>
                                </ul>
                            </div>

                        </div>
                        
                    </div>
                </div>
            </div>

            <HeaderBg/>
        </header>
    )
}

export default Header
