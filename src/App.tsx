import {
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom';
import React from 'react';
import Home from './HOME/Home'
import About from './ABOUT/About'
import Todo from './TODO/Todo'
import Account from './ACCOUNT/Account'
import Local from './LOCAL/Local'
import {StyleProvider} from './context/StyleContext';
import {AccountProvider} from './context/AccountContext'
import {ReviewProvider} from './context/ReviewCotext'
import {AuthProvider} from './context/AuthContext'
import LoggedInRoute from './components/LoggedInRoute'


const App:React.FC = () => {
    // const location = useLocation();
    // const [_, rootPath] = location.pathname.split("/");
    return (
    <AuthProvider>
        <AccountProvider>
        <StyleProvider>
        <ReviewProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}>
                        <Home />
                    </Route>
                    <Route exact path='/About' component={About}>
                    <LoggedInRoute>
                        <About />
                    </LoggedInRoute>
                    </Route>
                    <Route exact path='/Todo' component={Todo}>
                        <Todo />
                    </Route>
                    <Route exact path='/Account' component={Account}>
                        <Account />
                    </Route>
                    <Route exact path='/Local' component={Local}>
                        <Local />
                    </Route>
                </Switch >
            </BrowserRouter>
        </ReviewProvider>
        </StyleProvider>
        </AccountProvider>
    </AuthProvider>
       
    );
};

export default App;



