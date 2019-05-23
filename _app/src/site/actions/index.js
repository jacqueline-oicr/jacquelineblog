import { wfuiFetch } from 'wfui-react/lib/util';
import * as Const from '../constants';

export const getSpeakersImages = (paths, withCredentials) => (dispatch) => {
    const req = wfuiFetch(
        `//${Const.API_HOST}${Const.API_LIST_CONTENTS}`.replace(
            '[CONTENT_PATHS]',
            JSON.stringify(paths),
        ),
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'app-id': Const.APP_ID,
            },
            requestId: 'getSpeakersImages',
            credentials: withCredentials ? 'include' : 'omit',
        },
        dispatch,
    );
    return req.promise;
};
