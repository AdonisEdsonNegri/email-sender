import { SendEmailService } from "../services/sendEmailService";
import { SendEmailController } from "./sendEmailController";


const sendEmailService = new SendEmailService()
const sendEmailController = new SendEmailController(sendEmailService)

export { sendEmailController }