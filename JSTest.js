const NFTs = [];                                     // creating a variable to hold our NFT's

function mintNFT(Name, id, occupation, hobbie)       // creating a function, in which the object will be created 
{
    const nft =                                      // Creating an object inside the mintNFT function that will hold the metadata for our NFTs.
    {                                   
        "Name": Name,
        "id": id,
        "occupation": occupation,
        "hobbie": hobbie 
    }; 
    NFTs.push(nft);
    console.log("Minted: \t\t" + Name);
}

function listNFTs() 
{
    for (let i = 0; i < NFTs.length; i++)             // creating a "loop" that will go through an "array" of NFTs
    {    
        console.log("\nID: \t\t\t" + (i + 1));             
        console.log("Name: \t\t\t" + NFTs[i].Name);
        console.log("id: \t\t\t" + NFTs[i].id);
        console.log("occupation: \t" + NFTs[i].occupation);
        console.log("hobbie: \t\t" + NFTs[i].hobbie);
        
    }
}

function getTotalSupply()                             // printing the total number of NFTs we have minted to the console
{                                                     
    console.log("\nTotal: \t\t\t" + NFTs.length);
}

mintNFT("Dheeraj", "12234", "Engineer", "Singing");   // calling the functions
mintNFT("Karan", "12235", "Engineer", "Gaming");
mintNFT("Kewal", "12236", "Engineer", "Reading");
listNFTs();
getTotalSupply();
