import {IMailProviderSendMailDTO} from "./IMailProviderSendMailDTO";

interface IMailProvider {
    sendMail({ to, variables, subject, path, }: IMailProviderSendMailDTO): Promise<void>;
}

export { IMailProvider }