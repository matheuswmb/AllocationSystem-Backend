'use strict'
const User = use('App/Models/User')

class AutenticadorController {
    async register({ request }){
        const data = request.only(['email', 'matricula', 'password'])

        const user = await User.create(data)

        return user
    }
    async authenticate({ request, auth }){
        const { matricula, password } = request.all()

        const token = await auth.attempt(matricula, password)

        return token
    }
}

module.exports = AutenticadorController
