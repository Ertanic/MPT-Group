import { api } from ".";

const getStudents = () => api.get('students').json();
const getStudent = (id) => api.get(`students/${id}`).json();
const getActive = () => api.get('students/active').json();

export default {getStudent, getStudents, getActive};