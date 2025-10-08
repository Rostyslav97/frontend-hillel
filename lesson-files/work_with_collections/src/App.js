// import List from './components/List';
// import ListSeparateMethod from "./components/ListSeparateMethod";
import ListWithPropKey from "./components/ListWithPropKey";
import Article from './components/Fragment/Article'

function App() {
    const items = [
        {id: 1, name: 'first' },
        {id: 2, name: 'second' },
        {id: 3, name: 'third' },
    ];
    //

    return (
    <div className="App">
      {/*<h3>- Basic list component</h3>*/}
      {/*<List data={items}/>*/}

      {/*<hr/>*/}

      {/*<h3>- List component with separate method</h3>*/}
      {/*<ListSeparateMethod data={items}/>*/}

      {/*<hr/>*/}

       {/*<h3>- List with key property</h3>*/}
       {/*<ListWithPropKey data={items} />*/}

       {/*<hr/>*/}

       <h3>-</h3>
       <Article />
    </div>
  );
}

export default App;
