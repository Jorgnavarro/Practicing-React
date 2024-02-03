import { filterChange } from "../reducers/filterReducer"
import { useDispatch } from "react-redux"

const VisibiltyFilter = () => {
    const dispatch = useDispatch()

    return(
        <div className='containerFilters'>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="filter" id="radioAll" onChange={() => dispatch(filterChange('ALL'))}/>
            <label className="form-check-label" htmlFor="radioAll">All</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="filter" id="radioImportant" onChange={() => dispatch(filterChange('IMPORTANT'))} />
            <label className="form-check-label" htmlFor="radioImportant">Important</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="filter" id="radioNonImportant" onChange={() => dispatch(filterChange('NONIMPORTANT'))}/>
            <label className="form-check-label" htmlFor="radioNonImportant">Non important</label>
          </div>
        </div>
    )
}


export default VisibiltyFilter