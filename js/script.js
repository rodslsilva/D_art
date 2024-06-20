const alertPlaceholder1 = document.getElementById('liveAlert1')
const appendAlert1 = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder1.append(wrapper)
}

const alertTrigger1 = document.getElementById('liveAlertBtn1')
if (alertTrigger1) {
  alertTrigger1.addEventListener('click', () => {
    appendAlert1('Não há nenhum novo comentário', 'primary')
  })
}
///////////////////////////////////////////////////




const alertPlaceholder2 = document.getElementById('liveAlert2')
const appendAlert2 = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder2.append(wrapper)
}

const alertTrigger2 = document.getElementById('liveAlertBtn2')
if (alertTrigger2) {
  alertTrigger2.addEventListener('click', () => {
    appendAlert2('Existem <strong>2</strong> novas curtidas em sua ultima postagem', 'primary')
  })
}
////////////////////////////////////////////////






const alertPlaceholder3 = document.getElementById('liveAlert3')
const appendAlert3 = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder3.append(wrapper)
}

const alertTrigger3 = document.getElementById('liveAlertBtn3')
if (alertTrigger3) {
  alertTrigger3.addEventListener('click', () => {
    appendAlert3('Não há nenhuma nova mensagem', 'primary')
  })
}