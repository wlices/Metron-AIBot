const TeleBot = require('telebot')
const Metron = new TeleBot('806036577:AAHpC502B_acOm65-B2l-SXmtWecdzaZqIc')

Metron.start()

Metron.on('text', (msg) => {
    var message = msg.text
    let presentations = ['Olá', 'Oi', 'Como vai?', 'Preciso de ajuda']
    let zuera = 'cu'
    let contains = false 

    presentations.forEach(function(word) {
        contains = contains + message.includes(word)
    })

    if (contains === 1) {
        return msg.reply.text(`Olá ${msg.from.first_name}, sou o Metron, seu assistente pessoal
        da BarberCorte, como posso lhe ajudar?`)
    } else {
        return msg.reply.text('Desculpe não entendi :/')
    }

})

Metron.on(['/start', '/hello'], (msg) => msg.reply.text(
    `Olá ${msg.from.first_name}, bem vindo ao Metron`))

