import { logIn, signUp } from "./api/auth.requests";
import FormRegister from "./components/formRegister/FormRegister";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import { getUsers } from "./redux/slices/user.slice";
// import {getUsers} from

function App() {
  // const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => dispatch(getUsers()), [dispatch]);

  return <div>{"user.firstName"}</div>;
}

export default App;

// const dataRegistration = {
//   name: "aden",
//   email: "aden@mail.com",
//   password: "123",
// };

// const dataLogin = {
//   email: "dini@mail.com",
//   password: "567",
// };

// const onRegisterClick = async () => {
//   await signUp(dataRegistration)
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };

// const onLoginClick = async () => {
//   await logIn(dataLogin)
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };

// const FormRegister = () => {
//   const handleSubmit = () => console.log(subit);
//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="firsname" placeholder="First Name" value="" />
//       <input type="text" name="lastname" placeholder="Last Name" value="" />
//       <input type="text" name="username" placeholder="Username" value="" />
//       <input type="password" name="password" placeholder="Password" value="" />
//       <input type="password" name="password" placeholder="Password" value="" />
//       <input
//         type="password"
//         name="confirmPassword"
//         placeholder="Confirm Password"
//         value=""
//       />

//       <button onClick={onRegisterClick}>Resgister</button>
//       {/* <button onClick={onLoginClick}>Login</button> */}
//     </form>
//   );
// };
