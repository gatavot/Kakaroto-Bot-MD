const handler = async (m, {conn}) => {
  m.reply(global.text);
};
handler.command = /^(tenerunbot)$/i;
handler.tags =['main'] 
handler.help = ['tenerunbot <el bot para tu grupo>'] 
export default handler;
global.text =`
  
*¿QUIERES UN BOT PARA TU GRUPOS?*🔥 

!! *Pues es fácil lo único que pedimos*!!🙂‍↔️

Q haga  que 15 amigos o conocidos sigan el canal, una vez que lo hagan le dices que te mandé cap de que ya siguen el canal y me lo reenvías junto con el link de tus grupos a donde quieras el bot_ 🎁

*enviar los captures a este número* +595 991 644557.

*Link de canal que deben seguir* 👇

https://whatsapp.com/channel/0029VagYdbFEwEk5htUejk0t
`;
