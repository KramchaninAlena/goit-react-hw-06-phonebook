import { useDispatch } from 'react-redux';
import css from '../Filter/Filter.module.css'
import { filterContact } from 'redux/filterSlice';

export  function Filter() {
  const dispatch = useDispatch()
    const handleChange = ({target:{value}}) => {
      dispatch(filterContact(value))
      };

  return (
    <div className={css.filter}>
    <label htmlFor="InputFilter" className={css.filterLabel}>Find contacts by name</label>
    <input onChange={handleChange}
      type="text"
      name="filter"
      className={css.filterInput}
      />
      </div>
  )
}
