const { expect } = require("chai");

describe("TaskManager", function () {
    it("Should create and complete tasks correctly", async function () {
        const TaskManager = await ethers.getContractFactory("TaskManager");
        const taskManager = await TaskManager.deploy();
        await taskManager.deployed();

        await taskManager.createTask("Test Task 1");
        const task = await taskManager.getTask(1);
        
        expect(task.description).to.equal("Test Task 1");
        expect(task.completed).to.be.false;

        await taskManager.completeTask(1);
        const updatedTask = await taskManager.getTask(1);
        
        expect(updatedTask.completed).to.be.true;
    });
});
