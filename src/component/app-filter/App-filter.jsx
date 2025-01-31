
import './App-filter.css'

const btnArr = [
  { name: 'all', label: 'Barcha kinolar' },
  { name: 'popular', label: 'Mashhur kinolar' },
  { name: 'mostView', label: 'Eng ko\'p ko\'rilgan kinolar' }
]

const AppFilter = ({ updateFilterHandler, filter }) => {
  return (
    <div className='btn-group'>
      {btnArr.map(btn => (
        <button 
          key={btn.name} 
          onClick={() => updateFilterHandler(btn.name)} 
          className={`btn ${filter === btn.name ? 'btn-dark' : 'btn-outline-dark'}`}
            type='button'
        >
          {btn.label}
        </button>
      ))}
    </div>
  )
}


export default AppFilter