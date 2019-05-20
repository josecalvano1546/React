import React, { Component } from 'react';

class TodoForm extends Component {
  constructor () {
    super();
    this.state = { // en etsa linea lo que hago es decir que vamos a modificar los valores.
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    };
    this.handleInputChange = this.handleInputChange.bind(this); // este pertenece al mismo componente.
    this.handleSubmit = this.handleSubmit.bind(this); // lo mismo que arriba, pertenece al mismo componente.
  }

  handleSubmit(e) { //para guardar los datos al apretar el boton de enviado.
    e.preventDefault(); //Para no recargar la pagina al momento de enviar los datos.
    this.props.onAddTodo(this.state);
    this.setState({ // aca realizamos la modificacion.
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target; // Le asignamos lo que escribimos en el formulario.
    console.log(value, name);// nombre del imput.
    this.setState({
      [name]: value // es lo que tiene que actualizar
    });
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              value={this.state.title}
              onChange={this.handleInputChange}
              placeholder="Title"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsible"
              className="form-control"
              value={this.state.responsible}
              onChange={this.handleInputChange}
              placeholder="Responsible"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.handleInputChange}
              placeholder="Description"
              />
          </div>
          <div className="form-group">
            <select
                name="priority"
                className="form-control"
                value={this.state.priority}
                onChange={this.handleInputChange}
              >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    )
  }

}

export default TodoForm;
