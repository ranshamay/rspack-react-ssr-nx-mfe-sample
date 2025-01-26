import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
const RemoteComponent = React.lazy(() => import('sampleRemote/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <RemoteComponent />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="mf-host" />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
