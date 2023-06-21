//Medaitor
class ChatRoom{
    constructor () {
        this.participants = [];
    }
    registerParticipant (participant) {
        this.participants.push(participant);
        participant.setChatRoom(this);
    }
    send (message, sender) {
        this.participants.forEach((participant) => {
            if (participant != sender){
                participant.receive(message)
            }
        })
    }
}

//College
class Participant{
    constructor(name){
        this.name = name;
        this.chatroom = null;
    }
    setChatRoom (chatroom) {
        this.chatroom = chatroom;
    }
    send (message) {
        this.chatroom.send(message,this)
        console.log(`${this.name}sent this : ${message}`);
    }
    receive (message) {
        console.log(`${this.name} received message: ${message}`);
    }
}

module.exports = {
    ChatRoom,
    Participant
}