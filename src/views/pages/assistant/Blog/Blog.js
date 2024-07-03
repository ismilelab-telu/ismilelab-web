import "@src/assets/scss/blog.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardBody, Button, Input, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import DataTable, { createTheme } from "react-data-table-component";
import { MoreVertical, FileText, Archive, Trash, Edit } from 'react-feather';

import { useNavigate } from 'react-router-dom'; // Import useNavigate

// ** Custom Theme for DataTable
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
  const [theme, setTheme] = useState("light"); // Change to "dark" to test dark theme
  const [filterText, setFilterText] = useState("");
  const [articles, setArticles] = useState([
    { id: 1, title: "OPEN AI announces A state-of-the-art LLM, OPEN AI GPT-4", date: "2023-06-20", tag: "News", writer: "John Doe" },
    { id: 2, title: "How mobile phone networks are embracing AI", date: "2024-06-12", tag: "Tutorials", writer: "Jane Smith" },
    { id: 3, title: "Computers built like brains could be a ‘competition killer’", date: "2024-06-22", tag: "News", writer: "Alice Johnson" }
  ]);

  // Simulate fetching data
  useEffect(() => {
    console.log("Articles fetched", articles);
  }, [articles]);

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(filterText.toLowerCase()) ||
    article.writer.toLowerCase().includes(filterText.toLowerCase()) ||
    article.tag.toLowerCase().includes(filterText.toLowerCase())
  );
  const navigate = useNavigate(); // Correctly instantiate navigate inside the component
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
      wrap: true
    },
    {
      name: "Tag",
      selector: (row) => row.tag,
      sortable: true,
      right: false,
      cell: (row) => (
        <span className={`tag ${row.tag.toLowerCase()}`}>{row.tag}</span>
      )
    },
    {
      name: "Writer",
      selector: (row) => row.writer,
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
    navigate(`/assistant/blog/edit-article/${id}`); // Navigate to edit page
  };

  const handleDelete = (id) => {
    setArticles(articles.filter(article => article.id !== id));
    console.log("Delete article", id);
  };

  const handleCreate = () => {
    navigate('/assistant/blog/create-article'); // Navigate to create page
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
          data={filteredArticles}
          columns={columns}
          progressPending={false}
          theme={theme}
          pagination
        />
      </CardBody>
    </Card>
  );
};

export default Blog;
