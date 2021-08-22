'use strict'
const User = use('App/Models/User')

class AutenticadorController {
    async authenticate({ request, auth }){
        const { matricula, password } = request.all()

        const token = await auth.attempt(matricula, password)

        return token
    }

    async destroy ({ params }) {
        const post = await User.find(params.id)
    
        await post.delete()
    }
}

module.exports = AutenticadorController
