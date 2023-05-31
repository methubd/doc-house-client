import { Link } from "react-router-dom";
import LoginSignupHead from "../../components/LoginSignupHead";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";



const SignUp = () => {
    const {createUser} = useContext(AuthContext);

    

    const handleCreateUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        const newUser = {name, username, email, role: 'user'}

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset()
        })
        .catch(err => {
            console.log(err.message);
        })

        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

    }
    
    return (
        <div className="grid md:grid-cols-2">
            <LoginSignupHead>
            </LoginSignupHead>

            <div className="border md:p-5 flex items-center">
                <div className="border p-3 md:w-2/3 mx-auto">
                    <h1 className="text-2xl font-bold text-center py-10">Sign in to Doc House</h1>
                    <form onSubmit={handleCreateUser} className="p-5">
                        <label className="font-bold" htmlFor="name">Name</label>
                        <input className="bg-[#F3F3F3] py-6 px-4 w-full rounded-md my-4" type="text" name="name" placeholder="Enter your name" />
                        
                        <label className="font-bold" htmlFor="username">Username</label>
                        <input className="bg-[#F3F3F3] py-6 px-4 w-full rounded-md my-4" type="text" name="username" placeholder="Enter your username" />

                        <label className="font-bold" htmlFor="email">Email</label>
                        <input className="bg-[#F3F3F3] py-6 px-4 w-full rounded-md my-4" type="email" name="email" placeholder="Enter your email" />

                        <label className="font-bold" htmlFor="password">Password</label>
                        <input className="bg-[#F3F3F3] py-6 px-4 w-full rounded-md my-4" type="password" name="password" placeholder="Enter your password" />
                        
                        <input className="bg-[#F7A582] w-full text-white py-5 rounded-lg cursor-pointer hover:bg-yellow-500" type="submit" value="Create Account" />
                    </form>
                    <p className="text-center text-sm pb-10 text-gray-500">Please register at first. Go to <Link to="/login" className="text-[#F7A582] font-bold">SIGN IN</Link> </p>
                </div>
            </div>

        </div>
    );
};

export default SignUp;