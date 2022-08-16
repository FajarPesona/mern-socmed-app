import { signUp } from "../api/auth.requests";

const dataRegistration = {
  name: "aden",
  email: "aden@mail.com",
  password: "123",
};

export const test = async () => {
  console.log("test");
  await signUp(dataRegistration)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
