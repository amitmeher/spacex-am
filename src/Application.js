import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from './Styles/Styles';
import { FilterSection, LaunchList } from './Components';

const Application = props => {
    const { classes } = props;
    const [selected, setSelected] = useState({});
    const [launchList, setLaunchList] = useState([]);

    const fetchData = () => {
        let selectedParam = {};
        for (let param in selected)
            selectedParam[param] = `${selected[param]}`.toLowerCase();
        fetch(`https://api.spacexdata.com/v3/launches?${new URLSearchParams({ limit: 100, ...selectedParam })}`)
            .then(response => response.json())
            .then(data => setLaunchList(data))
            .catch(error => console.error(error));
    }

    useEffect(() => { fetchData() }, [selected]);

    return (
        <div className={classes.fullOuter}>
            <span className={classes.header}>SpaceX Launch Programs</span>
            <Grid container direction='row' spacing={1} justify='space-between' style={{ width: 'auto', margin: 10, marginTop: 0 }}>
                <Grid item lg={2} md={2} sm={12} xs={12}>
                    <FilterSection selected={selected} setSelected={setSelected} />
                </Grid>
                <Grid item lg={10} md={10} sm={12} xs={12}>
                    <LaunchList launchList={launchList} />
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(Application);
