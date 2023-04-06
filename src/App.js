import './App.css';

function App() {
  return (
  <main>
    <header>
      <a href='' className='logo'>MyBlog</a>
      <nav>
        <a href=''>Login</a>
        <a href=''>Register</a>
      </nav>
    </header>

        <div className='post'>
          <div className='image'>
          <img src='https://images.pexels.com/photos/1784919/pexels-photo-1784919.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1'/>
          </div>
          <div className='texts'>
          <h2>Cryptocurrency: Opportunities and Risks</h2>
          <p className='info'>
            <a className='author'>Jane smith</a>
            <time>April 6, 2023 10:00 AM</time>
          </p>
          <p className='summary'>Cryptocurrencies have been around for over a decade, but their popularity has surged in recent years. While some investors have made significant profits, others have lost everything. The market is highly volatile, and there is a risk of scams and hacks. That being said, cryptocurrency has the potential to disrupt traditional finance and create new opportunities for investment. As with any investment, it is important to do your research and proceed with caution.</p>
          </div>
        </div>
        <div className='post'>
          <div className='image'>
          <img src='https://images.pexels.com/photos/1203819/pexels-photo-1203819.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1'/>
          </div>
          <div className='texts'>
          <h2>The Rise of Voice Assistants</h2>
          <p className='info'>
            <a className='author'>Mark Johnson</a>
            <time> April 6, 2023 11:00 AM</time>
          </p>
          <p className='summary'>Voice assistants have become ubiquitous in many households, with millions of people using them to play music, control smart home devices, and get information. As the technology continues to improve, we can expect to see voice assistants become even more integrated into our daily lives. However, there are also concerns around privacy and security, as well as the potential for voice assistants to exacerbate existing inequalities. It will be important for developers to address these concerns as the technology continues to evolve.</p>
          </div>
        </div>
   
  </main>
  );
}

export default App;
