import { Link } from "react-router-dom";
import LoginSignupHead from "../../components/LoginSignupHead";


const Login = () => {
    return (
        <div className="grid md:grid-cols-2">
            <LoginSignupHead></LoginSignupHead>
            
            <div className="border md:p-5 flex items-center">
                <div className="border p-3 md:w-2/3 mx-auto">
                    <h1 className="text-2xl font-bold text-center py-10">Log in to Doc House</h1>
                    <form className="p-5">
                        <label className="font-bold" htmlFor="email">Username or Email Address</label>
                        <input className="bg-[#F3F3F3] py-6 px-4 w-full rounded-md my-4" type="email" name="email" placeholder="Enter your username or email address" />

                        <label className="font-bold" htmlFor="password">Password</label>
                        <input className="bg-[#F3F3F3] py-6 px-4 w-full rounded-md my-4" type="password" name="password" placeholder="Enter your password" />
                        
                        <input className="bg-[#F7A582] w-full text-white py-5 rounded-lg cursor-pointer hover:bg-yellow-500" type="submit" value="Login" />
                    </form>
                    <p className="text-center text-sm pb-10 text-gray-500">Please register at first. Go to <Link to="/signup" className="text-[#F7A582] font-bold">CREATE ACCOUNT</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;