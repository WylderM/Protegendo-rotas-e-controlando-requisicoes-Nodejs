import { Router } from 'express'
//import transactionRouter from './transaction.routes'

const routes = Router()

routes.use('/transactions', (req, res) => {
	res.send()
})

export default routes
