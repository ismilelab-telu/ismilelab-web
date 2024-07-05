import { useEffect } from "react"

import { Card, CardHeader, CardTitle, CardBody, Col, Row, Button, Form, FormGroup, Label, Input, FormFeedback } from "reactstrap"
import Select from 'react-select'

import { CKEditor } from "@ckeditor/ckeditor5-react"
import { ClassicEditor, AccessibilityHelp, Autoformat, AutoImage, AutoLink, Autosave, BalloonToolbar, BlockQuote, BlockToolbar, Bold, Code, CodeBlock, Essentials, FindAndReplace, Heading, Highlight, HorizontalLine, HtmlEmbed, ImageBlock, ImageCaption, ImageInline, ImageInsertViaUrl, ImageResize, ImageStyle, ImageTextAlternative, ImageToolbar, Indent, IndentBlock, Italic, Link, LinkImage, List, ListProperties, Paragraph, SelectAll, SpecialCharacters, SpecialCharactersArrows, SpecialCharactersCurrency, SpecialCharactersEssentials, SpecialCharactersLatin, SpecialCharactersMathematical, SpecialCharactersText, Strikethrough, Table, TableCellProperties, TableProperties, TableToolbar, TextTransformation, TodoList, Underline, Undo } from "ckeditor5"
import "ckeditor5/ckeditor5.css"

import { useDispatch, useSelector } from "react-redux"
import { getArticleCategories, createArticle } from "@store/api/post"

import { useNavigate } from "react-router-dom"
import { Controller, useForm } from "react-hook-form"
import { selectThemeColors, getUserData } from '@utils'

const CreateArticle = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { categories, isLoading } = useSelector((state) => state.post)
  const { idAssistant } = getUserData()

  const defaultValues = {
    title: "",
    summary: "",
    thumbnail: [],
    category: "",
    content: ""
  }

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  useEffect(() => {
    dispatch(getArticleCategories())
  }, [])

  const onSubmit = (data) => {
    dispatch(createArticle({
      ...data,
      idAssistant,
      idCategory: data.category.value,
      thumbnail: data.thumbnail[0]
    })).then(
      ({ payload: { status } }) => {
        if (status === 200) {
          navigate("/assistant/article")
        }
      }
    )
  }

  const editorConfig = {
    toolbar: {
      items: ["undo", "redo", "|", "heading", "|", "bold", "italic", "underline", "|", "link", "insertImageViaUrl", "insertTable", "highlight", "blockQuote", "codeBlock", "|", "bulletedList", "numberedList", "todoList", "indent", "outdent"],
      shouldNotGroupWhenFull: false
    },
    plugins: [AccessibilityHelp, Autoformat, AutoImage, AutoLink, Autosave, BalloonToolbar, BlockQuote, BlockToolbar, Bold, Code, CodeBlock, Essentials, FindAndReplace, Heading, Highlight, HorizontalLine, HtmlEmbed, ImageBlock, ImageCaption, ImageInline, ImageInsertViaUrl, ImageResize, ImageStyle, ImageTextAlternative, ImageToolbar, Indent, IndentBlock, Italic, Link, LinkImage, List, ListProperties, Paragraph, SelectAll, SpecialCharacters, SpecialCharactersArrows, SpecialCharactersCurrency, SpecialCharactersEssentials, SpecialCharactersLatin, SpecialCharactersMathematical, SpecialCharactersText, Strikethrough, Table, TableCellProperties, TableProperties, TableToolbar, TextTransformation, TodoList, Underline, Undo],
    balloonToolbar: ["bold", "italic", "|", "link", "|", "bulletedList", "numberedList"],
    blockToolbar: ["bold", "italic", "|", "link", "insertTable", "|", "bulletedList", "numberedList", "indent", "outdent"],
    heading: {
      options: [
        {
          model: "paragraph",
          title: "Paragraph",
          class: "ck-heading_paragraph"
        },
        {
          model: "heading1",
          view: "h1",
          title: "Heading 1",
          class: "ck-heading_heading1"
        },
        {
          model: "heading2",
          view: "h2",
          title: "Heading 2",
          class: "ck-heading_heading2"
        },
        {
          model: "heading3",
          view: "h3",
          title: "Heading 3",
          class: "ck-heading_heading3"
        },
        {
          model: "heading4",
          view: "h4",
          title: "Heading 4",
          class: "ck-heading_heading4"
        },
        {
          model: "heading5",
          view: "h5",
          title: "Heading 5",
          class: "ck-heading_heading5"
        },
        {
          model: "heading6",
          view: "h6",
          title: "Heading 6",
          class: "ck-heading_heading6"
        }
      ]
    },
    image: {
      toolbar: ["toggleImageCaption", "imageTextAlternative", "|", "imageStyle:inline", "imageStyle:wrapText", "imageStyle:breakText", "|", "resizeImage"]
    },
    link: {
      addTargetToExternalLinks: true,
      defaultProtocol: "https://",
      decorators: {
        toggleDownloadable: {
          mode: "manual",
          label: "Downloadable",
          attributes: {
            download: "file"
          }
        }
      }
    },
    list: {
      properties: {
        styles: true,
        startIndex: true,
        reversed: true
      }
    },
    placeholder: "Type or paste your content here!",
    table: {
      contentToolbar: ["tableColumn", "tableRow", "mergeTableCells", "tableProperties", "tableCellProperties"]
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader>
          <CardTitle tag="h4">Create New Article</CardTitle>
        </CardHeader>
        <CardBody>
          <Row md={3}>
            <FormGroup>
              <Label for="title">Title</Label>
              <Controller
                name="title"
                control={control}
                disabled={isLoading}
                render={({ field }) => (
                  <Input
                    type="text"
                    invalid={errors.title && true}
                    required
                    {...field}
                  />
                )}
              />
              <FormFeedback>{errors.title && errors.title.message}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="category">Category</Label>
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <Select
                    theme={selectThemeColors}
                    className='react-select'
                    classNamePrefix='select'
                    options={categories}
                    isDisabled={isLoading}
                    isLoading={isLoading}
                    required
                    {...field}
                  />
                )}
              />
            </FormGroup>
            <FormGroup>
              <Label for="thumbnail">Upload Thumbnail</Label>
              <Controller
                name="thumbnail"
                control={control}
                defaultValue={[]}
                render={({ field }) => (
                  <Input
                    type="file"
                    invalid={errors.thumbnail && true}
                    required
                    accept="image/*"
                    // {...field}
                    disabled={isLoading}
                    onChange={(e) => field.onChange(e.target.files)}
                  />
                )}
              />
              <FormFeedback>{errors.thumbnailUrl && errors.thumbnailUrl.message}</FormFeedback>
            </FormGroup>
          </Row>
          <FormGroup>
            <Label for="summary">Summary</Label>
            <Controller
              name="summary"
              control={control}
              rules={{ required: "Summary-nya di isi" }}
              disabled={isLoading}
              render={({ field }) => (
                <Input
                  type="textarea"
                  id="summary"
                  invalid={errors.summary && true}
                  required
                  {...field}
                />
              )}
            />
            <FormFeedback>{errors.summary && errors.summary.message}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="content">Content</Label>
            <Controller
              name="content"
              control={control}
              // rules={{ required: "Content-nya di isi!" }}
              render={({ field }) => (
                <CKEditor
                  editor={ClassicEditor}
                  config={editorConfig}
                  data={field.value}
                  onChange={(event, editor) => {
                    const data = editor.getData()
                    field.onChange(data)
                  }}
                  invalid={errors.content && true}
                />
              )}
            />

          </FormGroup>
          <Button color="primary" type="submit" disabled={isLoading}>
            Save Article
          </Button>
        </CardBody>
      </Card>
    </Form>
  )
}

export default CreateArticle
