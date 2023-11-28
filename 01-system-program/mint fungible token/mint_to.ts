import {
    Keypair,
    Connection,
    Commitment,
    clusterApiUrl,
    PublicKey,
} from "@solana/web3.js";
import bs58 from "bs58"
import "dotenv/config"
import { mintTo } from "@solana/spl-token";

const start = async () => {
    const COMMITMENT: Commitment = "finalized"
    const CONNECTION = new Connection(clusterApiUrl("devnet"), COMMITMENT)
    const PAYER = Keypair.fromSecretKey(bs58.decode(process.env.PRIVATE_KEY ?? ""))
    const temp = await mintTo(CONNECTION, PAYER, new PublicKey("9LRSmZjcuT45Atxk7rkoKSQTzWhdJDLH8Nrk87gtER8i"), new PublicKey("CRtW9bz9prFbPAZKeq6L7kDNtPaAC6aRSLj9JLVJbgSL"), PAYER.publicKey, 1)
    console.log(temp.toString());
}

start();