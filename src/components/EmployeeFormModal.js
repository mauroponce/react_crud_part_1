import React from 'react';
import ReactModal from 'react-modal';

class EmployeeFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {
        id: this.props.employee ? this.props.employee.id : null,
        name: this.props.employee ? this.props.employee.name : '',
        email: this.props.employee ? this.props.employee.email : '',
        address: this.props.employee ? this.props.employee.address : '',
        active: this.props.employee ? this.props.employee.active : false
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const employee = {...this.state.employee };
    employee[name] = value; // nested state

    this.setState({employee});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.employee);
  }

  render(){
    return (
      <ReactModal
        isOpen={this.props.isOpen}
        className="Modal">
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">{this.props.title}</h4>
                <button type="button" onClick={this.props.onClose}
                  className="close" aria-hidden="true">&times;</button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-fields">
                    <div className="form-group">
                      <label>Name</label>
                      <input type="text" name="name"
                        value={this.state.employee.name}
                        onChange={this.handleChange}
                        className="form-control" required />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" name="email"
                        value={this.state.employee.email}
                        onChange={this.handleChange}
                        className="form-control" required />
                    </div>
                    <div className="form-group">
                      <label>Address</label>
                      <textarea name="address"
                        value={this.state.employee.address}
                        onChange={this.handleChange}
                        className="form-control" required />
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox"
                          name='active'
                          checked={this.state.employee.active}
                          onChange={this.handleChange}
                        />Active
                      </label>
                    </div>
                  </div>
                  <div className='actions'>
                    <input type="button" onClick={this.props.onClose}
                      className="btn btn-default" value="Cancel" />
                    <input type="submit" className="btn btn-success"
                      value="Save" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </ReactModal>
    )
  }
}

export default EmployeeFormModal;