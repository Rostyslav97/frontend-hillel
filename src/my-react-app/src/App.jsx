import { useState, useRef, useEffect } from 'react';



function App() {
  return (
    <h1>Hello React!</h1>
  );
}




// function App() {
//   return (
//     <div>
//       <h1>Welcome</h1>
//       <img src="https://picsum.photos/200" alt="Random" />
//     </div>
//   );
// }




// function App() {
//   const items = ['Apple', 'Banana', 'Orange'];
//   return (
//     <ul>
//       {items.map(item => <li key={item}>{item}</li>)}
//     </ul>
//   );
// }




// function App() {
//   const isLoggedIn = true;
//   return (
//     <div>
//       {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in</h1>}
//     </div>
//   );
// }




// function App() {
//   function handleClick() {
//     alert('Button clicked!');
//   }
//   return <button onClick={handleClick}>Click me</button>;
// }



// function Profile({ name, imageUrl }) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <img src={imageUrl} alt={name} width="100" />
//     </div>
//   );
// }
//
// function App() {
//   return (
//     <div>
//       <Profile name="Alice" imageUrl="https://i.pravatar.cc/100?img=1" />
//       <Profile name="Bob" imageUrl="https://i.pravatar.cc/100?img=2" />
//     </div>
//   );
// }



// function App() {
//   const [count, setCount] = useState(0);
//
//   function handleClick() {
//     setCount(count + 1);
//   }
//
//   return (
//     <div>
//       <h1>Clicks: {count}</h1>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// }





//
// function App() {
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//
//   return (
//     <div>
//       <input
//         placeholder="Name"
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <input
//         placeholder="Age"
//         value={age}
//         onChange={e => setAge(e.target.value)}
//       />
//       <h2>{name} is {age}</h2>
//     </div>
//   );
// }


//
// function Child({ value, onChange }) {
//   return (
//     <input value={value} onChange={e => onChange(e.target.value)} />
//   );
// }
//
// function App() {
//   const [text, setText] = useState('');
//   return (
//     <div>
//       <Child value={text} onChange={setText} />
//       <Child value={text} onChange={setText} />
//       <p>You typed: {text}</p>
//     </div>
//   );
// }




// function App() {
//   const inputRef = useRef(null);
//
//   function handleFocus() {
//     inputRef.current.focus();
//   }
//
//   useEffect(() => {
//     console.log("Component mounted");
//     return () => console.log("Component unmounted");
//   }, []);
//
//   return (
//     <div>
//       <input ref={inputRef} placeholder="Type here" />
//       <button onClick={handleFocus}>Focus input</button>
//     </div>
//   );
// }


// function App() {
//     return (
//         <h1>React Learn Examples</h1>
//     );
// }

export default App;
