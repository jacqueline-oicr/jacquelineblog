export const transformContentsToCategoryFilter = contents => {
    if (!contents && !contents.length) return [];

    const filtered = contents.filter(
        content => content.type === contents[0].type
    );

    const categories = [];
    filtered.forEach(content => {
        if (
            content &&
            content.data &&
            content.data.attributes &&
            content.data.attributes.categories_list
        ) {
            const tags = content.data.attributes.categories_list;

            tags.forEach(tag => {
                if (
                    tag.category_txt &&
                    !categories.includes(tag.category_txt)
                ) {
                    categories.push(tag.category_txt);
                }
            });
        }
    });
    return categories.sort();
};

export const transformContentsToTypeFilter = contents => {
    if (!contents && !contents.length) return [];

    const filtered = contents.filter(
        content => content.type === contents[0].type
    );

    const types = [];
    filtered.forEach(content => {
        if (
            content &&
            content.data &&
            content.data.attributes &&
            content.data.attributes.speakerType_txt
        ) {
            const tag = content.data.attributes.speakerType_txt;

            if (tag && !types.includes(tag)) {
                types.push(tag);
            }
        }
    });
    return types.sort();
};

export const transformContentsToInstitutionFilter = contents => {
    if (!contents && !contents.length) return [];

    const filtered = contents.filter(
        content => content.type === contents[0].type
    );

    const institutions = [];
    filtered.forEach(content => {
        if (
            content &&
            content.data &&
            content.data.attributes &&
            content.data.attributes.institutions_list
        ) {
            const tags = content.data.attributes.institutions_list;

            tags.forEach(tag => {
                if (
                    tag.institution_txt &&
                    !institutions.includes(tag.institution_txt)
                ) {
                    institutions.push(tag.institution_txt);
                }
            });
        }
    });
    return institutions.sort();
};

export const transformSpeakersImages = data => {
    if (!data || !Array.isArray(data) || data.length === 0) return [];
    const imgs = {};
    data.filter(p => !!p.data.attributes).forEach(p => {
        const attr = p.data.attributes;
        if (attr.file.src) {
            imgs[p.path] = attr.file.src;
        }
    });
    return imgs;
};

export const truncateString = (str, length) => {
    if (str && str.length <= length) return str;

    const truncated = str.substring(0, length + 1);
    const lastSpace = /[\s,.]$/.test(truncated)
        ? length
        : truncated.lastIndexOf(' ');

    return `${truncated.substring(0, lastSpace)}...`;
};
