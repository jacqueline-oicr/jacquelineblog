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

import Speaker from './Speaker';
import { getSpeakersImages } from '../../actions';
import { contentsTypeSelector } from '../../selectors';

const { renderTextFilter } = FilterFields;

class SpeakersContainer extends React.Component {
    constructor() {
        super();
        this.state = { numOfItems: 0 };
        // this.onHandleCategoryClick = this.onHandleCategoryClick.bind(this);
        this.onHandleTypeClick = this.onHandleTypeClick.bind(this);
        this.onHandleInstitutionClick = this.onHandleInstitutionClick.bind(
            this
        );
    }

    componentWillMount() {
        const {
            location: { query },
        } = this.props;

        const speakersFilter = [];

        // if (query.category) {
        //     speakersFilter.push({
        //         key: 'category',
        //         value: query.category.split(',') || [],
        //     });
        // }

        if (query.type) {
            speakersFilter.push({
                key: 'type',
                value: query.type.split(',') || [],
            });
        }

        if (query.institution) {
            speakersFilter.push({
                key: 'institution',
                value: query.institution.split(',') || [],
            });
        }

        this.props.changeFilter(speakersFilter);
    }

    componentWillReceiveProps(nextProps) {
        const {
            location: { query },
            speakers,
            speakersImages,
        } = this.props;

        const newFilter = [];

        // if (query.category && !nextProps.location.query.category) {
        //     newFilter.push({
        //         key: 'category',
        //         value: [],
        //     });
        // } else if (nextProps.location.query.category !== query.category) {
        //     newFilter.push([
        //         {
        //             key: 'category',
        //             value: decodeURI(nextProps.location.query.category).split(
        //                 ','
        //             ),
        //         },
        //     ]);
        // }

        if (query.type && !nextProps.location.query.type) {
            newFilter.push({
                key: 'type',
                value: [],
            });
        } else if (nextProps.location.query.type !== query.type) {
            newFilter.push([
                {
                    key: 'type',
                    value: decodeURI(nextProps.location.query.type).split(','),
                },
            ]);
        }

        if (query.institution && !nextProps.location.query.institution) {
            newFilter.push({
                key: 'institution',
                value: [],
            });
        } else if (nextProps.location.query.institution !== query.institution) {
            newFilter.push([
                {
                    key: 'institution',
                    value: decodeURI(
                        nextProps.location.query.institution
                    ).split(','),
                },
            ]);
        }

        if (newFilter && newFilter.length) {
            this.props.changeFilter(newFilter);
        }

        if (JSON.stringify(speakers) !== JSON.stringify(nextProps.speakers)) {
            const paths = nextProps.speakers
                .filter(
                    p =>
                        p &&
                        p.data &&
                        p.data.attributes &&
                        p.data.attributes.speakerImage_txt &&
                        !speakersImages[p.data.attributes.speakerImage_txt]
                )
                .map(p => p.data.attributes.speakerImage_txt);
            if (paths && paths.length > 0) nextProps.getSpeakersImages(paths);
        }
    }

    // onHandleCategoryClick(e) {
    //     e.preventDefault();
    //     this.props.toggleFilter({
    //         key: 'category',
    //         value: e.target.getAttribute('data-value'),
    //     });
    // }

    onHandleTypeClick(e) {
        e.preventDefault();
        this.props.toggleFilter({
            key: 'type',
            value: e.target.getAttribute('data-value'),
        });
    }

    onHandleInstitutionClick(e) {
        e.preventDefault();
        this.props.toggleFilter({
            key: 'institution',
            value: e.target.getAttribute('data-value'),
        });
    }

    getFilters() {
        const {
            // category,
            type,
            institution,
        } = this.props.visibilityFilter.category;
        return [
            // item => {
            //     const select = item.querySelector('.speaker-card-box');

            //     return (
            //         select &&
            //         (!category ||
            //             !category.length ||
            //             JSON.parse(select.dataset.category).some(item =>
            //                 category.includes(item)
            //             ))
            //     );
            // },
            item => {
                const select = item.querySelector('.speaker-card-box');

                return (
                    select &&
                    (!type ||
                        !type.length ||
                        type.includes(select.dataset.type))
                );
            },
            item => {
                const select = item.querySelector('.speaker-card-box');

                return (
                    select &&
                    (!institution ||
                        !institution.length ||
                        JSON.parse(select.dataset.institution).some(item =>
                            institution.includes(item)
                        ))
                );
            },
        ];
    }

    generateFilterUI() {
        const {
            intl,
            visibilityFilter: {
                category: { type, institution },
            },
            categoryFilter,
            typeFilter,
            institutionFilter,
        } = this.props;

        return (
            <div id="news-filter" className="section">
                <div className="filter-wrapper">
                    {/* <div className="col-xs-12">
                        <div className="filter-label">
                            {intl.formatMessage({
                                id: 'filterTypes_list.0.title_txt',
                            })}
                        </div>
                        {categoryFilter.map(item => (
                            <div className="filter-item" key={item}>
                                <button
                                    className={`btn btn-default btn-filter ${
                                        category && category.includes(item)
                                            ? 'active'
                                            : ''
                                    }`}
                                    data-value={item}
                                    onClick={this.onHandleCategoryClick}
                                >
                                    {item}
                                </button>
                            </div>
                        ))}
                    </div> */}
                    <div className="col-xs-12">
                        <div className="filter-label">
                            {intl.formatMessage({
                                id: 'filterTypes_list.1.title_txt',
                            })}
                        </div>
                        {typeFilter.map(item => (
                            <div className="filter-item" key={item}>
                                <button
                                    className={`btn btn-default btn-filter ${
                                        type && type.includes(item)
                                            ? 'active'
                                            : ''
                                    }`}
                                    data-value={item}
                                    onClick={this.onHandleTypeClick}
                                >
                                    {item}
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="col-xs-12">
                        <div className="filter-label">
                            {intl.formatMessage({
                                id: 'filterTypes_list.2.title_txt',
                            })}
                        </div>
                        {institutionFilter.map(item => (
                            <div className="filter-item" key={item}>
                                <button
                                    className={`btn btn-default btn-filter ${
                                        institution &&
                                        institution.includes(item)
                                            ? 'active'
                                            : ''
                                    }`}
                                    data-value={item}
                                    onClick={this.onHandleInstitutionClick}
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
            speakers,
            speakersImages,
            fetchContents,
            fetchImages,
        } = this.props;

        return (
            <div className="container">
                <div className="row header-row">
                    <div className="header">
                        <div className="row">
                            <div className="col-md-offset-9 col-md-3 col-xs-12 search-container">
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
                                        defaultMessage: 'Search Speakers',
                                    })}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <LoadingComponent {...fetchImages}>
                    <LoadingComponent {...fetchContents}>
                        <div className="row">
                            <div className="col-md-4 col-xs-12 filters-col">
                                {this.generateFilterUI()}
                            </div>
                            <div className="col-md-8 col-xs-12 speakers-col">
                                {speakers && speakers.length > 0 && (
                                    <IsotopeGrid
                                        xs={12}
                                        sm={6}
                                        md={6}
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
                                        {speakers.map(item => (
                                            <IsotopeGrid.Item
                                                key={item._id}
                                                className={`card-container ${
                                                    item.sizer
                                                        ? ' wfui-isotope-grid-sizer'
                                                        : ''
                                                }`}
                                                item={item}
                                                image={
                                                    item.data.attributes
                                                        .speakerImage_txt
                                                        ? speakersImages[
                                                              item.data
                                                                  .attributes
                                                                  .speakerImage_txt
                                                          ]
                                                        : 'initials'
                                                }
                                                itemDisplay={
                                                    <Speaker
                                                        location={location}
                                                    />
                                                }
                                            />
                                        ))}
                                    </IsotopeGrid>
                                )}
                            </div>
                        </div>
                    </LoadingComponent>
                </LoadingComponent>
            </div>
        );
    }
}

SpeakersContainer.propTypes = {
    visibilityFilter: PropTypes.object,
    changeFilter: PropTypes.func,
    toggleFilter: PropTypes.func,
    intl: PropTypes.object,
    speakers: PropTypes.arrayOf(PropTypes.object),
    speakersImages: PropTypes.object,
    // categoryFilter: PropTypes.arrayOf(PropTypes.string),
    typeFilter: PropTypes.arrayOf(PropTypes.string),
    institutionFilter: PropTypes.arrayOf(PropTypes.string),
    fetchContents: PropTypes.object,
    location: locationShape,
    getSpeakersImages: PropTypes.func,
};
SpeakersContainer.defaultPropTypes = {
    changeFilter: f => f,
};

export default connect(
    state => ({
        speakers:
            contentsTypeSelector('speakers')(state).sort((a, b) => {
                const atype =
                    a.data.attributes.speakerType_txt === 'Keynote Speakers'
                        ? 0
                        : a.data.attributes.speakerType_txt === 'Speakers'
                        ? 1
                        : 2;
                const btype =
                    b.data.attributes.speakerType_txt === 'Keynote Speakers'
                        ? 0
                        : b.data.attributes.speakerType_txt === 'Speakers'
                        ? 1
                        : 2;
                if (atype === btype) {
                    const aname = `${a.data.attributes.firstName_txt}${
                        a.data.attributes.lastName_txt
                    }`;
                    const bname = `${b.data.attributes.firstName_txt}${
                        b.data.attributes.lastName_txt
                    }`;

                    return aname.localeCompare(bname);
                }
                return atype - btype;
            }) || [],
        speakersImages: state.speakersImages,
        // categoryFilter: state.categoryFilter || [],
        typeFilter: state.typeFilter || [],
        institutionFilter: state.institutionFilter || [],
        visibilityFilter: state.visibilityFilter,
        fetchContents: fetchSelector('getContents')(state) || {},
        fetchImages: fetchSelector('getSpeakersImages')(state) || {},
    }),
    { changeFilter, toggleFilter, getSpeakersImages }
)(injectIntl(SpeakersContainer));
