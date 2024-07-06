// ** Styles
import "@src/assets/scss/blog.scss"
import "@styles/react/libs/tables/react-dataTable-component.scss"

import { useState, useEffect, Fragment } from "react"

import { Card, CardHeader, CardTitle, CardBody, Button, Input, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Spinner } from "reactstrap"
import { MoreVertical, FileText, Trash, Edit, ChevronDown, PlusSquare } from 'react-feather'

import DataTable, { createTheme } from "react-data-table-component"

import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getArticleList, deleteArticle } from "@store/api/article"

import { useSkin } from "@hooks/useSkin"

import Breadcrumbs from '@components/breadcrumbs'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)

createTheme("dark", {
  background: {
    default: "transparent"
  }
})

const ArticleList = () => {
  const dispatch = useDispatch()
  const { skin } = useSkin()
  const [filterText, setFilterText] = useState("")
  const { articles, isLoading } = useSelector((state) => state.article)

  useEffect(() => {
    dispatch(getArticleList())
  }, [])

  const navigate = useNavigate()

  const handleEdit = (id) => {
    navigate(`/assistant/article/edit-article/${id}`)
  }

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
        dispatch(deleteArticle({ id }))
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
              })
              dispatch(getArticleList())
            } else {
              MySwal.fire({
                title: 'Failed',
                text: 'Something went wrong...',
                icon: 'error',
                customClass: {
                  confirmButton: 'btn btn-success'
                }
              })
            }
          })
      }
    })
  }

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
  ]

  return (
    <Fragment>
      <Breadcrumbs title='Article' data={[{ title: 'Article List' }]} />
      <Card>
        <CardHeader>
          <CardTitle tag="h4">Article List</CardTitle>
          <Button color="success" tag={Link} to='/assistant/article/create-article'>Create Article</Button>
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
            theme={skin}
            className="react-dataTable my-1"
            sortIcon={<ChevronDown size={10} />}
            pagination
            paginationRowsPerPageOptions={[10, 25, 50, 100]}
            progressComponent={
              <div className="d-flex justify-content-center my-1">
                <Spinner color="primary" />
              </div>
            }
          />
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default ArticleList
