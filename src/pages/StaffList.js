import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import StaffForm from '../components/StaffCreate';
import { useDispatch } from 'react-redux';
import { fetchStaffs } from '../app/StaffReducer/staffSlice';
const StaffList = () => {
  // force rerender
  // const [, updateState] = React.useState();
  // const forceUpdate = React.useCallback(() => updateState({}), []);
  const dispatch = useDispatch();
  const { isLoading: staffLoading, data: staffs } = useSelector((store) => store.staff);

  const [input, setInput] = useState();
  const [show, setShow] = useState(false);
  const [staffRenderToScreen, setStaffRenderToScreen] = useState();

  const submitRef = useRef();
  const handleClose = () => {
    submitRef.current.click();
    setShow(false);
    // window.location.reload(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const handleOnSearch = () => {
    const newStaffList = staffs.filter((staff) => {
      return staff.name.toString().toLowerCase().indexOf(input.toLowerCase()) !== -1;
    });
    setStaffRenderToScreen(newStaffList);
  };

  useEffect(() => {
    if (!staffs || staffs.length === 0) {
      dispatch(fetchStaffs());
    }
  }, []);

  useEffect(() => {
    if (!staffLoading) setStaffRenderToScreen(staffs);
  }, [staffLoading, staffs]);

  const staffList = staffRenderToScreen?.map((item) => (
    <div className="col-sm-6 col-md-4 col-lg-3" key={item.id}>
      <div className="card">
        <img className="card-img-top mt-3" src={item.image} alt="Card image" />
        <div className="ps-3">
          <h4 className="card-item">{item.name}</h4>
          <p>
            <td>
              <Link to={`/staff/${item.id}`}>Details</Link>
            </td>
          </p>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="container">
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm mới nhân viên</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StaffForm submitRef={submitRef} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Submit
          </Button>
          <div style={{ display: 'none' }}></div>
        </Modal.Footer>
      </Modal>
      <div className="row">
        <div>
          <div className="input-group mb-3 mt-3">
            <input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Staffs'name"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <button type="button" className="btn btn-success" onClick={handleOnSearch}>
              Search
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleShow}>
              Create new staff
            </button>
          </div>
        </div>
      </div>
      {staffLoading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row g-3 gx-3">{staffList}</div>
      )}
    </div>
  );
};
export default StaffList;
