import React from 'react';

import Comments from './Comments';

export default class Post extends React.Component{
render(){
    return(
        <div>
            <h2>{this.props.title}</h2>
            <Comments text="Bom post" />
        </div>
        
    );

}
    
}