const { TeamLead, Manager, Director, LeaveRequest } = require('./chain');

// Usage
const teamLead = new TeamLead();
const manager = new Manager();
const director = new Director();

teamLead.setNextApprover(manager);
manager.setNextApprover(director);

const leaverRequest1 = new LeaveRequest(3);
teamLead.approveLeave(leaverRequest1);

const leaverRequest2 = new LeaveRequest(6);
manager.approveLeave(leaverRequest2);

const leaverRequest3 = new LeaveRequest(10);
teamLead.approveLeave(leaverRequest3);