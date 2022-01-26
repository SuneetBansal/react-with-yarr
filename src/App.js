import React from 'react';
import { Suspense } from 'react';
import { RouteRenderer } from 'yarr';
import { Header } from './Header';

export default function App() {
  return (
    <Suspense fallback={'...loading'}>
      <RouteRenderer
        pendingIndicator={<p> please wait, loading route. </p>}
        routeWrapper={({ Route }) => (
          <>
            <Header />
            <div className='route'>{Route}</div>
          </>
        )}
      />
    </Suspense>
  );
}
