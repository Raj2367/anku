import { Component } from "react";
import Notice from "../components/Notice";
import Calender from "../components/Calender";
import Carouseldemo from "../components/Carouseldemo";
import '../App.css';

class Home extends Component {
    render() {
        return (
            <div className="main">
                <table id="maintable">
                    <tbody>
                        <tr>
                            <td colSpan="2">
                                <Notice />
                            </td>
                            <td>
                                <div id="calender">
                                    <Calender />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="3">
                                <Carouseldemo />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Home;