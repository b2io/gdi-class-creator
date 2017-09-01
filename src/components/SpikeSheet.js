import React from 'react';
import withSheet from '../hoc/withSheet';

const SpikeSheet = ({ authorizing, data, initializing, loading, onSignIn }) => {
  if (initializing || loading) return <span>Loading…</span>;
  if (authorizing) return <button onClick={onSignIn}>Sign In</button>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default withSheet(
  {
    apiKey: 'AIzaSyDivD-NRQI6ZuQg4-YKhCVuurvSLcnN_VE',
    clientId: '970132757117-rrcscigc529fldpmadc5jjrgp62e61qg.apps.googleusercontent.com',
    sheetId: '1HV8z8zi1cWg78zlO_4pqMls7zaODwUxq8GGbQJv8sqY',
  },
  ["'Harvest Export'!A:T"],
)(SpikeSheet);
