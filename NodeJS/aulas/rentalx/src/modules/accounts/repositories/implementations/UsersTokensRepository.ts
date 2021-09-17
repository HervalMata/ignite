import {IUsersTokensRepository} from "../IUsersTokensRepository";
import {ICreateUserTokenDTO} from "../../dtos/ICreateUserTokenDTO";
import {UserTokens} from "../../infra/typeorm/entities/UserTokens";
import {getRepository, Repository} from "typeorm";

class UsersTokensRepository implements IUsersTokensRepository{
    private repository: Repository<UserTokens>;

    constructor() {
        this.repository = getRepository(UserTokens);
    }

    async create({ user_id, refresh_token, expires_date }: ICreateUserTokenDTO): Promise<UserTokens> {
        const userToken = this.repository.create({
            user_id, refresh_token, expires_date
        });
        await this.repository.save(userToken);
        return userToken;
    }

    async deleteById(id: string): Promise<void> {
        await this.repository.delete(id);
    }

    async findByUserIdAndRefreshToken(user_id: string, refresh_token: string): Promise<UserTokens> {
        const userTokens = await this.repository.findOne({ user_id, refresh_token });
        return userTokens;
    }

    async findByRefreshToken(token: string): Promise<UserTokens> {
        const userToken = await this.repository.findOne({ refresh_token: token });
        return userToken;
    }

}

export { UsersTokensRepository }