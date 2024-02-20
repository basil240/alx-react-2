// src/schema/courses.js
import { schema } from 'normalizr';

const course = new schema.Entity('courses');
const coursesSchema = [course];

export { coursesSchema };