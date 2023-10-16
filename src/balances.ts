import {PublicKey, } from '@solana/web3.js';
import { Connection, programs, } from '@metaplex/js';
import axios from 'axios';

// async function main() {
    const connection = new Connection(
        "https://api.devnet.solana.com"
    );
    console.log("Prueba");
    console.log(connection.getTokenLargestAccounts(new PublicKey('GYrNkxJyAkqord4FZ3g3rWUG5uhNKAeVgr3U3H77DNb5')));
// }

// // import { PublicKey } from '@solana/web3.js';
// // import { TOKEN_PROGRAM_ID } from '@solana/spl-token';

// // const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID: PublicKey = new PublicKey(
// //   '8rjpcbUASovmpiQt1mAdoqqoQ7fuD6TkG3uTZJWtfNEG',
// // );

// // function findAssociatedTokenAddress(
// //     walletAddress: PublicKey,
// //     tokenMintAddress: PublicKey
// // ): PublicKey {
// //     return PublicKey.findProgramAddressSync(
// //         [
// //             walletAddress.toBuffer(),
// //             TOKEN_PROGRAM_ID.toBuffer(),
// //             tokenMintAddress.toBuffer(),
// //         ],
// //         SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID
// //     )[0];
// // }

function main(){
    console.log("Prueba");
}