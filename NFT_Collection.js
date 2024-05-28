/*
Assessment Requirements
1. Create a variable that can hold a number of NFTs. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1.
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name)).
4. For good measure, getTotalSupply() should return the number of NFTs you have created.
*/




// Create a variable to hold your NFTs
let MintedNFTsCollection = [];


// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(nftName, nftAuthor, nftPublicationDate, nftDescription) {
    // Create the NFT object with the given metadata
    const nftMetadata = {
        name: nftName,
        author: nftAuthor,
        publicationDate: nftPublicationDate,
        description: nftDescription
    };


    // Store the NFT object in the MintedNFTsCollection array
    MintedNFTsCollection.push(nftMetadata);
}


// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listMintedNFTsCollection() {
    MintedNFTsCollection.forEach((nft, index) => {
        console.log("NFT " + (index + 1) + ":");
        console.log("  Name: " + nft.name);
        console.log("  Author: " + nft.author);
        console.log("  Publication Date: " + nft.publicationDate);
        console.log("  Description: " + nft.description);
    });
}


// Print the total number of NFTs we have minted to the console
function getTotalNumberOfMintedNFTs() {
    return MintedNFTsCollection.length;
}


// Call your functions below this line

// Minting some NFTs
mintNFT("Pather Panchali", "Bibhutibhushan Bandyopadhyay", "November 1929", "A remarkable story of rural life in Bengal.");
mintNFT("Gitanjali", "Rabindranath Tagore", "August 1910", "An exceptional collection of poems by the Nobel laureate Rabindranath Tagore.");
mintNFT("Devdas", "Sarat Chandra Chattopadhyay", "June 1917", "A tragic love story.");
mintNFT("Chokher Bali", "Rabindranath Tagore", "April 1903", "A novel exploring complex relationships and social norms.");
mintNFT("Aranyak", "Bibhutibhushan Bandyopadhyay", "February 1939", "A portrayal of the lives and struggles of people living in the forests of Bihar.");

// Listing all NFTs
listMintedNFTsCollection();


// Printing the total supply of NFTs
console.log("Total Supply: " + getTotalNumberOfMintedNFTs());
