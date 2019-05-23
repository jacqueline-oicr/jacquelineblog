import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { locationShape } from 'react-router';
import { toggleFilter } from 'wfui-react/lib/util/visibilityFilter';

import { truncateString } from '../../utils';
import { TALKS_OVERVIEW_MAX_LENGTH } from '../../constants';

class Talk extends Component {
    constructor() {
        super();

        this.onHandleFilterClick = this.onHandleFilterClick.bind(this);
    }

    onHandleFilterClick(e) {
        e.preventDefault();
        this.props.toggleFilter({
            key: 'filter',
            value: e.target.getAttribute('data-value'),
        });
    }
    render() {
        const {
            item: {
                data: {
                    attributes: {
                        title,
                        about_txt,
                        permalink,
                        categories_list,
                        speakerName_txt,
                        speakerTitle_txt,
                    },
                },
            },
            location,
            intl,
        } = this.props;

        const link = `${permalink}${location.search}`;

        return (
            <div
                className="card-box talk-card-box"
                data-filter={JSON.stringify(
                    categories_list && categories_list.length
                        ? categories_list.map(category => category.category_txt)
                        : [],
                )}
            >
                <p className="title">
                    <a href={link}>{title}</a>
                </p>
                <div className="description">
                    {about_txt && about_txt.length > TALKS_OVERVIEW_MAX_LENGTH ? (
                        <p className="overview">
                            {`${truncateString(about_txt, TALKS_OVERVIEW_MAX_LENGTH)} `}
                            <a href={link} className="talk-read-more">
                                {intl.formatMessage({
                                    id: 'readMore_txt',
                                    defaultMessage: 'Read More',
                                })}
                            </a>
                        </p>
                    ) : (
                        <p className="overview">{about_txt}</p>
                    )}
                </div>
                {categories_list && categories_list.length && (
                    <div className="tag">
                        {categories_list.map(category => (
                            <button
                                className="btn btn-default"
                                data-value={category.category_txt}
                                onClick={this.onHandleFilterClick}
                                key={category.category_txt}
                            >
                                {category.category_txt}
                            </button>
                        ))}
                    </div>
                )}
                <p className="speaker-name">{speakerName_txt}</p>
                <p className="speaker-title">{speakerTitle_txt}</p>
            </div>
        );
    }
}

Talk.propTypes = {
    intl: PropTypes.object,
    item: PropTypes.shape({
        data: PropTypes.shape({
            attributes: PropTypes.shape({
                title: PropTypes.string,
                about_txt: PropTypes.string,
                permalink: PropTypes.string,
                categories_list: PropTypes.array,
                speakerName_txt: PropTypes.string,
                speakerTitle_txt: PropTypes.string,
            }),
        }),
    }),
    toggleFilter: PropTypes.func,
    location: locationShape,
};

export default connect(
    () => ({}),
    { toggleFilter },
)(Talk);
