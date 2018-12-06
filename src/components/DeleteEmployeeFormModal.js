import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');
const DeleteEmployeeFormModal = (props) => {
  return (
    <ReactModal
      isOpen={props.isOpen}
      className="Modal">
      <div className="modal" style={{ display: 'block' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">{props.title}</h4>
              <button type="button" onClick={props.onClose}
                className="close" aria-hidden="true">&times;</button>
            </div>
            <div className="modal-body">
              <form onSubmit={props.onSubmit}>
                <div className="form-fields">
                  <input type="hidden" name='id' value={props.employeeID} />
                  <p>Are you sure you want to delete this employee?</p>
                  <p className="text-warning"><small>This action cannot be undone.</small></p>
                </div>
                <div className='actions'>
                  <input type="button" onClick={props.onClose}
                    className="btn btn-default" value="Cancel" />
                  <input type="submit" className="btn btn-danger"
                    value="Delete" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default DeleteEmployeeFormModal;