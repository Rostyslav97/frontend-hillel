// import HtmlRender from './components/HtmlRender';
// import CssRender from "./components/CssRender";
// import Button from "./components/Button";
import ButtonCN from "./components/ButtonCN"
import Alert from "./components/Alert"
import IgnoreFirstChild from "./components/IgnoreFirstChild";

function App() {
  return (
    <div className="App">
      {/*<HtmlRender />*/}
      {/*<CssRender />*/}
      {/*<hr/>*/}
      {/*<h3> default btn classes</h3>*/}
      {/*<Button label="Кнопка 1" isPressed />*/}


      {/*<h3> btn with cn lib</h3>*/}
      {/*<ButtonCN label={"Кнопка 2"} isHovered />*/}

      <h3>Bootstrap Alert</h3>
        {/*<Alert type='danger'>*/}
        {/*    <h4 className="alert-heading">Well done!</h4>*/}
        {/*    <p>*/}
        {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem,*/}
        {/*        praesentium?*/}
        {/*    </p>*/}
        {/*</Alert>*/}


        <IgnoreFirstChild >
            <h4 className="alert-heading">Well done!</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem,
                praesentium?
            </p>
        </IgnoreFirstChild>

    </div>
  );
}

export default App;
