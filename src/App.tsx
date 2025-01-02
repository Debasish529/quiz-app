import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Quiz from './components/Quiz';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <Quiz />
      </div>
    </Provider>
  );
}

export default App;