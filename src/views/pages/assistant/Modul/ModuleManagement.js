import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// ** Custom Components
import Avatar from '@components/avatar';
import Breadcrumbs from '@components/breadcrumbs';

// ** Icons Imports
import { Edit2, PlusSquare, MoreVertical, Trash, X} from 'react-feather';

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  FormGroup,
  Input
} from "reactstrap";

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux';
import { selectModule, getModules, createModule, updateModule, deleteModule } from '@store/api/module';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

// ** Styles
import '@src/assets/scss/module-list.scss';

const ModuleManagement = () => {
  // ** Store Vars
  const dispatch = useDispatch();
  const { modules, isLoading } = useSelector(state => state.module);

  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [moduleNameAdd, setModuleNameAdd] = useState('');
  const [moduleName, setModuleName] = useState('');
  const [seelabsId, setSeelabsId] = useState('');
  const [moduleNumber, setModuleNumber] = useState('');
  const [updateModuleData, setupdateModuleData] = useState(null);

  const toggleModalAdd = () => setModalAdd(!modalAdd);
  const toggleModalEdit = () => setModalEdit(!modalEdit);

  useEffect(() => {
    dispatch(getModules());
  }, [dispatch]);


  const handleDelete = async id => {
    return await MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-outline-danger ms-1'
      },
      buttonsStyling: false
    }).then(result => {
      if (result.value) {
        dispatch(deleteModule({id})).then(({payload}) => {
          if (payload.status === 200) {
            MySwal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: 'Your Module has been deleted.',
              customClass: {
                confirmButton: 'btn btn-success'
              }
            })
            dispatch(getModules())
          } else {
            console.log(payload.status)
            console.log(payload)
            MySwal.fire({
              title: 'Failed',
              text: 'Something wrong...',
              icon: 'error',
              customClass: {
                confirmButton: 'btn btn-success'
              }
            })
            dispatch(getModules())
          }
        })
      }
    })
  }


  const renderListModule = () => {
    if (modules?.length > 0) {
      return modules.map((item, index) => {
        return (
          <div key={item.id} className='module-item'>
            <div className='d-flex'>
              <Avatar className='rounded' color='light-info' content={(index + 1).toString()} />
              <div>
                <h6 className='module-title'>Module {index + 1} : {item.name}</h6>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: 'center' }}>
              <div className='d-flex'>
                <UncontrolledDropdown>
                  <DropdownToggle color='relief-primary'>
                    <MoreVertical size={15} />
                  </DropdownToggle>
                  <DropdownMenu end>
                    <DropdownItem
                      tag='a'
                      href='#'
                      className='w-100'
                      onClick={e => {
                        e.preventDefault();
                        setupdateModuleData(item);
                        setModuleName(item.name);
                        setModuleNumber(modules.findIndex(mod => mod.id === item.id) + 1);
                        toggleModalEdit();
                      }}
                    >
                      <Edit2 size={15} />
                      <span className='align-middle ms-50'>Edit</span>
                    </DropdownItem>
                    {/* <DropdownItem tag='a' href='#' className='w-100' onClick={() =>  handleDelete(item.id) }> */}
                    <DropdownItem tag='a' href='#' className='w-100' onClick={() =>  {handleDelete(item.id) }}>
                      <Trash size={15} />
                      <span className='align-middle ms-50'>Delete</span>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return (
        <div>No data available</div>
      );
    }
  };

  return (
    <Fragment>
      <Breadcrumbs title='Module Management' data={[{ title: 'Module Management' }]} />
      <Card className='card-module'>
        <CardHeader>
          <CardTitle tag='h4'>Module List</CardTitle>
          <Button
            color='relief-success'
            onClick={toggleModalAdd}
          >
            <PlusSquare size={15} />
            <span className='align-left ms-25'>Add</span>
          </Button>
        </CardHeader>
        <CardBody>{renderListModule()}</CardBody>
      </Card>

      <Modal isOpen={modalAdd} toggle={toggleModalAdd} className="modal-dialog-centered">
        <ModalHeader toggle={toggleModalAdd}>Add New Module</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for='seelabsId'>Module Number</Label>
            <Input
              type='number'
              id='seelabsId'
              placeholder='Enter Module Number'
              value={seelabsId}
              onChange={e => setSeelabsId(parseInt(e.target.value))}
            />
            <Label for='moduleName'>Module Name</Label>
            <Input
              type='text'
              id='moduleName'
              placeholder='Enter module name'
              value={moduleNameAdd}
              onChange={e => setModuleNameAdd(e.target.value)}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color='primary'
            onClick={async () => {
              const newModule = {
                seelabsId,
                name: moduleNameAdd,
              };

              await dispatch(createModule(newModule));
              dispatch(getModules());  // Fetch new data after saving
              toggleModalAdd();
              setModuleNameAdd(''); // Reset state
              setSeelabsId('');
            }}
          >
            Save
          </Button>
          <Button color='secondary' onClick={toggleModalAdd}>Cancel</Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalEdit} toggle={toggleModalEdit} className="modal-dialog-centered">
      <ModalHeader toggle={toggleModalEdit}  close={null}>Edit Module</ModalHeader>
        <ModalBody>
          <FormGroup>
          <Label for='updateModuleNumber'>Seelabs ID</Label>
            <Input
              type='number'
              id='updateModuleNumber'
              placeholder='Enter Module Numebr'
              value={moduleNumber}
              onChange={e => setSeelabsId(e.target.value)}
            />
            <Label for='updateModuleName'>Module Name</Label>
            <Input
              type='text'
              id='updateModuleName'
              placeholder='Enter module name'
              value={moduleName}
              onChange={e => setModuleName(e.target.value)}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button
            color='primary'
            onClick={async () => {
              const updatedModule = {
                id: updateModuleData.id,
                seelabsId: seelabsId,
                name: moduleName
              };

              await dispatch(updateModule(updatedModule));
              dispatch(getModules());
              toggleModalEdit();
              setupdateModuleData(null); // Reset state
              setModuleName('');
              setModuleNumber('');
            }}
          >
            Save
          </Button>

          <Button color='secondary' onClick={toggleModalEdit}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

export default ModuleManagement;
