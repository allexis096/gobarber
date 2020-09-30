import IParseMailTemplateDTO from '../../MailTemplateProvider/dtos/IParseMailTemplateDTO';

interface IMailtContact {
  name: string;
  email: string;
}

export default interface ISendMailDTO {
  to: IMailtContact;
  from?: IMailtContact;
  subject: string;
  templateData: IParseMailTemplateDTO;
}
