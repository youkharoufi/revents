import React, {useState} from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";

function App() {

  // const title = React.createElement('h1', {}, 'Revents no JSX');
  // const div = React.createElement('div', {className:'App'}, title);

  const [showNavBar, setShowNavbar] = useState(false)

  return (
    <>
      {!showNavBar &&
      <HomePage setShowNavBar={setShowNavbar}/>
      }
      {showNavBar &&
      <NavBar setShowNavBar={setShowNavbar}/>
      }
      {/* <button className='ui icon red button'>
        <i className='user icon'/> CSS Button
      </button>
      <Button icon='user' content='React Button' color='green'/> */}
      <Container className="main">
      <Routes>
      <Route exact path='/' element={<HomePage setShowNavBar={setShowNavbar}/>}/>
      <Route path='/events' element={<EventDashboard/>}/>
      <Route path='/events/:id' element={<EventDetailedPage/>}/>
      <Route path={'/createEvent'} element={<EventForm/>}/>
      <Route path={'/manage/:id'} element={<EventForm/>}/>

      </Routes>


      </Container>
    </>
    
  );
}

export default App;
