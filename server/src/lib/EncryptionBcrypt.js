import bcrypt from "bcrypt";

export class EncryptionBcrypt {
  async createHash(data) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(data, salt);
  }
}
