import API, { ApiMethodType } from './api-config';
import { BASE_URL, EndPoints } from "../constant/api-endpoints";

/**
 * get Character List
 * @returns Api Response
 */
export const getEmployee = async () => {
    return new Promise(async (resolve, reject) => {
        const res = await API.request<any, any>(
            EndPoints.getEmployees,
            ApiMethodType.get,
        );
        if (res.code == 200) {
            resolve(res.data);
        }
        resolve({});
    });
};
