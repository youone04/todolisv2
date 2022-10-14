import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Suspense } from 'react'
import DropdownComp from "../../components/atoms/DropdownComp";
import "./modal-add.css";

export default function ModalAdd(props) {
  return (
    <Modal
      size="lg"
      show={props.lgShow}
      onHide={() => props.setLgShow(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title
          className="title-modall-add"
          id="example-modal-sizes-title-lg"
        >
          Tambah List Item
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <span  className="label-modal-add">
                Nama List Item
              </span>
            </Form.Label>
            <Suspense fallback={null}>
            <Form.Control
              className="form-control-add"
              type="text"
              placeholder="Tambahkan Nama List Item"
              data-cy='modal-add-name-input'
              onChange={(e) => props.setTitle(e.target.value)}
             
            />
            </Suspense>
          </Form.Group>
          <DropdownComp setPriority={props.setPriority} />
          <div className="d-flex justify-content-between mt-3">
            <div></div>
            <Button
              onClick={props.postItems}
              disabled={props.title.length > 0 ? false : true}
              data-cy='modal-add-save-button'
              className="button-modal-add"
              type="button"
            >
              SIMPAN
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
