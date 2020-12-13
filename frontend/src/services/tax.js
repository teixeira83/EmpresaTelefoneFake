import http from '../http-commom';

const getAllSources = () => {
    return http.get('/sources');
};

const getAllPlans = () => {
    return http.get('/plans');
};

const getSourceByTitle = (title) => {
    const params = {
        source: title
    }
    return http.get('/source', {params});
};

const getCallInformation = (call) => {
    const params = {
        source: call.source,
        destination: call.destination,
        callTime: call.callTime,
        plan: call.plan
    }

    return http.get('/calculator', { params });
}
// eslint-disable-next-line
export default {
    getAllSources,
    getAllPlans,
    getSourceByTitle,
    getCallInformation
}