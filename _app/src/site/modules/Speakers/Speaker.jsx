import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { locationShape } from 'react-router';
import { toggleFilter } from 'wfui-react/lib/util/visibilityFilter';

class Speaker extends Component {
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
                        about_txt,
                        categories_list,
                        speakerType_txt,
                        institutions_list,
                        permalink,
                        firstName_txt,
                        lastName_txt,
                        titles_list,
                        organization_txt,
                        talk_txt,
                    },
                },
            },
            location,
            image,
        } = this.props;

        const fullName = `${firstName_txt || ''}${
            firstName_txt && lastName_txt ? ' ' : ''
        }${lastName_txt || ''}`;

        const titleTxt = `${
            titles_list && titles_list.length
                ? titles_list.map(item => item.title_txt).join(', ')
                : ''
        }`;

        const cardHeader =
            speakerType_txt === 'Keynote Speakers' ? (
                <div className="speaker-box-header">
                    <p className="keynote-header">
                        <img
                            alt=""
                            className="star"
                            src="/assets/site/images/icon-star-white.svg"
                        />
                        Keynote Speaker
                    </p>
                </div>
            ) : null;

        const body = (
            <div className="speaker-box-body">
                {image === 'initials' ? (
                    <div className="initials">
                        <p>
                            {firstName_txt && firstName_txt.charAt(0)}
                            {lastName_txt && lastName_txt.charAt(0)}
                        </p>
                    </div>
                ) : (
                    <img
                        alt={`${fullName}`}
                        className="speaker-img img-responsive"
                        src={image}
                    />
                )}
                <p className="speaker-name">
                    {`${fullName}${titleTxt ? `, ${titleTxt}` : ''}`}
                </p>
                <p className="spekaer-institute">{organization_txt}</p>
                {talk_txt ? (
                    <p className="speaker-talk">
                        <strong>Talk:</strong>
                        {` ${talk_txt}`}
                    </p>
                ) : null}
            </div>
        );

        if (about_txt && about_txt.length) {
            return (
                <a
                    className={`card-box speaker-card-box ${
                        speakerType_txt === 'Keynote Speakers'
                            ? 'keynote-speaker-card-box'
                            : 'none-keynote-speaker-card-box'
                    }`}
                    href={`${permalink}${location.search}`}
                    data-category={JSON.stringify(
                        categories_list && categories_list.length
                            ? categories_list.map(
                                  category => category.category_txt
                              )
                            : []
                    )}
                    data-type={speakerType_txt}
                    data-institution={JSON.stringify(
                        institutions_list && institutions_list.length
                            ? institutions_list.map(
                                  institution => institution.institution_txt
                              )
                            : []
                    )}
                >
                    {cardHeader}
                    {body}
                </a>
            );
        }

        return (
            <div
                className={`card-box speaker-card-box ${
                    speakerType_txt === 'Keynote Speakers'
                        ? 'keynote-speaker-card-box'
                        : 'none-keynote-speaker-card-box'
                }`}
                href={`${permalink}${location.search}`}
                data-category={JSON.stringify(
                    categories_list && categories_list.length
                        ? categories_list.map(category => category.category_txt)
                        : []
                )}
                data-type={speakerType_txt}
                data-institution={JSON.stringify(
                    institutions_list && institutions_list.length
                        ? institutions_list.map(
                              institution => institution.institution_txt
                          )
                        : []
                )}
            >
                {cardHeader}
                {body}
            </div>
        );
    }
}

Speaker.propTypes = {
    item: PropTypes.shape({
        data: PropTypes.shape({
            attributes: PropTypes.shape({
                categories_list: PropTypes.array,
                speakerType_txt: PropTypes.string,
                institutions_list: PropTypes.array,
                permalink: PropTypes.string,
                firstName_txt: PropTypes.string,
                lastName_txt: PropTypes.string,
                titles_list: PropTypes.array,
                organization_txt: PropTypes.string,
            }),
        }),
    }),
    image: PropTypes.string,
    location: locationShape,
    toggleFilter: PropTypes.func,
};

export default connect(
    () => ({}),
    { toggleFilter }
)(Speaker);
