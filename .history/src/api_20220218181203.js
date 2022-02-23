import config from '@/config'

function getFrom(path) {
    console.log(`${config.apiBaseUrl}${path}`)
    return fetch(`${config.apiBaseUrl}${path}`, {
        method: 'GET',
    }).then((response) => response.json)
}

export default {
    getFrom,
}
