interface BasicChainInformation {
    chainId: number
    rpcUrls: any[]
    name: string
}

export const CHAINS: {[chainId: number]: BasicChainInformation} = {
    1: {
        chainId: 1,
        rpcUrls: [`https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`],
        name: "Ethereum",
    },
    5: {
        chainId: 5,
        rpcUrls: [`https://goerli.infura.io/v3/${process.env.INFURA_KEY}`],
        name: "Goerli test network",
    },
    11155111: {
        chainId: 11155111,
        rpcUrls: [`https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`],
        name: "Sepolia test network",
    },
}

export const URLS: { [chainId: number]: string[] } = Object.keys(CHAINS).reduce<{ [chainId: number]: string[] }>(
    (accumulator, chainId) => {
        const validURLs: string[] = CHAINS[Number(chainId)].rpcUrls

        if (validURLs.length) {
            accumulator[Number(chainId)] = validURLs
        }

        return accumulator
    },
    {}
)