import React from "react";

import { Drawer } from 'antd';
import Form from './form'

const DonorEdit = (props) => {

    const { onClose, onSubmit, record } = props
    return (
        <div>
            <Drawer
                title="Edit Donor"
                width={720}
                onClose={onClose}
                visible={true}
            >
                <Form onSubmit={onSubmit} onClose={onClose} initialValues={
                    { ...record }
                } />

            </Drawer>
        </div>
    );

}

export default DonorEdit