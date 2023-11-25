// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useMutation } from "@apollo/client";
// import "../css/app.css";
// import { LOGIN_USER } from "../utils/mutations"

// import Auth from "../utils/auth";


// const Login = (props) => {
//     const navigate = useNavigate();
//     const [formState, setFormState] = useState({ email: '', password: '' });
//     const [login, { error, data }] = useMutation(LOGIN_USER);

//     // update state based on form input changes
//     const handleChange = (event) => {
//       const { name, value } = event.target;

//       setFormState({
//         ...formState,
//         [name]: value,
//       });
//     };

//     // submit form
//     const handleFormSubmit = async (event) => {
//       event.preventDefault();
//       console.log(formState);
//       try {
//         const { data } = await login({
//           variables: { ...formState },
//         });

//         Auth.login(data.login.token);

//         navigate("/dashboard");
//       } catch (e) {
//         console.error(e);
//       }



//       // clear form values
//       setFormState({
//         email: '',
//         password: '',
//       });
//     };

//     return (
//         <main className="flex-row justify-center mb-4">
//           <div className="col-12 col-lg-10">
//             <div className="card">
//               <h4 className="card-header bg-dark text-light p-2">Login</h4>
//               <div className="card-body">
//                 {data ? (
//                   <p>
//                     Success! You may now head{' '}
//                     {/* <Link to="/">back to the homepage.</Link> */}
//                     {<Link to="/dashboard"/> } to dashboard.
//                   </p>
//                 ) : (
//                   <form onSubmit={handleFormSubmit}>
//                     <input
//                       className="form-input"
//                       placeholder="Your email"
//                       name="email"
//                       type="email"
//                       value={formState.email}
//                       onChange={handleChange}
//                     />
//                     <input
//                       className="form-input"
//                       placeholder="******"
//                       name="password"
//                       type="password"
//                       value={formState.password}
//                       onChange={handleChange}
//                     />
//                     <button
//                       className="btn btn-block btn-info"
//                       style={{ cursor: 'pointer' }}
//                       type="submit"
//                     >
//                       Login
//                     </button>
//                   </form>
//                 )}

//                 {error && (
//                   <div className="my-3 p-3 bg-danger text-white">
//                     {error.message}
//                   </div>
//                 )}
//               </div>
//               <div className="form-group">
//           <Link to="/create-account" className="signup-button">Create New Account</Link>
//         </div>
//             </div>
//           </div>
//         </main>
//       );
//     };


//   const Login = () => {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const [loginMutation] = useMutation(LOGIN_USER);

//     const handleLogin = async (e) => {
//         e.preventDefault(); // Prevent the default form submission behavior

//         try {
//             const { data } = await loginMutation({
//             variables: { email, password },
//             });

//             // Store the token in localStorage
//             localStorage.setItem("token", data.login.token);

//             // Navigate to the dashboard
//             navigate("/dashboard");
//         } catch (error) {
//             console.error(error);
//             alert("Invalid username or password. Please try again.");
//         }
//         }

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="text"
//             id="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter Email"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//           />
//         </div>
//         <div className="form-group">
//           <button type="submit" className="login-button">
//             Login
//           </button>
//         </div>
//       </form>
//       <div className="form-group">
//         <Link to="/create-account" className="signup-button"> Create New Account</Link>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import AuthService from "../utils/auth";
import { Navigate } from "react-router-dom";

const Login = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

        const handleFormSubmit = async (event) => {
            event.preventDefault();
            console.log(formState);

            try {
                const { data } = await login({
                    variables: { ...formState },
                });

                AuthService.login(data.login.token);
                <Navigate to="/dashboard" />
            } catch (e) {
                console.error(e);
            }

            setFormState({
                email: '',
                password: '',
            })
        };
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="Enter Email"
                    />
                    <input
                        type="password"
                        name="password"
                        value={formState.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                    />
                    <button type="submit">Login</button>
                </form>
                {error && <p>Error: {error.message}</p>}
            </div>
        )
    }

    export default Login;