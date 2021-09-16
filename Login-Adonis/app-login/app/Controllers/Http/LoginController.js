'use strict'

class LoginController {
    async index({view, session}){
        let username = session.get('username', '');
        return view.render('index' , {user: username}); // este json é mantido em memória na view, ou seja, aqui estou enviando um dado para ser renderizado junto com minha index
    }
    //async para sincronizar com o controller, para fazer tratamento de seção assincrona porque é exigido pelo Adonis

    async login({response, session}){
        let username = session.get('username', '');
        if(username){
            session.clear();
        }
        else{
            session.put('username','Fulano');
        }
        response.redirect('back');//back é uma variavel padrão
    }
}

module.exports = LoginController;
