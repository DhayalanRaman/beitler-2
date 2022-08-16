import types from './actionTypes';

export const getTempalateStart = () => ({
    type: types.GET_TEMPLATE_START,
});
export const getTemplateSuccess = (template) => ({
    type: types.GET_TEMPLATE_SUCCESS,
    payload: template,
});
export const getTemplateFailure = (error) => ({
    type: types.GET_TEMPLATE_FAILURE,
    payload: error,
});

export const createTemplateStart = (template) => ({
    type: types.CREATE_TEMPLATE_START,
    payload: template,
});

export const createTemplateSuccess = () => ({
    type: types.CREATE_TEMPLATE_SUCCESS,
});

export const createTemplateFailure = (error) => ({
    type: types.CREATE_TEMPLATE_FAILURE,
    payload: error,
});

export const updateTemplateStart = (template) => ({
    type: types.UPDATE_TEMPLATE_START,
    payload: template,
});

export const updateTemplateSuccess = () => ({
    type: types.UPDATE_TEMPLATE_SUCCESS,
});

export const updateTemplateFailure = (error) => ({
    type: types.UPDATE_TEMPLATE_FAILURE,
    payload: error,
});


export const deleteTemplateStart = (template) => ({
    type: types.DELETE_TEMPLATE_START,
    payload: template,
});

export const deleteTemplateSuccess = () => ({
    type: types.DELETE_TEMPLATE_SUCCESS,
});

export const deleteTemplateFailure = (error) => ({
    type: types.DELETE_TEMPLATE_FAILURE,
    payload: error,
});