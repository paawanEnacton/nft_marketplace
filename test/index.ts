import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("NFTMarket", () => {
  it("Should do something", async () => {
    // Deploy the NFTMarket contract
    const NFTMarket = await ethers.getContractFactory("NFTMarket");
    const nftMarket = await NFTMarket.deploy();
    await nftMarket.deployed();

    // Call the create nft function
    const tokenURI = "https://some-token.uri";
    const transaction = await nftMarket.createNFT(tokenURI);
    console.log("transaction :>> ", transaction);
    const receipt = await transaction.wait();

    // Assert that the newly created NFT's token URI is the same one sent to the createNFT function
    const tokenID = receipt.events[0]?.args.tokenId;
    const mintedTokenURI = await nftMarket.tokenURI(tokenID);
    expect(mintedTokenURI).to.equal(tokenURI);

    // owner of the newly created NFT is the address that started the transaction
    const ownerAddress = await nftMarket.ownerOf(tokenID);
    const signers = await ethers.getSigners();
    const currentAddress = await signers[0].getAddress();
    expect(ownerAddress).to.equal(currentAddress);
  });
});
