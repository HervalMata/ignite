import {IUsersTokensRepository} from "../IUsersTokensRepository";
import {ICreateUserTokenDTO} from "../../dtos/ICreateUserTokenDTO";
import {UserTokens} from "../../infra/typeorm/entities/UserTokens";


class UsersTokensRepositoryInMemory implements IUsersTokensRepository{
    private usersTokens: UserTokens[] = [];

    async create(data : ICreateUserTokenDTO): Promise<UserTokens> {
        const userToken = new UserTokens();
        Object.assign({
            userToken, data
        });
        this.usersTokens.push(userToken);
        return userToken;
    }

    async deleteById(id: string): Promise<void> {
        const userTokenIndex = this.usersTokens.findIndex(
            (userToken) => userToken.id === id
        );
        this.usersTokens.splice(userTokenIndex, 1);
    }

    async findByUserIdAndRefreshToken(user_id: string, refresh_token: string): Promise<UserTokens> {
        return this.usersTokens.find(
            (userToken) =>
                userToken.user_id === user_id &&
                userToken.refresh_token === refresh_token
        );
    }

    async findByRefreshToken(token: string): Promise<UserTokens> {
        return this.usersTokens.find(
            (userToken) => userToken.refresh_token === token
        );
    }

}

export { UsersTokensRepositoryInMemory }