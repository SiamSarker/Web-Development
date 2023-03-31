
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <div>Default Page</div>},
    { path: '/home', element: <div>Home Page</div>},
    { path: '/about', element: <div>This is About Page</div>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
