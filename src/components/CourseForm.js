import React from 'react';
import TextInput from '../components/common/TextInput';

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id='title'
        label='Title'
        onChange={props.onChange}
        name='title'
        value={props.course.title}
      />

      <div className='form-group'>
        <label htmlFor='author'>Author</label>
        <div className='field'>
          <select
            id='author'
            name='authorId'
            value={props.course.authorId || ''}
            className='form-control'
            onChange={props.onChange}
          >
            <option value='' />
            <option value='1'>Cory House</option>
            <option value='2'>Scott Allen</option>
          </select>
        </div>
      </div>

      <TextInput
        id='category'
        name='category'
        label='Category'
        onChange={props.onChange}
        value={props.course.category}
      />

      <input type='submit' value='Save' className='btn btn-primary' />
    </form>
  );
}

export default CourseForm;
