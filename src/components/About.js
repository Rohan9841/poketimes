import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos qui facere perferendis dolorum deleniti sequi veritatis error necessitatibus accusantium, 
            doloribus dignissimos consequatur obcaecati voluptas, tenetur autem rem dicta sunt modi!</p>
        </div>
    )
}

export default Rainbow(About);