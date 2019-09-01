import React from "react";

import {
    Form,
    Input,
    Card,
    Select,
    Button,
} from 'antd';

const { Option } = Select;


const RegistrationForm = (props) => {
    const handleSubmit = e => {
        e.preventDefault();
        const { form, onSubmit } = props
        form.validateFieldsAndScroll((err, values) => {
            if (!err && onSubmit) {
                onSubmit(values)
            }
        });
    };



    const { getFieldDecorator } = props.form;
    const { initialValues = {} } = props

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };
    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };
    const select = <Select style={{ width: 120 }}>
        <Option value="home">Home</Option>
        <Option value="personal">Personal</Option>
    </Select>
    const ph1Type = getFieldDecorator('phone1_type', {
        initialValue: initialValues.phone1_type,
    })(
        select,
    );

    const ph2Type = getFieldDecorator('phone2_type', {
        initialValue: initialValues.phone2_type,
    })(
        select,
    );

    return (
        <Form {...formItemLayout} onSubmit={handleSubmit}>
            <Card title="Personal Info">

                <Form.Item
                    label='Name'
                >
                    {getFieldDecorator('name', {
                        initialValue: initialValues.name,
                        rules: [{ type: 'string', required: true, message: 'Please input donor name!', whitespace: true }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item
                    label='Type'
                >
                    {getFieldDecorator('type', {
                        initialValue: initialValues.type,
                        rules: [{ type: 'string', required: true, message: 'Please input donor type!', whitespace: true }],
                    })(<Select>
                        <Option value="Individual">Individual</Option>
                        <Option value="Organization">Organization</Option>
                    </Select>)}
                </Form.Item>

            </Card>

            <Card title="Organization Info">

                <Form.Item
                    label='Type'
                >
                    {getFieldDecorator('org_type', {
                        initialValue: initialValues.org_type,
                        rules: [{ type: 'string', required: true, message: 'Please input Organization Type!', whitespace: true }],
                    })(<Select>
                        <Option value="Individual">Business</Option>
                        <Option value="Organization">School</Option>
                    </Select>)}
                </Form.Item>

                <Form.Item
                    label='Name'
                >
                    {getFieldDecorator('org_name', {
                        initialValue: initialValues.org_name,
                        rules: [{ type: 'string', required: true, message: 'Please input Organization Name!', whitespace: true }],
                    })(<Input />)}
                </Form.Item>
            </Card>
            <Card title="Contact Info">
                <Form.Item label="E-mail">
                    {getFieldDecorator('email', {
                        initialValue: initialValues.email,
                        rules: [
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Primary Phone Number">
                    {getFieldDecorator('phone1', {
                        initialValue: initialValues.phone1,
                        rules: [{ type: 'string', required: true, message: 'Please input your phone number!' }],
                    })(<Input addonBefore={ph1Type} style={{ width: '100%' }} />)}
                </Form.Item>
                <Form.Item label="Phone Number">
                    {getFieldDecorator('phone2', {
                        initialValue: initialValues.phone2, rules: [{ type: 'string' }]
                    })(<Input addonBefore={ph2Type} style={{ width: '100%' }} />)}
                </Form.Item>
                <Form.Item
                    label='Address'
                >
                    {getFieldDecorator('address', {
                        initialValue: initialValues.address,
                        rules: [{ type: 'string', required: true, message: 'Please input Address!', whitespace: true }],
                    })(<Input />)}
                </Form.Item>
            </Card>
            <Form.Item {...tailFormItemLayout} className="submit-abs">
                <Button type="primary" htmlType="submit">
                    {props.initialValues ? 'Update' : 'Add'} Donor
                    </Button>
            </Form.Item>
        </Form>
    );

}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

export default WrappedRegistrationForm