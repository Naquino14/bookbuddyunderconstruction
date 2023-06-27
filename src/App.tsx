import React, { useState } from 'react'
import './index.css'

const getHash = async () => {
    const response = await fetch('https://api.github.com/repos/clr7695/BookBuddy/git/refs/heads/master')
    const json = await response.json()
    const hash = json.object.sha
    return hash
}


const getLink = (hash: string) => {
    return `https://github.com/clr7695/BookBuddy/commit/${hash}`
}

const App = () => {
    const [version, setversion] = useState('loading...')
    getHash().then(hash => {
        setversion(hash)
    })
    return (
        <div className='app'>
            <img className='logo' src="logo.png" alt='bookbuddy logo' />
            <img className='under-construction' src='under construction.png' alt='under construction' />
            <div className='subtext'>Pardon our dust...</div>
            <h1 className='title'>Book buddy is currently under construction.</h1>
            <div className='subtext'>
                Follow its development on:<button className='button' onClick={() => {
                    window.open('https://github.com/clr7695/BookBuddy')
                }}>GitHub</button>
            </div>
            <footer>
                <a className='hash' href='mailto:roeboattech@gmail.com'>Contact Me</a>
                <a className='hash' href={getLink(version.substring(0, 7))}>{version.substring(0, 7)}</a>
            </footer>
        </div>
    )
}

export default App