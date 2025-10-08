> Файли проекту - lesson-files/work_with_collections

# Робота з колекціями

У роботі з колекціями елементів в JSX більшою мірою немає нічого особливого. З іншого боку, задача обробки
списків елементів настільки часта, що буде не зайвим її окремо обговорити.

> Див. файли:
> 
> lesson-files/work_with_collections/src/components/List.jsx
>
>lesson-files/work_with_collections/src/App.jsx

```jsx
// List.jsx
import React from 'react';

class List extends React.Component {
    render() {
        const { data } = this.props

        return (
            <ul>
                {data.map(item => <li>{item.name}</li>)}
            </ul>
        );
    }
}

export default List;
    
// App.jsx
import List from './components/List';

function App() {
    const items = [
        { name: 'first' },
        { name: 'second' }
    ];


    return (
    <div className="App">
      <List data={items}/>
    </div>
  );
}

export default App;
```

Вище наведений типовий код, в якому колекція генерується прямо в тому місці, куди і підставляється. Тут можна
знову побачити, що всередину JSX вкладено вираз (через {}) всередині якого знову з'являється JSX-код. Зазвичай,
рекурсія на цьому закінчується :). Якщо потрібна більш складна обробка, то має сенс винести генерацію колекції
в метод компонента і викликати його всередині render, наприклад так:

> Див. файли:
>
> lesson-files/work_with_collections/src/components/ListSeparateMethod.jsx
> 
> lesson-files/work_with_collections/src/App.jsx


```jsx
// ListSeparateMethod.jsx
import React from 'react';

class List extends React.Component {
    renderList() {
        const { data } = this.props
        return data.map(item => <li>{item.name}</li>);
    }

    render() {
        return (
            <ul>
               {this.renderList()}
            </ul>
        );
    }
}

export default List;
 
// App.jsx
import ListSeparateMethod from "./components/ListSeparateMethod";

function App() {
    const items = [
        { name: 'first' },
        { name: 'second' }
    ];


    return (
    <div className="App">
      <ListSeparateMethod data={items}/>
    </div>
  );
}

export default App;
```

### Проп key
Для підвищення ефективності, React наполегливо рекомендує ідентифікувати кожен генерований рядок колекції.
Це пов'язано з механізмом, який виробляє зміни в **DOM**. Подробиці про це будуть розказані пізніше, а зараз
потрібно просто запам'ятати, що, генеруючи колекцію елементів в JSX, потрібно обов'язково проставляти унікальний проп `key`,
який не змінюється при повторній генерації колекції. `key` не зобов'язаний бути унікальним в глобальному контексті, достатньо
унікальності серед сусідніх елементів.

Частіше за все з цим завданням не виникає проблем, так як у будь-якої сутності, з якою ми працюємо, є свій ідентифікатор
_(наприклад, primary key з бази даних)_.

> Див. файли:
>
> lesson-files/work_with_collections/src/components/ListWithPropKey.jsx
>
> lesson-files/work_with_collections/src/App.jsx

```jsx
ListWithPropKey.jsx

import React from 'react';

class List extends React.Component {
    render() {
        const { data } = this.props

        return (
            <ul>
                {data.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        );
    }
}
export default List;

// App.jsx
import ListWithPropKey from "./components/ListWithPropKey";

function App() {
    const items = [
        {id: 1, name: 'first' },
        {id: 2, name: 'second' }
    ];

    return (
    <div className="App">
       <h3>List with key property</h3>
       <ListWithPropKey data={items} />
    </div>
  );
}

export default App;
```

Як бачите, нічого складного в цьому немає. Більше того, якщо з якоїсь причини ви забудете вказати `key` в колекції, то
React почне викидати попередження про це прямо в консолі браузера. Тому намагатися запам'ятати коли їх ставити,
коли ні – не треба. У процесі роботи ви і так про це дізнаєтеся і зможете легко виправити.

До речі, `key` не обробляється як звичайний проп і його не можна отримати всередині компонента як `this.props.key`. Якщо вам
потрібні дані, які були передані в key всередині компонента, то просто передайте їх окремим пропом (наприклад, `id`):

```jsx
const content = posts.map((post) =>
  <Post
    key={post.id}
    id={post.id}
    title={post.title}
  />
);
```

### Кореневий елемент компонента

> Див. файли:
>
> lesson-files/work_with_collections/src/components/Fragment/Article.jsx
>
> lesson-files/work_with_collections/src/components/Fragment/Section.jsx
 
Розповсюдженою задачею є повернення декількох елементів без спільного батьківського елемента з одного компонента в інший.
Припустимо, одна стаття містить декілька підзаголовків, тоді її код буде виглядати приблизно так:

```jsx
// Article.jsx

import React from 'react';
import Section from './Section';

class Article extends React.Component {
    render() {
        return (
            <article>
                <h1>Заголовок статті</h1>
                <Section header={'Hello section'} body={'Section body'}/>
            </article>
        );
    }
}

export default Article;
```

**<Section />** має об'єднати і повернути декілька елементів. Якщо використовувати для цих цілей `div`, як
батьківський елемент, то він потрапить у кінцевий HTML:

```jsx
// Section.jsx

import React from 'react';

class Section extends React.Component {
    render() {
        const { header, body } = this.props;

        return (
            <div>
                <h2>{header}</h2>
                <div>{body}</div>
            </div>
        );
    }
}

export default Section;
```

Кінцевий HTML з компонента **<Article />**:

```html
<article>
  <h1>Заголовок статті</h1>
  <div>
    <h2>Підзаголовок</h2>
    <div>Контент</div>
  </div>
</article>
```

Для вирішення цієї задачі, в React ввели спеціальний компонент `<React.Fragment>`, яким можна обгортати будь-яку
колекцію елементів. Його особливість в тому, що цей елемент ніяк не відображається в реальному **DOM**, а існує
тільки на рівні **JSX**.


```jsx
import React from 'react';

class SectionFragment extends React.Component {
    render() {
        const { header, body } = this.props;

        return (
            <React.Fragment>
                <h2>{header}</h2>
                <div>{body}</div>
            </React.Fragment>
        );
    }
}

export default SectionFragment;
```

Тоді результатом виведення **<Article />** буде:

```html
<article>
  <h1>Заголовок статті</h1>
  <h2>Підзаголовок</h2>
  <div>Контент</div>
</article>
```

У цього елемента є коротка версія `<>` запису:

> Див. файл: lesson-files/work_with_collections/src/components/Fragment/SectionFragmenShort.jsx

```jsx
import React from 'react';

class SectionFragment extends React.Component {
    render() {
        const { header, body } = this.props;

        return (
            <>
                <h2>{header}</h2>
                <div>{body}</div>
            </>
        );
    }
}

export default SectionFragment;
```

Виглядає незвично, але працює відмінно! :D
