
import React from "react";
import { Table, Tooltip, Button, Icon } from 'antd';

const renderTable = (props) => {
    const { data, loading, onNameClick } = props
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => <Tooltip title='Click to edit profile'><Button type='link' onClick={() => onNameClick(record)}>{text}</Button></Tooltip>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            colSpan: 1,
        },
        {
            title: 'Phone',
            dataIndex: 'phone1',
            key: 'phone1',
            colSpan: 2,
            render: (text, record) => <span><Icon type={record.phone1_type === 'home' ? "home" : 'phone'} /> {' ' + text}</span>,

        },
        {
            title: 'Phone',
            dataIndex: 'phone2',
            key: 'phone2',
            colSpan: 0,
            render: (text, record) => <span><Icon type={record.phone2_type === 'home' ? "home" : 'phone'} /> {' ' + text}</span>,

        },
        {
            title: 'Organization Type',
            dataIndex: 'org_type',
            key: 'org_type',
        },
        {
            title: 'Organization Name',
            dataIndex: 'org_name',
            key: 'org_name'
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        }
    ];

    return <Table columns={columns} dataSource={data} bordered loading={loading} pagination={{ pageSize: 10 }} />
}

export default renderTable