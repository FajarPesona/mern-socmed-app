import { BaseHttpResponse } from "../../../../lib/BaseHttpResponse.js";
import Exception from "../../../../lib/Exception.js";
import RegisterRequestDto from "./register.request.dto.js";
// import RegisterRequestDto from "./register.request.dto.js";

export default class RegisterUser {
  constructor(repository, encrypt, tokenGen) {
    this.repository = repository;
    this.encrypt = encrypt;
    this.tokenGen = tokenGen;
  }
  execute = async (data) => {
    try {
      const dto = RegisterRequestDto.from(data);
      const hashedPassword = await this.encrypt.createHash(dto.password);
      dto.password = hashedPassword;

      const newUser = new this.repository.model(dto);

      const foundUser = await this.repository.findOne({
        username: dto.username,
      });
      if (foundUser) return BaseHttpResponse.failed(400, "User already exists");
      const user = await newUser.save();
      const accessToken = this.tokenGen.createToken(
        { username: user.username, id: user._id },
        process.env.ACCESS_TOKEN_SECRETE_KEY,
        process.env.TOKEN_EXPIRED_TIME
      );
      const { password, ...otherDetails } = user._doc;
      return BaseHttpResponse.success(201, { otherDetails, accessToken });
    } catch (error) {
      return BaseHttpResponse.failed(400, error.message);
    }
  };
}
