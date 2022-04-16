import { Component } from "react";
import { getApidata } from "../helper/getAPIData";
class AddEvents extends Component {
    constructor() {
        super();
        this.state = {
            eventname: "",
            eventdate: "",
            eventmonth: "",
            eventyear: ""
        }
        this.submitTarget = this.submitTarget.bind(this);
    }
    onChange(event) {
        let field = event.target.name;
        let value = event.target.value;
        this.setState({
            [field]: value
        });
    }
    submitTarget = async (e) => {
        e.preventDefault();
        let data = {};
        data.eventname = this.state.eventname;
        let eventdate = new Date(this.state.eventdate + "-" + this.state.eventmonth + "-" + this.state.eventyear);
        data.eventdate = eventdate;
        getApidata("POST",data)
            .then(response => {
                alert("data added successfully");
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        return (
            <div style={{ padding: "10%" }}>
                <form onSubmit={(e) => this.submitTarget(e)}>
                    Event Name: <input name="eventname" onChange={this.onChange.bind(this)} />
                    <div>
                        Event date:
                        <div>
                            date: <input name="eventdate" onChange={this.onChange.bind(this)} />
                        </div>
                        <div>
                            month: <input name="eventmonth" onChange={this.onChange.bind(this)} />
                        </div>
                        <div>
                            year: <input name="eventyear" onChange={this.onChange.bind(this)} />
                        </div>
                    </div>
                    <button>Save</button>
                </form>
            </div>
        )
    }
}
export default AddEvents;