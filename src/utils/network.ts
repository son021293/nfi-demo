// @ts-ignore
import { initializeConnector } from '@web3-react/core'
import { Network } from '@web3-react/network'
import { URLS } from '../constants/chains'

// @ts-ignore
export const [network, hooks] = initializeConnector<Network>(
    (actions: any) => new Network({actions, urlMap: URLS}),
)