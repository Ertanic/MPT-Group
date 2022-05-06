import { api } from '.';

const getArts = () => api.get('arts').json();

export { getArts }