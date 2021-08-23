'use strict'
const User = use('App/Models/User')

class AutenticadorController {

    async store({ request }){
        const data = request.only(["nome", "email", "matricula", "password"]);

        const user = await User.create(data);

        return user;
    }

    async show ({ params, request, response, view }) {
        const listar = await User.find(params.id)

        return listar
    }

    async update ({ params, request }) {
        const data = request.only(['nome', 'email', 'matricula', 'password']);
        const post = await User.find(params.id)

        post.merge(data)

        await post.save()

        return post
    }

    async index () {
        const busca_dos_index = await User.all();

        return busca_dos_index
      }

    async index_token ({ request, auth, response }) {
        let user = await auth.getUser();

        return user
    }

    async authenticate({ request, auth }){
        const { matricula, password } = request.all();

        const token = await auth.attempt(matricula, password);

        return token;
    }

    async destroy ({ params }) {
        const post = await User.find(params.id)

        await post.delete()
    }

    async logout ({ request, auth }) {
        
        await auth.check();
        await auth.revokeTokens([request.input('refresh_token')], true);
    }
}

module.exports = AutenticadorController
