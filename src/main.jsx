import { createRoot } from 'react-dom/client';

const desc =
  'I just learned how to create a react node and render it from the DOM';
const myTitleId = 'main-title';
const name = 'Brittany';

const heading = 'The Rules of JSX';
const list = (
  <>
    <li>Return a single root element.</li>
    <li>Close all the tags!</li>
    <li>camelCase most of the things.</li>
  </>
);

const element = (
  <>
    <h1 id={myTitleId}>{name}'s First React Elemement</h1>
    <p className="main-desc">{desc}</p>
    <input value={10 * 20} />
    <h2><strong>{heading}</strong></h2>
    <ol>{list}</ol>
  </>
);

const img = <img src="image.jpg" />;

const root = createRoot(document.getElementById('root'));
root.render(element);
