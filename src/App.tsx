import React, { useCallback, useEffect, useState } from 'react';
import { hooks, metaMask } from "./utils/metaMask";
import { Status } from './components/Status';

const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
} = hooks;

function App() {
  const chainId = useChainId();
  const accounts = useAccounts();
  const isActivating = useIsActivating();
  const isActive = useIsActive();

  const [error, setError] = useState(undefined)

  useEffect(() => {
    metaMask.connectEagerly().catch(() => {
      console.debug('Failed to connect eagerly to metamask')
    })
  }, []);

  const onConnect = useCallback(():void => {
    setError(undefined);
    metaMask
    .activate()
    .then(() => setError(undefined))
    .catch(setError)
  }, [metaMask, setError])

  return (
    <div className="App">
      <div className='text-4xl'>Connect to Metamask</div>

      <div className='mt-5'>
        <Status isActivating={isActivating} isActive={isActive} error={error} />
        <div>
          Account: {accounts ? accounts[0] : null}
        </div>
        <div>
          Chain ID: {chainId ?? null}
        </div>

        {isActive ? <button 
            className="h-10 px-6 font-semibold rounded-md bg-black text-white"
            // @ts-ignore
            onClick={() => metaMask.resetState()}
          >
            Disconnect
          </button> : (
          <button 
            className="h-10 px-6 font-semibold rounded-md bg-black text-white"
            onClick={onConnect}
          >
            Connect Metamask
          </button>
        )}
        
      </div>
      
    </div>
  );
}

export default App;
