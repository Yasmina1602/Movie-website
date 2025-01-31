
import { Component } from 'react'
import './Movie-add-form.css'

class MovieAddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      views: '',
    }
  }

  changeHandlerInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  addFormHandler = e => {
    e.preventDefault()
    this.props.addForm({ name: this.state.name, view: this.state.views })
    this.setState({
      name: '',
      views: '',
    })

  }
  render() {
    const { name, views } = this.state
    // const { addForm } = this.props

    return (
      <div className='movie-add-form'>
        <h4>Yangi kino qo'shish</h4>
        <form className='add-form d-flex mt-3' onSubmit={this.addFormHandler}>
          <input type='text' className='form-control new-post-label me-2' placeholder='kino nomi? '
            onChange={this.changeHandlerInput}
            name='name'
            value={name}
          />
          <input type='number' className='form-control new-post-label me-2' placeholder="necha marta ko'rilgan? "
            onChange={this.changeHandlerInput}
            name='views'
            value={views}
          />
          <button type='submit' className='btn btn-outline-dark btn-lg'>
            Qo'shish
          </button>
        </form>
      </div>
    )
  }
}

export default MovieAddForm