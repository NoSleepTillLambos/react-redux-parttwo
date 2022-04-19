import './App.css';
import {FormControl, FormGroup,InputGroup} from 'react-bootstrap';

function App() {
  return (
    <div>
      <div className='app-title'></div>
      <FormGroup>
        <InputGroup>
          <FormControl type='text' placeholder='search for an artist...'/>
          
        </InputGroup>
      </FormGroup>
      <div className="profile">
        <div>artist</div>
        <div>artist name</div>
      </div>
      <div className="gallery">
        Gallery
      </div>
    </div>
  );
}

export default App;
