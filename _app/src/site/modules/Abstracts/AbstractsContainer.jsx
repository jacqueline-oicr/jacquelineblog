/* global window, document */
import React from 'react';
import { locationShape } from 'react-router';
import PropTypes from 'prop-types';
import {
    FilterItem,
    FilterFields,
    IsotopeGrid,
    LoadingComponent,
} from 'wfui-react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { fetchSelector } from 'wfui-react/lib/util';
import {
    changeFilter,
    toggleFilter,
} from 'wfui-react/lib/util/visibilityFilter';
import _ from 'lodash';

import Abstract from './Abstract';
import { contentsTypeSelector } from '../../selectors';

const { renderTextFilter } = FilterFields;

class AbstractsContainer extends React.Component {
    constructor() {
        super();
        this.state = { numOfItems: 0 };
        this.onHandleFilterClick = this.onHandleFilterClick.bind(this);
    }

    componentWillMount() {
        const {
            location: { query },
        } = this.props;

        const abstractsFilter = [];

        if (query.filter) {
            abstractsFilter.push({
                key: 'filter',
                value: query.filter.split(',') || [],
            });
        }

        this.props.changeFilter(abstractsFilter);
    }

    componentWillReceiveProps(nextProps) {
        const {
            location: { query },
        } = this.props;

        if (query.filter && !nextProps.location.query.filter) {
            this.props.changeFilter([
                {
                    key: 'filter',
                    value: [],
                },
            ]);
        } else if (nextProps.location.query.filter !== query.filter) {
            this.props.changeFilter([
                {
                    key: 'filter',
                    value: decodeURI(nextProps.location.query.filter).split(
                        ','
                    ),
                },
            ]);
        }
    }

    onHandleFilterClick(e) {
        e.preventDefault();
        this.props.toggleFilter({
            key: 'filter',
            value: e.target.getAttribute('data-value'),
        });
    }

    getFilters() {
        const { filter } = this.props.visibilityFilter.category;
        return [
            item => {
                const select = item.querySelector('.abstract-card-box');

                return (
                    select &&
                    (!filter ||
                        !filter.length ||
                        JSON.parse(select.dataset.filter).some(item =>
                            filter.includes(item)
                        ))
                );
            },
        ];
    }

    generateFilterUI() {
        const {
            intl,
            visibilityFilter: {
                category: { filter },
            },
            categoryFilter,
        } = this.props;

        return (
            <div id="news-filter" className="section">
                <div className="filter-wrapper">
                    <div className="full-width filters">
                        <div className="filter-label">
                            {intl.formatMessage({
                                id: 'filterTypes_list.0.title_txt',
                            })}
                        </div>
                        {categoryFilter.map(item => (
                            <div className="filter-item" key={item}>
                                <button
                                    className={`btn btn-default btn-filter ${
                                        filter && filter.includes(item)
                                            ? 'active'
                                            : ''
                                    }`}
                                    data-value={item}
                                    onClick={this.onHandleFilterClick}
                                >
                                    {item}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const {
            visibilityFilter: {
                category: { searchTerm },
            },
            intl,
            location,
            abstracts,
            fetchContents,
        } = this.props;

        return (
            <div className="container">
                <div className="row header-row">
                    <div className="header">
                        <div className="row flex-stretch-row">
                            <div className="col-md-9 col-xs-12 filter-container">
                                <div className="filters-row">
                                    {this.generateFilterUI()}
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-12 search-container">
                                <FilterItem
                                    name="searchTerm"
                                    label={intl.formatMessage({
                                        id: 'labels_list.search_txt',
                                        defaultMessage: 'Search',
                                    })}
                                    location={location}
                                    component={renderTextFilter}
                                    placeholder={intl.formatMessage({
                                        id: 'search_txt',
                                        defaultMessage: 'Search Abstract',
                                    })}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <LoadingComponent {...fetchContents}>
                    <div className="abstracts-row">
                        {abstracts && abstracts.length > 0 && (
                            <IsotopeGrid
                                xs={12}
                                sm={6}
                                md={4}
                                lg={4}
                                id="news-box-isotope"
                                className="card-grid"
                                filterList={this.getFilters()}
                                searchTerm={searchTerm}
                                onArrangeComplete={items => {
                                    this.setState({
                                        numOfItems: items.length,
                                    });
                                }}
                            >
                                {abstracts.sort(
                                    (a, b) =>
                                        a.data.attributes.posternumber_ti -
                                        b.data.attributes.posternumber_ti
                                ) &&
                                    abstracts.map(item => (
                                        <IsotopeGrid.Item
                                            key={item._id}
                                            className={`card-container ${
                                                item.sizer
                                                    ? ' wfui-isotope-grid-sizer'
                                                    : ''
                                            }`}
                                            item={item}
                                            itemDisplay={
                                                <Abstract location={location} />
                                            }
                                        />
                                    ))}
                            </IsotopeGrid>
                        )}
                    </div>
                </LoadingComponent>
            </div>
        );
    }
}

AbstractsContainer.propTypes = {
    visibilityFilter: PropTypes.object,
    changeFilter: PropTypes.func,
    toggleFilter: PropTypes.func,
    intl: PropTypes.object,
    abstracts: PropTypes.arrayOf(PropTypes.object),
    abstractsImages: PropTypes.object,
    categoryFilter: PropTypes.arrayOf(PropTypes.string),
    countryFilter: PropTypes.arrayOf(PropTypes.string),
    fetchContents: PropTypes.object,
    location: locationShape,
};
AbstractsContainer.defaultPropTypes = {
    changeFilter: f => f,
};

export default connect(
    state => ({
        abstracts: contentsTypeSelector('abstracts')(state) || [],
        abstractsImages: state.abstractsImages,
        categoryFilter: state.categoryFilter || [],
        countryFilter: state.countryFilter || [],
        visibilityFilter: state.visibilityFilter,
        fetchContents: fetchSelector('getContents')(state) || {},
    }),
    { changeFilter, toggleFilter }
)(injectIntl(AbstractsContainer));
