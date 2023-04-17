pragma solidity ^0.8.18;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFTMarket is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIDs;

    constructor() ERC721("Paawan's NFTs", "PNFT") {}

    function createNFT(string calldata tokenURI) public {
        _tokenIDs.increment();
        uint256 currentID = _tokenIDs.current();
        _safeMint(msg.sender, currentID);
        _setTokenURI(currentID, tokenURI);
    }

    // listNFT
    function listNFT(uint256 tokenID, uint256 price) public {}

    // buyNFT

    // cancelListing
}
