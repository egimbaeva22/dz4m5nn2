import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import { postData } from '../redux/action'

function PostRequest() {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({ name: '', username: '', isHuman: false })

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target
    const val = type === 'checkbox' ? checked : value
    setFormData({ ...formData, [name]: val })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.username.trim()){
      alert('Заполните все поля')
      return
    }
    dispatch(postData(formData))
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Form</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} sm="4" controlId="inlineFormInputName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
          </Form.Group>
          <Form.Group as={Col} sm="4" controlId="inlineFormInputGroupUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup>
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} sm="2" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I'm not a robot" name="isHuman" checked={formData.isHuman} onChange={handleChange} />
          </Form.Group>
          <Col sm="2" className="d-flex align-items-end">
            <Button variant="primary" type="submit" style={{ width: '100%' }}>Submit</Button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default PostRequest
