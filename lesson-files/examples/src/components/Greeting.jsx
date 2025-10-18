import React from "react";

const Greeting = React.memo(({ name }) => {
    console.log('Рендеринг');
    return <h1>Hello, {name}!</h1>;
});

export default Greeting;
