import React from 'react';

import FaqsContainer from '../containers/faqs.js';
import FooterContainer from '../containers/footer.js';
import JumbotronContainer from '../containers/jumbotron.js';
import HeaderContainer from '../containers/header.js';

function Home() {
    return (
        <div>
            <HeaderContainer/>
            <JumbotronContainer/>
            <FaqsContainer />
            <FooterContainer />
        </div>
    )
}

export default Home;
