import React from 'react';
import { action } from '@storybook/addon-actions'
import  Header from './Header';

export default {
  title: 'Header',
  component: Header,
};

export const Text = () => <Header><h1>Logo</h1>
<ul className = "nav-links">
        
           <li className="navStyle"><h1>HomePage</h1></li>
           
            
            <li><h1>About</h1></li>
            
            
            <li className="navStyle"><h1>Login</h1></li>
           
            
        </ul>
</Header>;

export const Emoji = () => (
    <Header onClick = {action ('clicked')}>
      <span role= "img" aria-label="so cool">✌🤦‍♀️ </span>
      </Header>
);

export const Image = () => (
 <img src="https://cdn.nohat.cc/thumb/f/720/5637714231689216.jpg" alt="" /> 
);
