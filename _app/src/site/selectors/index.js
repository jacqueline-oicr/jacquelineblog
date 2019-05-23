import { createSelector } from 'reselect';

const _contentsSelector = state => state.contents;

export const contentsTypeSelector = type =>
    createSelector(
        _contentsSelector,
        (contents) => {
            if (!contents || contents.length === 0) return [];

            return contents.filter(content => content.type === type && content.data.attributes);
        },
    );
