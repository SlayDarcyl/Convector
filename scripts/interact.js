const hre = require("hardhat");

async function main() {
    const contractAddress = "YOUR_CONTRACT_ADDRESS_HERE"; // Replace with your deployed contract address
    const TaskManager = await hre.ethers.getContractAt("TaskManager", contractAddress);

    await TaskManager.createTask("Complete hackathon project");
    const task = await TaskManager.getTask(1);
    console.log("Task Description:", task.description);
    
    await TaskManager.completeTask(1);
    console.log("Task completed:", await TaskManager.getTask(1));
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
