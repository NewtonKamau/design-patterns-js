//an employee leave approval system

//Handler 
class LeaverApprover {
    constructor () {
        this.nextApprover = null;
    }
    setNextApprover(nextApprover){
        this.nextApprover = nextApprover;
    
    }
    approveLeave (leaverRequest) {
        if (this.canApprove(leaverRequest)) {
            this.processLeave(leaverRequest)
        } else if (this.nextApprover) {
            this.nextApprover.approveLeave(leaverRequest)
        } else {
            console.log("No approver available for this leave request.")
        }
    }
    canApprove (leaverRequest) {
        throw new Error('canApprove() must be implemented')
    }
    processLeave (leaverRequest) {
        throw new Error('processLeave() must be implemented')
        
    }
}

//concrete handlers 
class TeamLead extends LeaverApprover{
    canApprove (leaverRequest) {
        return leaverRequest.days <= 2;
    }
    processLeave (leaverRequest) {
        console.log(`Leave request approved by Team Lead for ${leaverRequest.days} day(s)`)
    }
}

class Manager extends LeaverApprover {
    canApprove (leaverRequest) {
        return leaverRequest.days <= 5;
    }
    processLeave (leaverRequest) {
        console.log(`Leave request approved by Manager for ${leaverRequest.days} day(s)`)
    }
}
class Director extends LeaverApprover {0
    canApprove (leaverRequest) {
        return leaverRequest.days <= 7;
    }
    processLeave (leaverRequest) {
        console.log(`Leave request approved by Director for ${leaverRequest.days} day(s)`)
    }
}

//leave request
class LeaveRequest{
    constructor (days) {
        this.days = days;

    }
}


module.exports = {
    TeamLead,
    Manager,
    Director,
    LeaveRequest
};