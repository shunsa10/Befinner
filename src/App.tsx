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
import { Review2Provider } from "./context/Review2Context";
import { Review3Provider } from "./context/Review3Context";
import { Review1Provider } from "./context/Review1Context";


const App:React.FC = () => {
    // const location = useLocation();
    // const [_, rootPath] = location.pathname.split("/");
    return (
      <AuthProvider>
        <AccountProvider>
          <StyleProvider>
            <ReviewProvider>
              <Review1Provider>
              <Review2Provider>
              <Review3Provider>
                <BrowserRouter>
                  <Switch>
                    <Route exact path="/" component={Home}>
                      <Home />
                    </Route>
                    <Route exact path="/About" component={About}>
                      <LoggedInRoute>
                        <About />
                      </LoggedInRoute>
                    </Route>
                    <Route exact path="/Todo" component={Todo}>
                      <Todo />
                    </Route>
                    <Route exact path="/Account" component={Account}>
                      <Account />
                    </Route>
                    <Route exact path="/Local" component={Local}>
                      <Local />
                    </Route>
                  </Switch>
                </BrowserRouter>
              </Review3Provider>
              </Review2Provider>
              </Review1Provider>
            </ReviewProvider>
          </StyleProvider>
        </AccountProvider>
      </AuthProvider>
    );
};

export default App;



