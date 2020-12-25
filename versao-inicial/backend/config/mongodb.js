const { connection } = require('../.env')

const mongoose = require('mongoose')
mongoose.connect(connection, {useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e =>{
        const msg = 'ERRO: Não foi possível conectar com o mongoDB!'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })

