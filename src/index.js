import React from "react";
import ReactDOM from "react-dom";
import {Route, Link, Switch, HashRouter, BrowserRouter, Redirect} from 'react-router-dom';
import Home from "./Home";

import UserGist from './ajax/UserGist';
import MyComponent from './refs/MyComponent';

const HomePage = () => <div>This is a Home Page</div>
const LoginPage = () => <div>This is a Login Page</div>
const RegisterPage = () => <div>This is a Register Page</div>
const ProfilePage = () => <div>This is a Profile Page</div>
const AboutPage = () => <div>This is a About Page</div>
const ContactPage = () => <div>This is a Contact Page</div>

const ProfileMenu = () => <div>This is a menu.....</div>

const BaseLayout = () => (
    <div className="base">
        <header>
            <p>React Router v4 Browser Example</p>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li>
                        <Link to="/me">Profile</Link>
                        <Route path="/me" component={ProfileMenu} />
                    </li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
        <div className="container">
            <Route path="/" exact component={Home} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/me" component={ProfilePage} />
        </div>
        <footer>
            React Router v4 Browser Example (c) 2017
        </footer>
    </div>
);

const App = () => (
    <BrowserRouter>
        <BaseLayout />
    </BrowserRouter>
);

// ReactDOM.render(<App />, document.getElementById('root'));


// 网络请求
ReactDOM.render(<UserGist source="https://api.github.com/users/octocat/gists"/>, document.getElementById("root"));


//

ReactDOM.render(
    <MyComponent/>, document.getElementById("root")
);