module.exports = (client) => {
  const chanId = "955927833128104016";

  // Send a basic message
  channel
    .send("hello!")
    .then((message) => console.log(`Sent message: ${message.content}`))
    .catch(console.error);

  // client.on('guildMemberAdd', (member) => {
  //     console.log(member);
  // })
};
