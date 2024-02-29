import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import Temporary from "./components/Temporary";
import styles from "./App.module.css";
function App()
{
  return <center>
      <div className={styles.calculator}>
      <Display></Display>
      <ButtonsContainer></ButtonsContainer>
    </div>
    <Temporary></Temporary>
  </center>
}
export default App;