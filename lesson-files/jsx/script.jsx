const name = 'Eva';
const cname = 'container';

const vdom1 = <div>Hello, {name}</div>;
const vdom2 = <div>Hello, {name.repeat(3)}</div>;
const vdom3 = <div className={cname}>Hello!</div>;


const name2 = 'Mike';
const vdom4 = block ? <div>hello, {name}</div> : <span>i am span</span>;

const vdom5 = <div>
    {isAdmin ? <p><a href="#">{text}</a></p> : <p>{text}</p>}
    <Hello />
</div>;

// React.createElement("div", {id: if (condition) { 'msg' }}, "Hello World!");

function account() {
    let button;
    if (loggedIn) {
        button = <LogoutButton />;
    } else {
        button = <LoginButton />;
    }

    return (
        <nav>
            <Home />
            {button}
        </nav>
    );
}

function example() {
    const vdom = (
        <div>
            <Hello />
            <Hello />
            <AnotherComponent>
                <p>What is love</p>
            </AnotherComponent>
        </div>
    );
}