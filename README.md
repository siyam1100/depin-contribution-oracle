# DePIN Contribution Oracle

This repository provides the blockchain layer for a **Decentralized Physical Infrastructure Network**. It manages a registry of authorized hardware devices and processes their data "heartbeats" to calculate rewards.

## Workflow
1. **Registration**: An admin (or the manufacturer) registers a device's unique Public Key.
2. **Heartbeat**: The device signs a message containing `(deviceAddress, timestamp, dataPayload)` off-chain.
3. **Validation**: The contract recovers the signer from the heartbeat. If it matches a registered device, it marks the device as "Active."
4. **Reward**: After a set period of uptime, the device owner can claim tokens.

## Security
* **Replay Protection**: Uses timestamps and nonces to ensure a single heartbeat cannot be submitted twice.
* **Hardware Integrity**: Relies on the device having a Secure Element (SE) to keep the private key safe.
