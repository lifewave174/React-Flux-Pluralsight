import React, { useState, useEffect } from 'react';
import courseStore from '../stores/courseStore';
import authorStore from '../stores/authorStore';
import CourseList from './CourseList';
import { Link } from 'react-router-dom';
import { loadCourses, deleteCourse } from '../actions/courseActions';
import { loadAuthors } from '../actions/authoractions';

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [authors, setAuthors] = useState(authorStore.getAuthors());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    return () => courseStore.removeChangeListener(onChange); //clean up on unmount
  }, []);

  useEffect(() => {
    authorStore.addChangeListener(onChange);
    if (authorStore.getAuthors().length === 0) loadAuthors();
    return () => authorStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setCourses(courseStore.getCourses());
    setAuthors(authorStore.getAuthors()); //populating author and course data here from the store
  }

  return (
    <>
      <h2>Courses</h2>
      <Link className='btn btn-primary' to='/course'>
        Add Course
      </Link>
      <CourseList courses={courses} deleteCourse={deleteCourse} />
    </>
  );
}

export default CoursesPage;
