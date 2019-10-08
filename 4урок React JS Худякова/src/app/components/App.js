import React from 'react';
import ReactDOM from 'react-dom';

import Blog from './Blog';
import WelcomeModal from './WelcomeModal';


 class App extends React.Component {

    render() {
                const posts = [
            {title: 1,
            body: 'qwerty qwerty qwerty'
            },
            {title: 2,
            body: 'qwerty qwerty qwerty'},
            {title: 3,
                body: 'qwerty qwerty qwerty'}
        ]

        return(
        <div>
            <WelcomeModal />
            <h1>Посты</h1>
            <Blog 
            postsList={posts}
            />
        </div>)
    }

    componentDidMount() {
        console.log('dsdsd')
    }

 } 

 ReactDOM.render(<App />, document.querySelector('#root'));