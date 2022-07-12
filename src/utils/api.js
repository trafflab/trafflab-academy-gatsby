export const sendFormToTg = (name, tgNick) => {
  const message = `${name} - @${tgNick}`

  return fetch(`https://api.telegram.org/bot5502333932:AAFTPXDUZcEJ9c07zoJrZZDZVFZO9GUk0Eo/sendMessage?chat_id=-738135275&parse_mode=html&text=${message}`, {
    method: 'GET'
  })
  .then((res) => res.json())
}