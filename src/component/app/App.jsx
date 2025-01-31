
import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

import './App.css'

import AppInfo from "../app-info/App-info";
import AppFilter from "../app-filter/App-filter";
import SearchPanel from "../search-panel/Search-panel";
import MovieList from '../movie-list/Movie-list';
import MovieAddForm from '../movie-add-form/Movie-add-form';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { name: 'Asasins', view: 313, favourite: true, like: false, id: 1 },
        { name: 'Pirates of the Caribbean 1', view: 113, favourite: false, like: false, id: 2 },
        { name: 'Pirates of the Caribbean 2', view: 224, favourite: false, like: true, id: 3 },
        { name: 'Pirates of the Caribbean 3', view: 123, favourite: true, like: true, id: 4 },
      ],
      term: '',
      filter: 'all',
    }
  }

  onDelete = id => {
    this.setState(({ data }) => ({
      data: data.filter(c => c.id !== id)
    })
      // KOD TO'LIQ SHAKLI
      // const newData = data.filter(c => c.id !== id)
      // return {
      //     data: newData,
      // }
    )
  }

  addForm = item => {
    const newItem = { name: item.name, view: item.view, id: uuidv4(), favourite: false, like: true }
    this.setState(({ data }) => ({
      data: [...data, newItem],
    }))
  }

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] } // favourite, like
        }
        return item
      }),
    }))
  }

  searchHandler = (arr, term) => {
    if (term.length === 0){
      return arr
    }
    
    return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
  }

  updateMovieList = term => this.setState({ term })

  filterHandler = (arr, filter) => {
    switch( filter ){
      case ('popular'):
        return arr.filter(c => !c.like)
      case ('mostView'):
        return arr.filter(c => c.view > 200)
      default:
        return arr
    }
  }

  updateFilterHandler = filter => this.setState({ filter })

  render() {
    const { data, term, filter } = this.state
    const allMoviesCount = data.length
    const favouriteMovieCount = data.filter(c => c.favourite).length
    let visibleData = this.searchHandler(this.filterHandler(data, filter), term)
        
    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo 
            allMoviesCount={allMoviesCount}
            favouriteMovieCount={favouriteMovieCount} />
          <div className='search-panel'>
            <SearchPanel updateMovieList={this.updateMovieList} />
            <AppFilter 
              filter={filter}
              updateFilterHandler={this.updateFilterHandler} 
            />
          </div>
          <MovieList
            onToggleProp={this.onToggleProp}
            data={visibleData}
            onDelete={this.onDelete}
          />
          <MovieAddForm addForm={this.addForm} />
        </div>
      </div>
    )
  }
}

export default App;