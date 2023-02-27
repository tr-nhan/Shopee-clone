import * as crypto from "crypto";

export default class EncryptManager {
    private static readonly ALGORITHM: string = "aes-256-cbc";
    private static readonly DEFAULT_SEED: string = "61add9b0068d5d85e940ff3bba0a00e6";
    private static readonly DEFAULT_SALT: string = "7c606d287b6d6b7a6d7c287b7c7a61666f";

    private readonly key: Buffer;
    private readonly iv: Buffer;

    public constructor(seed?: string) {
        if (seed !== undefined) {
            this.key = crypto.scryptSync(seed, EncryptManager.DEFAULT_SALT, 32);
            this.iv = crypto.scryptSync(seed, EncryptManager.DEFAULT_SALT, 16)
            return;
        }
        this.key = crypto.scryptSync(EncryptManager.DEFAULT_SEED, EncryptManager.DEFAULT_SALT, 32);
        this.iv = crypto.scryptSync(EncryptManager.DEFAULT_SEED, EncryptManager.DEFAULT_SALT, 16);
    }

    public encrypt(data: string): string {
        const cipher = crypto.createCipheriv(EncryptManager.ALGORITHM, this.key, this.iv);
        let encrypted = cipher.update(data, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    }

    public decrypt(data: string): string {
        const decipher = crypto.createDecipheriv(EncryptManager.ALGORITHM, this.key, this.iv);
        let decrypted = decipher.update(data, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
}