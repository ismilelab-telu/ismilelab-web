import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardBody, Button, Input, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import DataTable, { createTheme } from "react-data-table-component";
import { MoreVertical, FileText, Trash, Edit } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getArticleList, deleteArticle } from "@store/api/post";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import "@src/assets/scss/blog.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";

const MySwal = withReactContent(Swal);

createTheme("dark", {
  background: {
    default: "transparent"
  },
  text: {
    primary: "#ffffff",
    secondary: "#2aa198"
  }
});

createTheme("light", {
  background: {
    default: "#ffffff"
  },
  text: {
    primary: "#000000",
    secondary: "#2aa198"
  }
});

const Blog = () => {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState("light");
  const [filterText, setFilterText] = useState("");
  const { articles, isLoading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getArticleList());
  }, [dispatch]);

  const navigate = useNavigate();

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
      wrap: true
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
      right: false,
      cell: (row) => (
        <span>{row.category}</span>
      )
    },
    {
      name: "Author",
      selector: (row) => row.author,
      sortable: true
    },
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
      right: false,
      format: (row) => new Date(row.date).toLocaleDateString()
    },
    {
      name: 'Actions',
      allowOverflow: true,
      right: true,
      cell: (row) => {
        return (
          <div className='d-flex'>
            <UncontrolledDropdown>
              <DropdownToggle className='pe-1' tag='span'>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem tag='a' href='#' onClick={() => handleEdit(row.id)}>
                  <FileText size={15} />
                  <span className='align-middle ms-50'>Edit</span>
                </DropdownItem>
                <DropdownItem tag='a' href='#' onClick={() => handleDelete(row.id)}>
                  <Trash size={15} />
                  <span className='align-middle ms-50'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <Edit size={15} onClick={() => handleEdit(row.id)} style={{ cursor: 'pointer' }} />
          </div>
        )
      }
    }
  ];

  const handleEdit = (id) => {
    navigate(`/assistant/blog/edit-article/${id}`);
  };

  const handleDelete = async (id) => {
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
        dispatch(deleteArticle(id))
        .then(({ payload }) => {
          console.log(payload)
          if (payload.status === 200) {
            MySwal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              customClass: {
                confirmButton: 'btn btn-success'
              }
            });
            dispatch(getArticleList());
          } else {
            MySwal.fire({
              title: 'Failed',
              text: 'Something went wrong...',
              icon: 'error',
              customClass: {
                confirmButton: 'btn btn-success'
              }
            });
          }
        });
      }
    });
  };

  const handleCreate = () => {
    navigate('/assistant/blog/create-article');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4" className={theme === "light" ? "text-dark" : "text-light"}>Blog Management</CardTitle>
        <Button color="success" onClick={handleCreate}>Create Article</Button>
      </CardHeader>
      <CardBody>
        <div className="filter-section">
          <Input
            type="text"
            placeholder="Filter by title, writer or tag"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
        </div>
        <DataTable
          noHeader
          data={articles}
          columns={columns}
          progressPending={isLoading}
          theme={theme}
          pagination
        />
      </CardBody>
    </Card>
  );
};

export default Blog;
