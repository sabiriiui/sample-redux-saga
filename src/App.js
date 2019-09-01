import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import "antd/dist/antd.css";

import Table from './components/table'
import Add from './components/add'
import Edit from './components/edit'
import "./App.css";

const App = () => {

    const dispatch = useDispatch()

    const [showAdd, setShowAdd] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [selectedRec, setSelectedRec] = useState({})

    const donors = useSelector(state => state.donors)
    const loading = useSelector(state => state.loading)

    const loadDonors = () => {
        dispatch({ type: "LOAD_DONORS" }) // will be called on app load
    }

    useEffect(loadDonors, [])

    const handleSubmit = (data) => {
        setShowAdd(false)
        dispatch({ type: "ADD_DONOR", value: data })
    }

    const handleUpdate = (data) => {
        setShowEdit(false)
        dispatch({ type: "UPDATE_DONOR", value: { ...data, id: selectedRec.id } })
    }

    const handleNameClick = (record) => {
        setShowEdit(true)
        setSelectedRec(record)
    }

    return (
        <div className="main_donorslist">
            <div className="top_bar">
                <h1 >Donors</h1>
                <Button type="primary" onClick={() => setShowAdd(true)}>Add</Button>
            </div>
            <Table
                data={donors} loading={loading} onNameClick={handleNameClick} />
            {showAdd && <Add onClose={() => setShowAdd(false)} onSubmit={handleSubmit} />}
            {showEdit && <Edit onClose={() => setShowEdit(false)} onSubmit={handleUpdate} record={selectedRec} />}
        </div>
    );

}

export default App