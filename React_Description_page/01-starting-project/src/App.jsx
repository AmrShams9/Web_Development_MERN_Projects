import reactImg from './assets/react-core-concepts.png';
import reactComponent from './assets/Components.png';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import TabButton from './Components/TabButton';
import { useState } from 'react';



const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[genRandomInt(2)]} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}
function CoreConcepts({image, title, description}){
  return(
  <li>
    <img src={image} alt={title}/>
    <h3>{title}</h3>
    <p>{description}.</p>
  </li>);
}

 
function App() {
  const [selectedTopic, setSelectedTopic] = useState('components');
  function handleSelect(selectedButton) {
    
    setSelectedTopic(selectedButton, () => {
    console.log('You selected: ' + selectedButton );
    });
  }
  let tabContent = <p>Please Select a Topic.</p>
  if (selectedTopic) {
    tabContent = ( <div id="tab-content" >

      <h3>{EXAMPLES[selectedTopic]?.title} </h3>
      <p>{EXAMPLES[selectedTopic]?.description}</p>
      <pre>
        <code> {EXAMPLES[selectedTopic]?.code}</code>
      </pre>
    </div>);

  }
    

  return (
    <div>
      <Header />
      <main>
      <section id="core-concepts">
      <h2>Core Concepts:</h2>
      <ul>
      {CORE_CONCEPTS.map((conceptItem) => (<CoreConcepts key={conceptItem.title} {...conceptItem} />))}
      
      </ul>
      </section>
      <section id='examples'>
        <h2>Examples</h2>
        <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Component</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'pros'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>


        </menu>
         
         {tabContent}
        
      </section>
      </main>
    </div>
    
  );
}

export default App;