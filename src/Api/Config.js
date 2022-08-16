import axios from "axios";
import {
  ORDER_API,
  EVENT_API,
  EVENT_CREATE_API,
  EVENT_UPDATE_API,
  TEMPLATE_API,
  TEMPLATE_CREATE_API,
  TEMPLATE_UPDATE_API,
  TEMPLATE_DELETE_API,
  GET_RULES_API,
  CREATE_RULES_API,
  UPDATE_RULES_API,
  GET_LOOKUP_API,
  GET_CUSTOMER_API,
  GET_STORAGE_API,
  CREATE_CUSTOMER_API,
  POOL_PROVIDER_API,
  UPDATE_CUSTOMER_API,
} from './Api'
setTimeout(() => localStorage.getItem("token"), 500)
export const token = localStorage.getItem("token");
export const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
  accept: "application/json",
}
console.log(headers)
export const orderApi = async () =>
  await axios.get(ORDER_API, { headers })

export const eventApi = async () =>
  await axios.get(EVENT_API, { headers })

export const createEventApi = async (event) =>
  await axios.post(EVENT_CREATE_API, event, { headers });

export const updateEventApi = async (event) =>
  await axios.put(EVENT_UPDATE_API, event, { headers });

export const templateApi = async () =>
  await axios.get(TEMPLATE_API, { headers })

export const templateCreateApi = async (template) =>
  await axios.post(TEMPLATE_CREATE_API, template, { headers })

export const updatetemplateApi = async (template) =>
  await axios.put(TEMPLATE_UPDATE_API, template, { headers });

export const deletetemplateApi = async (template) =>
  await axios.put(TEMPLATE_DELETE_API, template, { headers });

export const getRulesApi = async () =>
  await axios.get(GET_RULES_API, { headers });

export const createRulesApi = async (rule) =>
  await axios.post(CREATE_RULES_API, rule, { headers });

export const updateRulesApi = async (rule) =>
  await axios.put(UPDATE_RULES_API, rule, { headers });

export const getLookupApi = async () =>
  await axios.get(GET_LOOKUP_API, { headers });


export const getCustemerApi = async () =>
  await axios.get(GET_CUSTOMER_API, { headers });

export const getStoreApi = async () =>
  await axios.get(GET_STORAGE_API, { headers });

export const createCustomerApi = async (customer) =>
  await axios.post(CREATE_CUSTOMER_API, customer, { headers });

export const poolApi = async () =>
  await axios.get(POOL_PROVIDER_API, { headers });

export const updateCustomerApi = async (customer) =>
  await axios.put(UPDATE_CUSTOMER_API, customer, { headers });