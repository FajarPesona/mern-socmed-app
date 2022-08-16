export default class Login {
  constructor(repository) {
    this.repository = repository;
  }
  execute(req) {
    console.log(req);
    return "Login cuy";
  }
}
