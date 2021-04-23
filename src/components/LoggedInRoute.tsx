import {Redirect} from 'react-router-dom'
import {Children, useContext} from 'react'
import {AccountContext} from '../context/AccountContext'

const LoggedInRoute = () => {
    const user = useContext(AccountContext)

    // if (user.loading) {
    //     return <h1>ロード中</h1>
    // }

    // if(user.data === null) {
    //     return <Redirect to='/About'/>
    // }

    return (
        <>{Children}</>
    )
};

export default LoggedInRoute