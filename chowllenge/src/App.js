import logo from './logo.svg';
import './App.css';
import DocumentMeta from 'react-document-meta';


const meta = {
  title: 'Title',
  meta: {
      charset: 'utf-8',
      name: {
          name:"mobile-web-app-capable", 
          content:"yes",
          keywords: 'react,meta,document,html,tags'
      }
  }
}

function App() {

  return (
    <div className="App">
      Yoe
      <DocumentMeta {...meta} />
      <div style={{"background-color":"blue","color":"white"}}>Zander Code</div>
    </div>
  );
}

export default App;
