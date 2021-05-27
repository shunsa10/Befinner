import {Redirect} from 'react-router-dom'
import {useContext, FC} from 'react'
// import {AccountContext} from '../context/AccountContext'
import {AuthContext} from '../context/AuthContext'

const LoggedInRoute:FC = ({children}) => {
    //ジェネリクス
    let user = useContext<{loading: boolean, data:firebase.default.User | null}>(AuthContext)
    

    if (user.loading) {
        return <Redirect to="/About" />;
    }

    if(user.data === null) {
        return <Redirect to="/Account" />;
    }

    return (
        <>{children}</>
    )
};

export default LoggedInRoute;