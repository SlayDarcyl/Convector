# Convector

## Description
This project provides a simple task management system on the Base blockchain.

## Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Compile the contracts:
```
npx hardhat compile
```
## Deployment
To deploy the contracts, run:
```
node scripts/deploy.js
```
## Interact with the Contract
To interact with the deployed contract, run:

```node scripts/interact.js
```
## Testing
To run tests, execute:
```
npx hardhat test
```

```
#### `contracts/TaskManager.sol`

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TaskManager {
    struct Task {
        uint id;
        string description;
        bool completed;
    }

    Task[] public tasks;
    uint public taskCount;

    event TaskCreated(uint id, string description);
    event TaskCompleted(uint id);

    function createTask(string memory _description) public {
        taskCount++;
        tasks.push(Task(taskCount, _description, false));
        emit TaskCreated(taskCount, _description);
    }

    function completeTask(uint _id) public {
        require(_id > 0 && _id <= taskCount, "Task ID is invalid");
        tasks[_id - 1].completed = true;
        emit TaskCompleted(_id);
    }

    function getTask(uint _id) public view returns (Task memory) {
        require(_id > 0 && _id <= taskCount, "Task ID is invalid");
        return tasks[_id - 1];
    }
}
```
