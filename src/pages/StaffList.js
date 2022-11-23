import React, { useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import StaffForm from '../components/StaffCreate';

const StaffList = () => {
  // force rerender
  // const [, updateState] = React.useState();
  // const forceUpdate = React.useCallback(() => updateState({}), []);

  const staffs = useSelector((state) => state.staff);
  const [show, setShow] = useState(false);

  const submitRef = useRef();

  const [staffRenderToScreen, setStaffRenderToScreen] = useState(staffs);

  const [input, setInput] = useState();

  const handleClose = () => {
    submitRef.current.click();
    // forceUpdate;
    setShow(false);
    window.location.reload(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const handleOnSearch = () => {
    const newStaffList = staffs.filter((staff) => {
      return staff.name.toString().toLowerCase().indexOf(input.toLowerCase()) !== -1;
    });
    setStaffRenderToScreen(newStaffList);
    console.log('searched aray', newStaffList);
    console.log('search input', input);
  };
  const staffList = staffRenderToScreen.map((item) => (
    <div className="card col-sm-6 col-md-4 col-lg-2 m-2" key={item.id}>
      <img className="card-img-top mt-3 " src={item.image} alt="Card image" />
      <div>
        <h4 className="card-item">{item.name}</h4>
        <p>
          <td>
            <Link to={`/staff/${item.id}`}>Details</Link>
          </td>
        </p>
      </div>
    </div>
  ));
  return (
    <div className="container">
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
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
          <input className="inputSearch" onChange={(e) => setInput(e.target.value)}></input>
          <button onClick={handleOnSearch}>Search</button>
          <Button variant="primary" onClick={handleShow}>
            Create staff
          </Button>
        </div>
      </div>
      <div className="row">{staffList}</div>
    </div>
  );
};
export default StaffList;
