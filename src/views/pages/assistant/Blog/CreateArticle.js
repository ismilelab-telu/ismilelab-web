import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  AccessibilityHelp,
  Autoformat,
  AutoImage,
  AutoLink,
  Autosave,
  BalloonToolbar,
  BlockQuote,
  BlockToolbar,
  Bold,
  Code,
  CodeBlock,
  Essentials,
  FindAndReplace,
  Heading,
  Highlight,
  HorizontalLine,
  HtmlEmbed,
  ImageBlock,
  ImageCaption,
  ImageInline,
  ImageInsertViaUrl,
  ImageResize,
  ImageStyle,
  ImageTextAlternative,
  ImageToolbar,
  Indent,
  IndentBlock,
  Italic,
  Link,
  LinkImage,
  List,
  ListProperties,
  Paragraph,
  SelectAll,
  SpecialCharacters,
  SpecialCharactersArrows,
  SpecialCharactersCurrency,
  SpecialCharactersEssentials,
  SpecialCharactersLatin,
  SpecialCharactersMathematical,
  SpecialCharactersText,
  Strikethrough,
  Table,
  TableCellProperties,
  TableProperties,
  TableToolbar,
  TextTransformation,
  TodoList,
  Underline,
  Undo,
} from "ckeditor5";
import "ckeditor5/ckeditor5.css";

import { Controller, useForm } from "react-hook-form";

const CreateArticle = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [writer, setWriter] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // INI GIMANAAA??
  const onSubmit = (data) => {
    // dispatch(addAnswer({ ...data, file: data.file[0] })).then(
    //   ({ payload: { status } }) => {
    //     if (status === 200) {
    //       navigate("/student/journal"); // YANG INI JUGA?!
    //     }
    //   }
    // );
    console.log(data)
  };

  const handleSave = () => {
    const newArticle = {
      title,
      content,
      category,
      writer,
      date: new Date().toISOString().substring(0, 10),
    };
    console.log("Article saved:", newArticle);
    // You can also send this data to your backend server for persistent storage
  };

  const editorConfig = {
    toolbar: {
      items: [
        "undo",
        "redo",
        "|",
        "heading",
        "|",
        "bold",
        "italic",
        "underline",
        "|",
        "link",
        "insertImageViaUrl",
        "insertTable",
        "highlight",
        "blockQuote",
        "codeBlock",
        "|",
        "bulletedList",
        "numberedList",
        "todoList",
        "indent",
        "outdent",
      ],
      shouldNotGroupWhenFull: false,
    },
    plugins: [
      AccessibilityHelp,
      Autoformat,
      AutoImage,
      AutoLink,
      Autosave,
      BalloonToolbar,
      BlockQuote,
      BlockToolbar,
      Bold,
      Code,
      CodeBlock,
      Essentials,
      FindAndReplace,
      Heading,
      Highlight,
      HorizontalLine,
      HtmlEmbed,
      ImageBlock,
      ImageCaption,
      ImageInline,
      ImageInsertViaUrl,
      ImageResize,
      ImageStyle,
      ImageTextAlternative,
      ImageToolbar,
      Indent,
      IndentBlock,
      Italic,
      Link,
      LinkImage,
      List,
      ListProperties,
      Paragraph,
      SelectAll,
      SpecialCharacters,
      SpecialCharactersArrows,
      SpecialCharactersCurrency,
      SpecialCharactersEssentials,
      SpecialCharactersLatin,
      SpecialCharactersMathematical,
      SpecialCharactersText,
      Strikethrough,
      Table,
      TableCellProperties,
      TableProperties,
      TableToolbar,
      TextTransformation,
      TodoList,
      Underline,
      Undo,
    ],
    balloonToolbar: [
      "bold",
      "italic",
      "|",
      "link",
      "|",
      "bulletedList",
      "numberedList",
    ],
    blockToolbar: [
      "bold",
      "italic",
      "|",
      "link",
      "insertTable",
      "|",
      "bulletedList",
      "numberedList",
      "indent",
      "outdent",
    ],
    heading: {
      options: [
        {
          model: "paragraph",
          title: "Paragraph",
          class: "ck-heading_paragraph",
        },
        {
          model: "heading1",
          view: "h1",
          title: "Heading 1",
          class: "ck-heading_heading1",
        },
        {
          model: "heading2",
          view: "h2",
          title: "Heading 2",
          class: "ck-heading_heading2",
        },
        {
          model: "heading3",
          view: "h3",
          title: "Heading 3",
          class: "ck-heading_heading3",
        },
        {
          model: "heading4",
          view: "h4",
          title: "Heading 4",
          class: "ck-heading_heading4",
        },
        {
          model: "heading5",
          view: "h5",
          title: "Heading 5",
          class: "ck-heading_heading5",
        },
        {
          model: "heading6",
          view: "h6",
          title: "Heading 6",
          class: "ck-heading_heading6",
        },
      ],
    },
    image: {
      toolbar: [
        "toggleImageCaption",
        "imageTextAlternative",
        "|",
        "imageStyle:inline",
        "imageStyle:wrapText",
        "imageStyle:breakText",
        "|",
        "resizeImage",
      ],
    },
    link: {
      addTargetToExternalLinks: true,
      defaultProtocol: "https://",
      decorators: {
        toggleDownloadable: {
          mode: "manual",
          label: "Downloadable",
          attributes: {
            download: "file",
          },
        },
      },
    },
    list: {
      properties: {
        styles: true,
        startIndex: true,
        reversed: true,
      },
    },
    placeholder: "Type or paste your content here!",
    table: {
      contentToolbar: [
        "tableColumn",
        "tableRow",
        "mergeTableCells",
        "tableProperties",
        "tableCellProperties",
      ],
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Create New Article</CardTitle>
      </CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row md={3}>
            <FormGroup>
              <Label for="title">Title</Label>
              <Controller
                name="title"
                control={control}
                defaultValue={""}
                rules={{ required: "Isi judulnya!", minLength: 1 }}
                render={({ field }) => (
                  <Input
                    type="text"
                    id="title"
                    // value={title}
                    // onChange={(e) => setTitle(e.target.value)}
                    invalid={errors.title && true}
                    {...field}
                  />
                )}
              />
            </FormGroup>
            <FormGroup>
              <Label for="category">Category</Label>
              <Controller
                name="category"
                control={control}
                defaultValue={"New"}
                render={({ field }) => (
                  <Input
                    type="select"
                    id="category"
                    // value={category}
                    // onChange={(e) => setCategory(e.target.value)}
                    invalid={errors.title && true}
                    {...field}
                  >
                    <option value="New">News</option>
                    <option value="Announcement">Announcements</option>
                    <option value="Tutorial">Tutorials</option>
                  </Input>
                )}
              />
            </FormGroup>
            <FormGroup>
              <Label for="uploadThumbnail">Upload Thumbnail</Label>
              <Controller
                name="uploadThumbnail"
                control={control}
                defaultValue={[]}
                render={({ field }) => (
                  <Input type="file" id="inputFile" {...field} />
                )}
              />
            </FormGroup>
          </Row>

          {/* <FormGroup>
            <Label for="writer">Writer</Label>
            <Input
              type="text"
              id="writer"
              value={writer}
              onChange={(e) => setWriter(e.target.value)}
            />
          </FormGroup> */}

          <FormGroup>
            <Label for="summary">Summary</Label>
            <Controller
              name="summary"
              control={control}
              rules={{ required: "Summary-nya di isi", minLength: 1 }}
              render={({ field }) => (
                <Input
                  type="textarea"
                  id="summary"
                  // value={title}
                  // onChange={(e) => setSummary(e.target.value)}
                  invalid={errors.summary && true}
                  {...field}
                />
              )}
            />
          </FormGroup>
          <FormGroup>
            <Label for="content">Content</Label>
            <Controller
            name="content"
            control={control}
            rules={{required:"Content-nya di isi!", minLength: 1}}
              render={({ field }) => (
                <CKEditor
                  editor={ClassicEditor}
                  config={editorConfig}
                  data={content}
                  // onChange={(event, editor) => {
                  //   const data = editor.getData();
                  //   setContent(data);
                  // }}
                  invalid={errors.content && true}
                  {...field}
                />
              )}
            />
          </FormGroup>
          <Button color="primary" onClick={handleSave}>
            Save Article
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default CreateArticle;
