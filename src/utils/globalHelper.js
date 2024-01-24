import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_STRAPI_URL;

// Bearer Token'ınızı buraya ekleyin
const BEARER_TOKEN = import.meta.env.VITE_STRAPI_TOKEN;

async function get(endpoint, locale) {
    try {
        const response = await axios.get(`${API_BASE_URL}/${endpoint}?locale=${locale}&populate=*`, {
            headers: {
                Authorization: `Bearer ${BEARER_TOKEN}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Hata:', error);
        return null;
    }
}

async function post(endpoint, data) {
    try {
        const response = await axios.post(`${API_BASE_URL}/${endpoint}`, data, {
            headers: {
                Authorization: `Bearer ${BEARER_TOKEN}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Hata:', error);
        return null;
    }
}

function groupByLocale(data) {
    const locales = {};

    data.forEach((item) => {
        const locale = item.attributes.locale;
        if (!locales[locale]) {
            locales[locale] = [];
        }

        locales[locale].push(item);
    });

    return locales;
}

export { get, post, groupByLocale };
