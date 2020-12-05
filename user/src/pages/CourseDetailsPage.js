import React, { Component, Fragment } from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Footer from "../components/Footer/Footer";
import RestClient from "../RestAPI/RestClient";
import AppUrl from "../RestAPI/AppUrl";

class CourseDetailsPage extends Component {

    constructor({match}) {
        super();
        this.state={
            MyCurseID:match.params.CourseID
        }
    }

    componentDidMount(){
        window.scroll(0,0)
    }
    render() {

        return (
            <Fragment>
                <TopNavigation title="Course Details"/>
                <CourseDetails id={this.state.MyCurseID}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CourseDetailsPage;