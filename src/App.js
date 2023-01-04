import MarkdownInput from './components/MarkdownInput';
import MarkdownPreviewer from './components/MarkdownPreviewer';
import { Badge } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row mt-3">
          <div className="col text-center">
            <h1>
              <Badge className='text-align-center' varient='light'>
                Markdown Previewer
              </Badge>
            </h1>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <MarkdownInput />
          </div>
          <div className="col-md-6">
            <MarkdownPreviewer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
