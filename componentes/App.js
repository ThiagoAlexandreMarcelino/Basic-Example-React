import React from 'react';
import Post from './Post';
import logo from '../img/nasa-logo.png';

export default class App extends React.Component{
    render(){
        return(
        <div>
            <a href="https://rocketseat.com.br/starter"><img src={logo} width={400} /></a>
            <h1>Hello World</h1>
        <Post title="Aprendendo React com a RocketSeat"></Post>
        <Post title="ReactJS é demais!"></Post>
        <Post title="Em breve mais videos do ReactJS"></Post>
        
        </div>
        
        );
    }
}