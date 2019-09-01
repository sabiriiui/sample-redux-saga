import React from "react";

import { Drawer } from 'antd';
import Form from './form'

const DonorAdd = (props) => {

    const { onClose, onSubmit } = props
    return (
        <div>
            <Drawer
                title="Add New Donor"
                width={720}
                onClose={onClose}
                visible={true}
            >
                <Form onSubmit={onSubmit} onClose={onClose} />

            </Drawer>
        </div>
    );

}

export default DonorAdd