import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';



const RequireAuth = ({children}) => {
    const isAuth = useSelector((store)=> store.AuthReducer.isAuth);
    const token = useSelector((store)=> store.AuthReducer.token);
    const location = useLocation();
  if(!isAuth && !token)
  {
    return <Navigate to='/login' replace state={{data: location.pathname}}/>
  }
  return children;
}

export default RequireAuth;