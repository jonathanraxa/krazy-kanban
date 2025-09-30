import { data } from '../data/test';
import { TODO, IN_PROGRESS, DONE } from '../constants';
export const statusCodes = {
    [TODO]: 0,
    [IN_PROGRESS]: 1,
    [DONE]: 2,
};

export const fetchData = () => {
    const formatData = data.map((val) => {
        return {
            ...val,
            statusCode: statusCodes[val.status as keyof typeof statusCodes],
        };
    });
    return formatData;
}

