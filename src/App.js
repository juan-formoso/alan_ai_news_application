import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = 'ccfa9b86bdc10c97137f17d731f6cd502e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if(command === 'testCommand') {
          alert('This code was executed');
        }
      }
    })
  }, [])
  return(
    <div>
      <h1>Alan AI News Application</h1>
    </div>
  );
}

export default App;
