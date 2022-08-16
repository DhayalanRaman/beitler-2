import React from 'react';
import { useDispatch } from 'react-redux';
import { getEventsStart, createEventStart, updateEventStart } from '../../Actions/eventAction';
import { Form, Row, Col, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { Formik } from "formik";
import * as Yup from "yup";

const myValidationSchema = Yup.object().shape({
    name: Yup.string().required("Please enter Name"),
    description: Yup.string().required("Please enter Description")
});

function EventForm({ handleClose, ED, onHandleEvent, em }) {
    const dispatch = useDispatch();
    const eventHandler = () => {
        dispatch(getEventsStart());
    };
    return (
        <Formik
            initialValues={{
                name: ED.name ? ED.name : "",
                description: ED.description ? ED.description : "",
                isActive: ED.isActive ? ED.isActive : false,
                id: ED.id ? ED.id : 0,
            }}
            validationSchema={myValidationSchema}
            onSubmit={(values, actions) => {
                if (em) {
                    dispatch(updateEventStart(values));
                    toast.success("event Updated Successfully");
                } else {
                    dispatch(createEventStart(values));
                    toast.success("event added Successfully");
                }
                handleClose();
                setTimeout(() => {
                    actions.resetForm();
                    eventHandler();
                }, 2000);
            }}
        >
            {formikProps => {
                const {
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isValid,
                    dirty,
                } = formikProps;

                return (
                    <div>
                        <Form>
                            <Row>
                                <Form.Group as={Col} controlId="name">
                                    <Form.Label> Name<span className="required">*</span> </Form.Label>
                                    <Form.Control
                                        name='name'
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder='Enter Event Name'
                                        disabled={false}
                                    />
                                    {errors.name && touched.name ? (
                                        <div className="error_msg">{errors.name}</div>
                                    ) : null}
                                </Form.Group>
                                <Form.Group as={Col} controlId="description">
                                    <Form.Label> Description<span className="required">*</span> </Form.Label>
                                    <Form.Control
                                        name='description'
                                        value={values.description}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder='Enter Event Description'
                                        disabled={false}
                                    />
                                    {errors.description && touched.description ? (
                                        <div className="error_msg">{errors.description}</div>
                                    ) : null}
                                </Form.Group>
                            </Row>
                            <Form.Group controlId="isActive">
                                <Form.Label>Status</Form.Label>
                                <Form.Check
                                    name='isActive'
                                    value={values.isActive}
                                    checked={values.isActive}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="checkbox"
                                    autoComplete="nope"
                                />
                            </Form.Group>
                        </Form>
                        <div className='align_right'>
                            <Button onClick={handleClose} className="cancel_Btn">Cancel</Button>
                            <Button
                                type='submit'
                                className="save_Btn"
                                disabled={!(dirty && isValid)}
                                onClick={handleSubmit}
                            >
                                {em ? "Update" : "Save"}
                            </Button>
                        </div>

                    </div>
                )
            }}
        </Formik >
    );
};

export default EventForm;