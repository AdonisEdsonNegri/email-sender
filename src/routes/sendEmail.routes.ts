import { Router } from 'express'
import { sendEmailController } from '../controllers/index'


export const routes = Router()


routes.post("/send", (request, response) => {
    return sendEmailController.handle(request, response)
})