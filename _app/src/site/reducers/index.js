import { transformContentsToCategoryFilter, transformContentsToTypeFilter, transformContentsToInstitutionFilter, transformSpeakersImages} from '../utils';

/**
 * Reducer for Category Filter
 */
export const categoryFilterReducer = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_FETCH_DATA':
            if (action.requestId === 'getContents' && action.data && action.data.length) {
                if (action.data[0].type === 'talks' || action.data[0].type === 'speakers' || action.data[0].type === 'abstracts') {
                    return transformContentsToCategoryFilter(action.data);
                }
            }
            return state;
        default:
            return state;
    }
};

/**
 * Reducer for Speaker Type Filter
 */
export const typeFilterReducer = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_FETCH_DATA':
            if (action.requestId === 'getContents' && action.data && action.data.length) {
                if (action.data[0].type === 'speakers') {
                    return transformContentsToTypeFilter(action.data);
                }
            }
            return state;
        default:
            return state;
    }
};

/**
 * Reducer for Institution Filter
 */
export const institutionFilterReducer = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_FETCH_DATA':
            if (action.requestId === 'getContents' && action.data && action.data.length) {
                if (action.data[0].type === 'speakers') {
                    return transformContentsToInstitutionFilter(action.data);
                }
            }
            return state;
        default:
            return state;
    }
};


/**
 * Reducer for Speakers Images
 */
export const speakersImagesReducer = (state = {}, action) => {
    switch (action.type) {
        case 'RECEIVE_FETCH_DATA':
            if (action.requestId === 'getSpeakersImages') { 
                return Object.assign({}, state, transformSpeakersImages(action.data)); 
            }
            return state;
        default:
            return state;
    }
};
