const { LightOnCommand, LightOffCommand, Light } = require('./command');

//Invoker
class RemoteControl {
    constructor () {
        this.commands = []
    }
    addCommand (command) {
        this.commands.push(command);
    }
    executeCommands () {
        this.commands.forEach((command) => {
            command.execute();
        })
    }
}

//Usage
const remoteControl = new RemoteControl();
const light = new Light();

const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);

remoteControl.addCommand(lightOnCommand);
remoteControl.addCommand(lightOffCommand)
remoteControl.executeCommands();