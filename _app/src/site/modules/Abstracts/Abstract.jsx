import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { locationShape } from 'react-router';
import { toggleFilter } from 'wfui-react/lib/util/visibilityFilter';

class Abstract extends Component {
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
                        categories_list,
                        permalink,
                        posternumber_ti,
                        title,
                    },
                },
            },
            location,
        } = this.props;

        return (
            <a
                className="card-box abstract-card-box"
                data-filter={JSON.stringify(
                    categories_list && categories_list.length
                        ? categories_list.map(category => category.category_txt)
                        : []
                )}
                href={`${permalink}${location.search}`}
            >
                <p className="poster-num">POSTER NO: {posternumber_ti}</p>
                <div className="box">
                    <img src="/assets/site/images/icon-abstract.svg" />
                    <p className="title">{title}</p>
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
                </div>
            </a>
        );
    }
}

Abstract.propTypes = {
    item: PropTypes.shape({
        data: PropTypes.shape({
            attributes: PropTypes.shape({
                categories_list: PropTypes.array,
                permalink: PropTypes.string,
                posternumber_ti: PropTypes.number,
                title: PropTypes.string,
            }),
        }),
    }),
    toggleFilter: PropTypes.func,
    location: locationShape,
};

export default connect(
    () => ({}),
    { toggleFilter }
)(Abstract);
