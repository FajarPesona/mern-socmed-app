import Login from "./Login.js";
import RegisterUser from "./registerUser/RegisterUser.js";

const authUseCases = (repository, encrypt, tokenGen) => {
  return Object.freeze({
    registerUser: new RegisterUser(repository, encrypt, tokenGen),
    login: new Login(repository),
  });
};

export default authUseCases;
