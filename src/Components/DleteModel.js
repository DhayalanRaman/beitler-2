import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Delete({ show, handleClose, onDelete }) {
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are You Want To Delete</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        className="cancel_Btn"
                        onClick={handleClose}>
                        No
                    </Button>
                    <Button
                        className="save_Btn"
                        variant="primary"
                        onClick={() => onDelete()}>
                        Yes 
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Delete;