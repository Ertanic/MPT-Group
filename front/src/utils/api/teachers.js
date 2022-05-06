import { api } from ".";

const getTeachers = () => api.get('teachers').json();
const getTeacher = (id) => api.get(`teachers/${id}`).json();

export {getTeacher, getTeachers};