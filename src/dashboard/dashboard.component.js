import React, { useEffect } from 'react'
import { attemptLoadDashboard } from './dashboard.actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    ...state,
});
const mapDispatchToProps = () => (
    {loadDashboardData: attemptLoadDashboard}
);

const connectToStore = connect(
    mapDispatchToProps,
    mapStateToProps);

const Dashboard = (props={props}) => {
    props.loadDashboardData();
    useEffect(() => {
        
        console.log('hello',props)
      }, []);

    return (
        <div>
            Hello
        </div>
    )
}

export default connectToStore(Dashboard);
