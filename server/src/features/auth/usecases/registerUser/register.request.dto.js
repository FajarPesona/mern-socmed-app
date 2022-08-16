import Exception from "../../../../lib/Exception.js";

export default class RegisterRequestDto {
  constructor(firstname, lastname, username, password) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.password = password;
  }
  static from(data) {
    if (!data.username) throw new Exception("Missing property username", 400);
    if (!data.password) throw new Exception("Missing property password", 400);
    if (!data.firstname) throw new Exception("Missing property firstname", 400);
    if (!data.lastname) throw new Exception("Missing property lastname", 400);
    // return 8;
    return new RegisterRequestDto(
      data.firstname,
      data.lastname,
      data.username,
      data.password
    );
  }
}
