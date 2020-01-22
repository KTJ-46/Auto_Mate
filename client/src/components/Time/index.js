import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
 
export default class MyComponent extends React.Component {
    render() {
        return (
            <Moment format="YYYY/MM/DD">
                1976-04-19T12:59-0500
            </Moment>
        );
    }
}