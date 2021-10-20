import React, { useState } from 'react';
import CourseForm from './CourseForm';

const ManageCoursePage = (props) => {
  const [course, setCourse] = useState({
    id: null,
    slug: '',
    title: '',
    authorId: null,
    category: '',
  });

  function handleChange({ target }) {
    setCourse(...course, ([target.name] = target.value));
  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm course={course} onChange={handleChange} />
      {props.match.params.slug}
    </>
  );
};

export default ManageCoursePage;
