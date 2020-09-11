import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import styles from '../Styles/Styles';
import LaunchCard from './LaunchCard';

const LaunchList = props => {
    const { launchList } = props;
    return (
        <div style={{ height: 'calc(100vh - 60px)', overflow: "auto" }} >
            <Grid container spacing={1} style={{ width: 'auto', margin: 'auto' }}>
                {launchList.map(
                    (launchDetails, idx) =>
                        <Grid item lg={3} md={4} sm={6} xs={12}>
                            <LaunchCard launchDetails={launchDetails} />
                        </Grid>
                )}
            </Grid>
        </div>
    )
}

export default LaunchList;