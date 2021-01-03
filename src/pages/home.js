import React from 'react';

import FaqsContainer from '../containers/faqs.js';
import FooterContainer from '../containers/footer.js';
import JumbotronContainer from '../containers/jumbotron.js';

function Home() {
    return (
        <div>
            <JumbotronContainer/>
            <FaqsContainer />
            <FooterContainer />
        </div>
    )
}

export default Home
