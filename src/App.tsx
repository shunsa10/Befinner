import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom';
import React from 'react';
import Home from './HOME/Home'
import About from './ABOUT/About'
import Todo from './TODO/Todo'
import Account from './ACCOUNT/Account'
import {StyleProvider} from './context/StyleContext';
import {AccountProvider} from './context/AccountContext'


const App:React.FC = () => {
    // const location = useLocation();
    // const [_, rootPath] = location.pathname.split("/");
    return (
        <AccountProvider>
        <StyleProvider>
            <BrowserRouter>
                <Switch 
                // location={location}  key={rootPath}
                >
                    <Route exact path='/' component={Home}>
                        <Home />
                    </Route>
                    <Route exact path='/About' component={About}>
                        <About />
                    </Route>
                    <Route exact path='/Todo' component={Todo}>
                        <Todo />
                    </Route>
                    <Route exact path='/Account' component={Account}>
                        <Account />
                    </Route>
                </Switch >
            </BrowserRouter>
        </StyleProvider>
        </AccountProvider>
       
    );
};

export default App;



