import './App.css';
import Card from './Components/Card/Card';

function App() {
  const dummy_cards = [
    {
      image: '/images/coding.jpg',
      title: 'This is a one line title',
      paragraph: 'Two line paragraph, Lorem ipsum dolor sit amet, consectetur',
      price: 1050,
      discount: 250, 
      extra: {
        hr: 10,
        attendance: 308,
        lectures: 17,
      },
    },
    {
      image: '/images/study.jpg',
      title: 'This is a one line title',
      paragraph: 'Two line paragraph, Lorem ipsum dolor sit amet, consectetur',
      price: 750,
      discount: 0, 
      extra: {
        hr: 10,
        attendance: 308,
        lectures: 17,
      },
    },
    {
      image: '/images/iphone.jpg',
      title: 'This is a one line title',
      paragraph: 'Two line paragraph, Lorem ipsum dolor sit amet,',
      price: 0,
      discount: 0,
      extra: {
        hr: 10,
        attendance: 308,
        lectures: 17,
      },
    },
  ]

  return (
    <div className="App">
      <center className='container'>
        {dummy_cards.map(card => {
          return <Card card={card}/>
        })}
      </center>
    </div>
  );
}

export default App;
