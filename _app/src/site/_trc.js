/* global document, fetch */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider as CoreProvider, Core } from 'oicr-ui-core';
import { getContents } from 'oicr-ui-core/lib/core/modules/content_manager/actions';
import { attributesSelector } from 'oicr-ui-core/lib/core/selectors';

// import Talks from './modules/Talks/TalksContainer';

import Speakers from './modules/Speakers/SpeakersContainer';

import Abstracts from './modules/Abstracts/AbstractsContainer';

import store from './store';

const { getPageContent } = Core.actions;

// const targetTalks = document.getElementById('talks-container');
// if (targetTalks) {
//     // Get talks
//     getContents('{"type":"talks"}')(store.dispatch);
//     getPageContent('__pages/talks.md')(store.dispatch);

//     ReactDOM.render(
//         <CoreProvider
//             store={store}
//             selector={state => attributesSelector(['__pages/talks.md'])(state)}
//         >
//             <Router history={hashHistory}>
//                 <Route path="/" component={Talks} />
//             </Router>
//         </CoreProvider>,
//         targetTalks,
//     );
// }

const targetSpeakers = document.getElementById('speakers-container');
if (targetSpeakers) {
    // Get speakers
    getContents('{"type":"speakers"}')(store.dispatch);
    getPageContent('__pages/speakers.md')(store.dispatch);

    ReactDOM.render(
        <CoreProvider
            store={store}
            selector={state =>
                attributesSelector(['__pages/speakers.md'])(state)
            }
        >
            <Router history={hashHistory}>
                <Route path="/" component={Speakers} />
            </Router>
        </CoreProvider>,
        targetSpeakers
    );
}

const targetAbstracts = document.getElementById('abstracts-container');
if (targetAbstracts) {
    // Get abstracts
    getContents('{"type":"abstracts"}')(store.dispatch);
    getPageContent('__pages/abstracts.md')(store.dispatch);

    ReactDOM.render(
        <CoreProvider
            store={store}
            selector={state =>
                attributesSelector(['__pages/abstracts.md'])(state)
            }
        >
            <Router history={hashHistory}>
                <Route path="/" component={Abstracts} />
            </Router>
        </CoreProvider>,
        targetAbstracts
    );
}
