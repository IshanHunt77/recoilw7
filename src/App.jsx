import { RecoilRoot } from 'recoil'; // Import RecoilRoot from recoil
import './App.css';
import { Count } from './Count';
import { Todo } from './Todo';
import { Link } from './Link';

function App() {
  return (
    <>
      <RecoilRoot>
        {/* <Count />
        <Todo/> */}
        <Link/>
      </RecoilRoot>
    </>
  );
}

export default App;
