import { createRoot } from 'react-dom/client';

const desc =
  'I just learned how to create a react node and render it from the DOM';
const myTitleId = 'main-title';
const name = 'Brittany';

const element = (
  <>
    <h1 id={myTitleId}>{name}'s First React Elemement</h1>
    <p className="main-desc">{desc}</p>
    <input value={10 * 20} />
  </>
);

const img = <img src="imapge.jpg" />;

const root = createRoot(document.getElementById('root'));
root.render(element);
