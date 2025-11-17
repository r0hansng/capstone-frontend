import { RouterProvider } from 'react-router-dom';
import Routes from './routes/Routes';

const options1 = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' }
];

const App = () => {
  return (
    <RouterProvider router={Routes} />
  );
};

export default App;
