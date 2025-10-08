import React from 'react';
import Section from './Section';
import SectionFragment from "./SectionFragmen";
import SectionFragmentShort from './SectionFragmenShort'

class Article extends React.Component {
    render() {
        return (
            <article style={{maxWidth: '1200px', margin: '0 auto'}}>
                <h1>Article component</h1>

                <h4>Заголовок статьи - Обычный section</h4>
                <Section header={'Hello section'} body={'Section body'}/>

                <hr/>

                <h4>React.Fragment Section</h4>
                <SectionFragment header={'Hello React.Fragment section'} body={'React.Fragment Section body'} />

                {/*<hr/>*/}

                <h4>React.Fragment Section Short Syntax</h4>
                <SectionFragmentShort
                    header={'Hello React.Fragment Section Short Syntax'}
                    body={'React.Fragment Section Short Syntax Section body'}
                />
            </article>
        );
    }
}

export default Article;