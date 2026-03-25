const { ethers } = require("ethers");

async function simulateDevice() {
    // 1. Generate a "Hardware" Wallet (Private Key stored on device)
    const deviceWallet = ethers.Wallet.createRandom();
    console.log(`Device Address: ${deviceWallet.address}`);

    const timestamp = Math.floor(Date.now() / 1000);

    // 2. Create the payload
    const messageHash = ethers.solidityPackedKeccak256(
        ["address", "uint256"],
        [deviceWallet.address, timestamp]
    );

    // 3. Sign the payload (Hardware signing)
    const signature = await deviceWallet.signMessage(ethers.getBytes(messageHash));

    console.log("--- Payload for Contract ---");
    console.log(`Device: ${deviceWallet.address}`);
    console.log(`Timestamp: ${timestamp}`);
    console.log(`Signature: ${signature}`);
}

simulateDevice();
