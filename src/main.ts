import { 
    mplTokenMetadata,
    createV1,
    TokenStandard,
    mintV1,
    createFungible,
 } from "@metaplex-foundation/mpl-token-metadata";
import { 
    keypairIdentity,
    generateSigner, 
    percentAmount, 
} from "@metaplex-foundation/umi";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { userKeypair } from "./helpers";

const umi = createUmi('https://api.devnet.solana.com');

const keypair = umi.eddsa.createKeypairFromSecretKey(userKeypair.secretKey);

umi.use(keypairIdentity(keypair))
    .use(mplTokenMetadata())

const metadata = {
    name: "Platinum Solana",
    symbol: "PSOL",
    uri: "https://javiermontescarrera.github.io/solana-demos/res/tokens/demo-spl-token.json",
};

const mint = generateSigner(umi);
async function createMetadataDetails() {
    await createV1(umi, {
        mint,
        authority: umi.identity,
        name: metadata.name,
        symbol: metadata.symbol,
        uri: metadata.uri,
        sellerFeeBasisPoints: percentAmount(0),
        decimals: 0,
        tokenStandard: TokenStandard.Fungible,
    }).sendAndConfirm(umi)
}

async function mintToken() {
    await mintV1(umi, {
        mint: mint.publicKey,
        authority: umi.identity,
        amount: 10_000,
        tokenOwner: umi.identity.publicKey,
        tokenStandard: TokenStandard.Fungible,
    }).sendAndConfirm(umi)
}

console.log(mint);
console.log("Mint publicKey: ", mint.publicKey); 

createMetadataDetails().then(() => {
    createFungible(umi, {
        mint,
        authority: umi.identity,
        name: metadata.name,
        symbol: metadata.symbol,
        uri: metadata.uri,
        sellerFeeBasisPoints: percentAmount(0),
        decimals: 0,
    }).sendAndConfirm(umi).then(() => {
        mintToken().then(() => {
            console.log("10,000 PSOL (", mint.publicKey, ") minted");
        });
    });
});
