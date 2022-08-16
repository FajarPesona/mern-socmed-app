import { BaseHttpResponse } from "../../../lib/BaseHttpResponse.js";

export default class UpdateUser {
  constructor(repository, encrypt, tokenGen) {
    this.repository = repository;
    this.encrypt = encrypt;
    this.tokenGen = tokenGen;
  }
  execute = async (body, params) => {
    // console.log(body, params);

    const id = params.id;
    const { currentUserId, currentUserAdmin } = body;

    if (id === currentUserId || currentUserAdmin) {
      try {
        if (body.password) {
          const hashedPassword = await this.encrypt.createHash(body.password);
          body.password = hashedPassword;
        }

        const user = await this.repository.findByIdAndUpdate(id, body, {
          new: true,
        });

        const { password, ...otherDetails } = user._doc;

        const accessToken = this.tokenGen.createToken(
          { username: user.username, id: user._id },
          process.env.ACCESS_TOKEN_SECRETE_KEY,
          "10s"
        );

        return BaseHttpResponse.success(201, { user, accessToken });
      } catch (error) {
        return BaseHttpResponse.failed(error.statusCode, error.message);
      }
    } else {
      return BaseHttpResponse.failed(
        403,
        "Access Denied! You can update only your own Account."
      );
    }
  };
}
