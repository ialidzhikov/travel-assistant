import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { TestApp } from './test-app';

const render = Component => {
    ReactDOM.render( 
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('root')
    );
};

render(TestApp);

if (module.hot) {
    module.hot.accept('./test-app', () => { render(TestApp); });
}