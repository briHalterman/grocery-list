import { createRoot } from 'react-dom/client';

const element = <h1>My First React Element</h1>;

const root = createRoot(document.getElementById('root'));
root.render(element);
