> Файли проекту - lesson-files/props

# Передача даних у компоненти

Уявімо ситуацію, ми розробляємо інтернет-магазин і нам потрібно на головній сторінці сайту реалізувати
карусель з прев'ю товарів, хоча верстка кожного окремого товару в каруселі і однакова, але дані самого товару
різні, товари можуть відрізнятися між собою зовнішнім виглядом, описом, ціною, знижкою тощо. Чи буде правильно створювати
для кожного товару в каруселі свій окремий компонент? Звичайно ж ні, ми б хотіли створити один компонент і
перевикористовувати його кілька разів, скільки? Стільки разів скільки товарів у нашій каруселі, але для того щоб
перевикористовувати компонент з іншими даними, нам необхідно мати можливість ці самі дані передати в компонент
при його вбудовуванні.

Передавати дані в компоненти можна, і робиться це за допомогою пропсів (**props**):

> Див: файли:
> - lesson-files/props/src/components/HelloMessage.jsx
> - lesson-files/props/src/App.jsx

```jsx
// HelloMessage.jsx
import React from "react";

class HelloMessage extends React.Component {
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}

export default HelloMessage;
    
// App.jsx
import HelloMessage from "./components/HelloMessage";

function App() {
  return (
    <div className="App">
      <HelloMessage name="Vladimir" />
    </div>
  );
}

export default App;
```

Як видно, ззовні пропси передаються як атрибути в HTML, які всередині компонента доступні з об'єкта `props`.
При цьому така передача вхідних даних для вас вже повинна бути не новиною. Вбудовані компоненти точно так само
приймають на вхід пропси, такі як `className` та інші.

```jsx
const vdom = (
  <div className="row">
    <div className="col-6">
      <HelloMessage name="Kate" />
    </div>
    <div className="col-6">
      <HelloMessage name="Mark" />
    </div>
  </div>
);
```
Пропси — дуже простий механізм передачі даних у компоненти, який, як правило, не викликає ніяких складнощів.
Головне, що потрібно запам'ятати при роботі з пропсами: їх не можна змінювати. По-перше, через принцип роботи React це
просто ні до чого не призведе, по-друге, для роботи зі змінним станом в React передбачений абсолютно інший
механізм, який буде розглянуто пізніше.

### Оператор розширення

Працюючи з пропсами, часто доводиться передавати багато параметрів, або ці параметри присутні в коді у вигляді
об'єкта. У такому випадку можна спростити передачу, використовуючи оператор розширення _(spread-оператор)_.

> Див: файли:
> 
> lesson-files/props/src/components/Alert.jsx
> 
> lesson-files/props/src/App.jsx


```jsx
// Alert.jsx
import React from "react";

class Alert extends React.Component {
    render() {
        return <div
            className="alert"
            {...this.props}
        >
            This is alert component
        </div>;
    }
}

export default Alert;

// App.jsx 
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <Alert name='Some name' type='Some type' quantity={100} />
    </div>
  );
}

export default App;
```

### Пропси за замовчуванням
> Див. файл - lesson-files/props/src/components/Header.jsx

Інша задача, з якою стикаються розробники — встановлення значень за замовчуванням для пропсів (для випадків, коли
деякі пропси не передані). Простіше всього встановлювати їх прямо всередині функції **render**, використовуючи такий підхід:

```jsx
const title = this.props.title || 'hi!';
```

Це спрацює, але потенційно може призвести до проблем з продуктивністю (перш за все).
Тема продуктивності буде розглянута пізніше.

У React передбачений спосіб встановлювати значення пропсів за замовчуванням. Приклад:

```jsx
class Header extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <h1>{text}</h1>
    );
  }
}

Header.defaultProps = {
  text: 'Hello, world!',
};
```
