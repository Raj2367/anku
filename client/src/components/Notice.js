import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import '../App.css';


class Notice extends Component {
    render() {
        return (
            <div style={{ width: "700px", height: "40vh", marginLeft: "80px" }}>
                <h3>Notices</h3>
                <Table stackable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell textAlign='right'>Notes</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>John</Table.Cell>
                            <Table.Cell>Approved</Table.Cell>
                            <Table.Cell textAlign='right'>None</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Jamie</Table.Cell>
                            <Table.Cell>Approved</Table.Cell>
                            <Table.Cell textAlign='right'>Requires call</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Jill</Table.Cell>
                            <Table.Cell>Denied</Table.Cell>
                            <Table.Cell textAlign='right'>None</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        )
    }
}




export default Notice