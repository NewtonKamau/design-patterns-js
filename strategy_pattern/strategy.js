//strategy interface

class LoggerStrategy {
    log (message) {
        throw new Error("log() method must be implemented");
    }
}

//concrete strategies

class ConsoleLoggerStrategy extends LoggerStrategy {
    log (message) {
        console.log(`[Console Logger]${message}`)
    }
}

class FileLoggerStrategy extends LoggerStrategy {
    log (message) { 
        console.log(`[File Logger]${message}`)
    }
}

class Logger{
    constructor (strategy) {
        this.strategy = strategy;
    }
    setStrategy (strategy) {
        this.strategy = strategy
    }
    log (message) {
        this.strategy.log(message)
    }
}

module.exports = {
    ConsoleLoggerStrategy,
    FileLoggerStrategy,
    Logger
}

