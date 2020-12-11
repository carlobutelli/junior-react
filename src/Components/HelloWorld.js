import React from 'react';

class HelloWorld extends React.Component {
    render() {
        return (
        <h1>Hey {this.props.name} welcome!</h1>
        )
    }
}

// Hooks like
// function HelloWorld(props) {
//     return (
//         <div>
//             <h1>Hello {props.name}</h1>            
//         </div>
//     );
// }

export default HelloWorld;
