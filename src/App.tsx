import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  BrowserRouter
} from 'react-router-dom';
import { AnimatePresence} from "framer-motion";
import React from 'react';
import Home from './HOME/Home'
import About from './ABOUT/About'
import Todo from './TODO/Todo'
import {StyleProvider} from './context/StyleContext';




const App:React.FC = () => {
    // const location = useLocation();
    // const [_, rootPath] = location.pathname.split("/");
    return (
        
        <StyleProvider>
            <BrowserRouter>
            {/* <AnimatePresence exitBeforeEnter initial={true}> */}
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
                </Switch >
                {/* </AnimatePresence> */}
            </BrowserRouter>
        </StyleProvider>
       
    );
};

export default App;


