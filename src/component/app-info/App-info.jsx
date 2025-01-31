import './App-info.css'

const AppInfo = ({ allMoviesCount, favouriteMovieCount }) => {
  return (
    <div className='app-info'>
      <p className='fs-3 text-uppercase'>barcha kinolar soni = {allMoviesCount}</p>
      <p className='fs-4 text-uppercase'>sevimli kinolar = {favouriteMovieCount}</p>
    </div>
  )
}

export default AppInfo