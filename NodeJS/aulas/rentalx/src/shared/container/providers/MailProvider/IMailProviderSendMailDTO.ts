interface IMailProviderSendMailDTO {
    to: string;
    subject: string;
    variables: string;
    path: string;
}

export { IMailProviderSendMailDTO }