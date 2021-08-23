import {  Route,  Switch } from "react-router-dom";
import Login from "../login/Login";
import Register from "../register/Register";
import Blogs from "../blogs/Blogs";
import Logout from "../logout/Logout";

function Routes({setIsLoggedOut}){
    return(
        <>
                <Switch>
                   <Route path='/login'>
                       <Login setIsLoggedOut={setIsLoggedOut} />
                   </Route>
                   <Route path='/register' component={Register}></Route>
                   <Route path='/blogs' component={Blogs}></Route>
                   <Route path='/logout' component={Logout}></Route>
                </Switch>
            
        </>
    )
}
export default Routes;