//Command interface

class Command {
    execute () {
        throw new Error("execute() method must be implemented. ")
    }
}

//concrete commands

class LightOnCommand extends Command{
    constructor (light) {
        super();
        this.light = light;
    }
    execute () {
        this.light.turnOn();
    }
}

class LightOffCommand extends Command{
    constructor (light) {
        super();
        this.light = light;
    }
    execute () {
        this.light.turnOff();
    }

}

//Receiver

class Light {
    turnOn () {
        console.log("Light turned on.");
    }
    turnOff () {
        console.log("Light turned off.")
    }
} 

module.exports = {
    LightOnCommand,
    LightOffCommand,
    Light
}