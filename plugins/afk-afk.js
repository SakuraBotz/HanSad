let handler = (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  let str = `╭──[ *NOW AFK !* ]──✧
┆ *Nama* : ${conn.getName(m.sender)}
┆ *Alasan* : ${text ? '' + text : ''}
╰┅────★
`.trim()
conn.sendButton(m.chat, str, wm, 'Jangan Ganggu Ya !', 'iyaaaaa',m)
conn.reply(str)
}

    }
    } })
            }
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

export default handler
