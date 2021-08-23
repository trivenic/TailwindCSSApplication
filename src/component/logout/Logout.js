import { useEffect } from "react";
import { useHistory } from "react-router";

function Logout(){

    const history = useHistory();
    useEffect(()=>{history.push('/login')})

    return null;
}

export default Logout;