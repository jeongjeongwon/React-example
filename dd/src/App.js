// import logo from './logo.svg';
import './App.css';
import Diary from './Diary';
import './Diary.css'
import Form from './Form';
import './Form.css'

function App() {
  return (
    <Diary form={<Form />}>
      리스트 출력장소
    </Diary>
  )
}

export default App;
