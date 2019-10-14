const TeleBot = require('telebot')
const Metron = new TeleBot('806036577:AAHpC502B_acOm65-B2l-SXmtWecdzaZqIc')

Metron.start()

Metron.on('text', (msg) => {
    var message = msg.text
    let presentations = ['Olá', 'ola', 'Ola', 'olá',
        'oie', 'eae', 'Eae', 'Opa', 'Oi', 'oi', 'oii', 'Como vai?', 'Preciso de ajuda']

    let list_hours = ['Horário', 'Hora', 'horario', 'hora', 'horários', 'horarios', 'horas', 'Horas',
        'Horários']

    let list_services = ['Serviço', 'Serviços', 'servico', 'serviços', 'Servico',
        'serviço']

    let contains_presentations = false
    let contains_services = false
    let contains_list_hours = false

    let message_return = false

    var hours_message = ''
    var presentation_message = ''
    var services_message = ''

    presentations.forEach(function(word) {
        contains_presentations = contains_presentations + message.includes(word)
    })

    if (contains_presentations === 1) {
        presentation_message = (`Olá ${msg.from.first_name}, sou o Metron, seu assistente pessoal
        da BarberCorte`)
        message_return = true
    }

    list_hours.forEach(function(word) {
        contains_list_hours = contains_list_hours + message.includes(word)
    })

    if (contains_list_hours === 1) {
        hours_message = ' Os horários disponíveis são: '
        message_return = true
    }

    list_services.forEach(function(word) {
        contains_services = contains_services + message.includes(word)
    })

    if (contains_services === 1) {
        services_message = ' Este são os serviços disponíveis: '
        message_return = true
    }

    if (message_return === true) { return msg.reply.text(presentation_message + services_message + hours_message) }

    msg.reply.text('Desculpe não entendi')
})

Metron.on(['/start', '/hello'], (msg) => msg.reply.text(
    `Olá ${msg.from.first_name}, bem vindo ao Metron`))

