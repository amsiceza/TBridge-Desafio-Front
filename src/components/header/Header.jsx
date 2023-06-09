import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { useEffect } from "react";

const Header = () => {
 const navigate = useNavigate();
 const dispatch = useDispatch();
 const { user } = useSelector((state) => state.auth);
 
 const onLogout = (e) => {
 e.preventDefault();
 dispatch(logout());
 };

 useEffect(() => {
    const token = localStorage.getItem('token') 
    if (!token) {
        navigate('/login') 
    }
})
 return (
 <nav>
 <span>Header</span>
 <div>
 {user ? 
 <span onClick={onLogout}>
 Logout
 </span>
 : 
 <>
 <span><Link to="/login">Login</Link></span>
 <span><Link to="/register">Register</Link></span>
 </>
 }
 </div>
 </nav>
 );
};
export default Header;
