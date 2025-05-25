import type { IResponseStatus } from "../interfaces/IResponseStatus";

export const resolveStatus: IResponseStatus = {
    numberStatus: 200,
    message: 'Good'
}

export const rejectStatus: IResponseStatus = {
    numberStatus: 400,
    message: 'Failed'
}

