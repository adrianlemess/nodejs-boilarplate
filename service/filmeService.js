
const Filme = require("../model/filme");


exports.save = (filme) => {

    return new Promise((resolve, reject) => {
        const novoFilme = new Filme(filme);

        novoFilme.save(novoFilme, (err, result) => {
            if(err) reject(err)
            else resolve(result)
        })
    })
}