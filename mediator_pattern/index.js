const { ChatRoom, Participant } = require('./mediator');

const chatRoom = new ChatRoom;

const participant1 = new Participant('John');
const participant2 = new Participant('Doe');
const participant3 = new Participant('Jane');

chatRoom.registerParticipant(participant1);
chatRoom.registerParticipant(participant2);
chatRoom.registerParticipant(participant3);

participant1.send("Hello Everyone!!!");
participant3.send("Hey John, long time!")