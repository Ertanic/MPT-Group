import ky from 'ky';

const api = ky.extend({prefixUrl: '/api'});

import students from './students';
import teachers from './teachers';

export { api, students, teachers };