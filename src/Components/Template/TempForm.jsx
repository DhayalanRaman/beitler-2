import React from 'react'
import { useSelector } from 'react-redux';
import { Form, Row, Col, Button } from "react-bootstrap";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Formik } from "formik";
import * as Yup from "yup";

const myValidationSchema = Yup.object().shape({
    type: Yup.string().required("Notification Type is required"),
    eventId: Yup.string().required("Notification Event is required"),
    subject: Yup.string().required("Subject is requied"),
    bodyText: Yup.string().required(""),
});
const TempForm = ({ TD, handleFormSubmit, em, handleClose }) => {
    const Events = useSelector(state => state.fetchEvents.events);
    return (
        <Formik
            initialValues={{
                type: TD.type ? TD.type : "",
                eventId: TD.eventId ? TD.eventId : "",
                subject: TD.subject ? TD.subject : "",
                isActive: TD.isActive ? TD.isActive : false,
                bodyText: TD.bodyText ? TD.bodyText : "",
                id: TD.id ? TD.id : 0,
            }}
            validationSchema={myValidationSchema}
            onSubmit={(values, actions) => {
                // alert(values)
                handleFormSubmit(values);
                setTimeout(() => {
                    actions.resetForm();
                }, 1000);
            }}
        >
            {formikProps => {
                const {
                    values,
                    errors,
                    touched,
                    setFieldValue,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isValid,
                    dirty,
                } = formikProps;
                console.log(values);
                // console.log(initialValues);
                return (
                    <div>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Form.Group as={Col} controlId="type">
                                    <Form.Label> Title<span className="required">*</span> </Form.Label>
                                    <Form.Select
                                        name="type"
                                        value={values.type}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        as="select"
                                        disabled={false}
                                    >
                                        <option value="">--Select-Type--</option>
                                        <option value={48}>email</option>
                                        <option value={49} >sms</option>
                                    </Form.Select>
                                    {errors.type && touched.type ? (
                                        <div className="error_msg">{errors.type}</div>
                                    ) : null}
                                </Form.Group>
                                <Form.Group as={Col} controlId="eventId">
                                    <Form.Label> Event Name <span className="required">*</span> </Form.Label>
                                    <Form.Select
                                        name="eventId"
                                        value={values.eventId}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        as="select"
                                        disabled={false}
                                    >
                                        <option value={""}>{"--Select-Event--"}</option>
                                        {Events && Events.map((e) => (
                                            <option key={e.id} value={e.id}>{e.name}</option>
                                        ))}
                                    </Form.Select>
                                    {errors.eventId && touched.eventId ? (
                                        <div className="error_msg">{errors.eventId}</div>
                                    ) : null}
                                </Form.Group>
                            </Row>
                            <Form.Group controlId="subject">
                                <Form.Label > Subject<span className="required">*</span> </Form.Label>
                                <Form.Control
                                    name="subject"
                                    value={values.subject}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    disabled={false}
                                />
                                {errors.subject && touched.subject ? (
                                    <div className="error_msg">{errors.subject}</div>
                                ) : null}
                            </Form.Group>
                            <Form.Group controlId="isActive">
                                <Form.Label>IsActive</Form.Label>
                                <Form.Check
                                    name="isActive"
                                    value={values.isActive}
                                    checked={values.isActive}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="checkbox"
                                    autoComplete="nope"
                                />
                            </Form.Group>
                            <Form.Group controlId="bodyText">
                                <Form.Label> BodyText<span className="required">*</span> </Form.Label>
                                <CKEditor
                                    name="bodyText"
                                    editor={ClassicEditor}
                                    data={values.bodyText}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        // console.log( { event, editor, data } );
                                        setFieldValue("bodyText", data);
                                    }}
                                    onBlur={(event, editor) => {
                                        // console.log( 'Blur.', editor );
                                    }}
                                    onFocus={(event, editor) => {
                                        // console.log( 'Focus.', editor );
                                    }}
                                />
                                {/* <Form.Control
                                    name="bodyText"
                                    value={values.bodyText}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    as="textarea"
                                    className="text_area"
                                /> */}
                                {errors.bodyText && touched.bodyText ? (
                                    <div className="error_msg">{errors.bodyText}</div>
                                ) : null}
                            </Form.Group>
                            <div className='align_right'>
                                <Button
                                    onClick={handleClose}
                                    className="cancel_Btn"
                                >Cancel</Button>
                                <Button
                                    type='submit'
                                    disabled={!(dirty && isValid)}
                                    className="save_Btn"
                                >
                                    {em ? "Update" : "Save"}
                                </Button>
                            </div>
                        </Form>
                    </div >
                )
            }}
        </Formik >
    )
}

export default TempForm