import ach1 from '../assets/ach1.jpg'
import ach2 from '../assets/ach2.jpg'
import ach3 from '../assets/ach3.jpg'
import ach4 from '../assets/ach4.jpg'
import ach5 from '../assets/ach5.jpg'
import ach6 from '../assets/ach6.jpg'
import ach7 from '../assets/ach7.jpg'




const initialState = {
    languages: 'ru',
    light: true,
    colors: {
        light: ['#fff', '#EEDEAA', '#4c3a38', '#4c3a38c4'],
        dark: ['#fff', '#105E7A', '#191323', '#191323c4']
    },
    ru: {
        header: {
            headerTop :['Главная', 'О себе', 'Навыки', 'Достижения', 'Проекты', 'Контакты'],
            headerBg: {
                title: 'Добро пожаловть',
                text: 'меня зовут Бексултан и я начинающий разработчик',
            }
        },
        aboutMe: {
            title: 'О себе',
            text: ['Как вы уже знаете, меня зовут Бексултан фамилия Бакытов, 2004 года рождения и я претендую себя как фронтенд разработчик. Чтобы заинтересовать вас, представляю вам этот сайт, который сделан на react. В этой страничке буду полностью рассказывать о себе, чтоб вам было понятно какой я человек, и рассматривали меня как кандидата на работу.', 
            'В первую очередь хочу поблагодарить и упомянуть свою школу, в которой обучался и 98 лицей, которая дала мне знания в фронтенд разработке. Учился в школе гимназий по имени Нинакан Жундубаева, которая дала фундаментальные знания и возможность участвовать интересных олимпиадах. Описывая свою школу, она не маленькая, я бы сказал большая, были практически все условия. А класс мой был очень веселым, разумеется у меня были друзья, они мне хорошо помогали, помимо моих друзей прийти к выбору учиться и работать в сфере айти, были ученики с других классов, как старших так и младших, объяснить это могу тем что, я не могу понять людей, которые принимают поспешные решения судя только возрасту, согласен тем что старшие люди обладают большим опытом и познаниями в разных областях, но не исключено что они  знают всё, поэтому я не брезгал обсуждать различные теми с теми кто младше меня. Хочу еще затронуть тему про хулиганства, так как касается это каждого мальчика начиная с не определенного возраста. Говоря про моих одноклассников и моим кругом общения, к счастью у меня не было близких людей занимающейся таким родом действия.', 
            'Лицей был для меня чем-то вроде испытанием, так как по своей натуре я был и возможно являюсь интровертом. И в первое время для меня всё было в новинку, но выйти из своей зоны комфорта оказалось не так уж и сложно. Классный руководитель у меня был человеком, который обладал приятным характером, так что обучатся в лицее было не такое уж и сложное дело.', 
            'Упомянув лицей, хочу плавно перейти к хобби и чем я занимаюсь свободное время. Так вот, лицей, точнее парни которые учились, подарили мне новое хобби и развлечение как баскетбол, которая мне нравится по сей день и трачу большое количество времени изучая ее и ее историю. Но у меня хобби не ограничивается баскетболом, мне нравится слушать музыку, читать различные книги, решать задачи на различных сайтах и  рисовать, хотя я и не рисую на профессиональном уровне, но я рисую с детства, пытался учиться в кружках, но не смог, причину расскажу немного позже. Так же рисование дает мне расслабится и привести мысли в порядок.',

            'Говорят человек который близок к творчеству очень спокоен и живёт в своём мире чудес, а характер у них довольно спокойный и ведут себя задумчиво. Сравнивая себя с этим образом осмелюсь высказать что это не совсем так, с людьми которые не предоставляют мне угрозу, могу предоставить своим странным желаниям воплотится в реальность. Коротко говоря о своём характере, если мы будем сотрудничать, я уверен в первое время не возникнут проблемы с моим характером, но и оставаться в тени тоже не хочу, так что я хочу сделать всё чтобы подняться по карьерной лестнице.',
            'Я люблю посидеть и подзалипать в интернете, как и все подростки, но и у как всех подростов у меня есть мечта. Но человек, который поставил цель отличается от человека который мечтает, мечтающий прибывает в состояний ждущего какого-то чудо, которое произойдет по какой-то то случайности. Как по мне, есть вещи которые выше других забав, развлечений и это как ни странно цель. Это слово, которое заставляет просыпаться рано, открывать глаза, делать то что не хочешь или терпеть то что тебе не сужденно терпеть, мечта или же цель должна тлеть у каждого человека в глазах.']
        },
        skills: {
            title: 'Навыки',
            allSkills: ['html', 'css', 'sass', 'adaptive layout', 'using the command line', 'javaSript ES6', 'vanilla js', 'jquery','github', 'react', 'react-refux', 'redux-thunk','firebase']
        },
        ach: {
            title: 'Достижения',
            dec:[
                {
                    title: 'Сертификат от час кода',
                    text: 'Имеется еще три таких сертификата, полученные в 6, 7, 8 классе. ',
                    img: ach1
                },
                {
                    title: 'Сертификат за участие в международной  волонтерской программе',
                    text: 'Получили всем классом этот сертификат в 8 классе 2018 года, за участие в международной  волонтерской программе "Послы русского языка"',
                    img: ach2
                },
                {
                    title: 'Сертификат от ICDL ',
                    text: 'Сертификат получен за успешное обучение и прохождение в олимпиаде от ICDL в 8 классе, 2019',
                    img: ach3
                },
                {
                    title: 'Грамота за 2 место в районной олимпиаде',
                    text: 'Получил эту грамамату в 9 классе, 2019 году',
                    img: ach4
                },
                {
                    title: 'Грамота за 5 место в областной  олимпиаде',
                    text: 'Получил эту грамамату в 9 классе, 2020 году',
                    img: ach5
                },
                {
                    title: 'Грамота за активное участие в школьных занятиях',
                    text: 'Получил эту грамоту по окончанию 9 класса, 2020',
                    img: ach6
                },
                {
                    title: 'Красный диплом',
                    text: 'Красный диплом за окончание лицея с отличием, получил 2021 году',
                    img: ach7
                },
            ],
        },
        projects: {
            title: 'Мои проекты',
            text: 'Пока еще нет коммерческих  проектов...'
        },
        contacts: {
            title: 'Контакты',
            data: [
                ['Номер', '+996 507 009 660'],
                ['Github', 'https:/github.com/beksultan-07'],
                ['Телеграм', 'https://t.me/Bekas04']
            ]
        }
    },
    en: {
        header: {
            headerTop :['Home', 'About me', 'Skills', 'Achievements', 'Projects', 'Contacts'],
            headerBg: {
                title: 'Welcome to my page',
                text: 'my name is Beksultan and I am a beginner developer'
            }
        },
        aboutMe: {
            title: 'About me',
            text: ["As you already know, my name is Beksultan, surname Bakytov, born in 2004 and I pretend to be a front-end developer. To keep you interested, I present to you this site, which is built on react. In this page I will fully tell about myself, so that you understand what kind of person I am, and they consider me as a candidate for a job.", 
            "First of all, I want to thank and mention my school, where I studied and 98 lyceum, which gave me knowledge in front-end development. He studied at a gymnasium school named Ninakan Zhundubaeva, which gave him fundamental knowledge and the opportunity to participate in interesting Olympiads. Describing my school, it is not small, I would say large, there were almost all conditions. And my class was very funny, of course I had friends, they helped me well, in addition to my friends to come to the choice to study and work in the IT field, there were students from other classes, both senior and junior, I can explain this by the fact that I I can't understand people who make hasty decisions judging only by their age, I agree that older people have a lot of experience and knowledge in different areas, but it is possible that they know everything, so I did not hesitate to discuss various with those who are younger than me. I also want to touch on the topic of hooliganism, since this applies to every boy starting from an undetermined age. Speaking about my classmates and my social circle, fortunately I did not have close people involved in this kind of action.", 
            "The lyceum was a bit of a challenge for me, since by nature I was and possibly am an introvert. And at first everything was new to me, but getting out of my comfort zone was not so difficult. My class teacher was a person who had a pleasant character, so it was not such a difficult matter to study at the Lyceum.", 
            "Having mentioned the lyceum, I want to move smoothly to a hobby and what I do in my free time. So, the lyceum, or rather the guys who studied, gave me a new hobby and entertainment like basketball, which I like to this day and spend a lot of time studying it and its history. But my hobby is not limited to basketball, I like listening to music, reading various books, solving problems on various sites and drawing, although I do not draw at a professional level, I have been drawing since childhood, I tried to study in circles, but I could not, the reason I'll tell you a little later. Drawing also allows me to relax and put my thoughts in order.",

            "They say a person who is close to creativity is very calm and lives in his own world of miracles, and their character is quite calm and behaves thoughtfully. Comparing myself with this image, I dare to say that this is not entirely true, with people who do not pose a threat to me, I can leave my strange desires to come true. Briefly speaking about my character, if we cooperate, I am sure at first there will be no problems with my character, but I don’t want to remain in the shadows either, so I want to do everything to climb the career ladder.",
            "I love to sit and get hooked on the Internet, like all teenagers, but like all teenagers, I also have a dream. But a person who has set a goal is different from a person who dreams, the dreamer arrives in states of waiting for some miracle that will happen by some accident. As for me, there are things that are above other fun, entertainment, and this is, oddly enough, the goal. This is a word that makes you wake up early, open your eyes, do what you don't want or endure what you are not destined to endure, a dream or goal should smolder in every person's eyes."]
        },
        skills: {
            title: 'Skills',
            allSkills: ['html', 'css', 'sass', 'adaptive layout', 'using the command line', 'javaSript ES6', 'vanilla js', 'jquery','github', 'react', 'react-refux', 'redux-thunk','firebase']
        },
        ach: {
            title: 'Achievements',
            dec:[
                {
                    title: 'Certificate from Code hour',
                    text: 'There are three more such certificates obtained in the 6th, 7th, 8th grade.',
                    img: ach1
                },
                {
                    title: 'Certificate for participation in the international volunteer program ',
                    text: 'The whole class received this certificate in the 8th grade of 2018, for participation in the international volunteer program "Ambassadors of the Russian language"',
                    img: ach2
                },
                {
                    title: 'ICDL Certificate',
                    text: 'Certificate received for successful training and passing in the Olympiad from ICDL in grade 8, 2019 ',
                    img: ach3
                },
                {
                    title: 'Diploma for 2nd place in the regional Olympiad ',
                    text: 'Diploma for 2nd place in the regional Olympiad ',
                    img: ach4
                },
                {
                    title: 'Diploma for the 5th place in the regional Olympiad',
                    text: 'Received this gramamata in grade 9, 2020',
                    img: ach5
                },
                {
                    title: 'Diploma for active participation in school activities',
                    text: 'Received this certificate at the end of grade 9, 2020',
                    img: ach6
                },
                {
                    title: 'Red diploma',
                    text: 'Red dimum for graduating from high school with honors, received in 2021',
                    img: ach7
                },
            ],
        },
        projects: {
            title: 'My projects',
            text: 'There are no commercial projects yet ...'
        },
        contacts: {
            title: 'Contacts',
            data: [
                ['Phone number', '+996 507 009 660'],
                ['Github', 'https:/github.com/beksultan-07'],
                ['Telegram', 'https://t.me/Bekas04']
            ]
        }
    }
    
}

const reducer  = (state = initialState, action) => {
    switch (action.type) {
        case 'changeLang':
            return {...state, languages: action.value}
        case 'changeLight':
            return {...state, light: action.value}
        default:
            return state
    }
}

export default reducer;