import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import styles from '../Styles/Styles';

const getYearRange = startYear => {
    const currentYear = new Date().getFullYear();
    let years = [startYear || 2006]; // startYear must be less or equals to current year
    while (!years.includes(currentYear))
        years = [...years, years[years.length - 1] + 1]
    return years;
}

const FilterSection = props => {
    const { classes, selected, setSelected } = props;
    const handleSelect = (name, value) => setSelected({ ...selected, [name]: value });
    const buttonStyle = (name, value) => ({ backgroundColor: selected[name] === value ? "LimeGreen" : 'LightGreen', padding: '1px', textTransform: "none" });
    return (
        <Paper >
            <span className={classes.filterHeader}>Filters</span>
            <Grid container spacing={2} justify='space-between' style={{ width: 'auto', margin: '20px' }}>
                <Grid container justify='center' className={classes.filterHeader}>Launch Year <hr className={classes.horizontal} /></Grid>
                {getYearRange().map(value =>
                    <Grid item >
                        <Button
                            style={buttonStyle('launch_year', value)}
                            onClick={() => handleSelect('launch_year', value)}
                        >
                            {value}
                        </Button>
                    </Grid>
                )}</Grid>
            <Grid container spacing={2} justify='space-between' style={{ width: 'auto', margin: '20px' }}>
                <Grid container justify='center' className={classes.filterHeader}>Successful Launch <hr className={classes.horizontal} /></Grid>
                {['True', 'False'].map(value =>
                    <Grid item >
                        <Button
                            style={buttonStyle('launch_success', value)}
                            onClick={() => handleSelect('launch_success', value)}
                        >
                            {value}
                        </Button>
                    </Grid>
                )}
            </Grid>
            <Grid container spacing={2} justify='space-between' style={{ width: 'auto', margin: '20px' }}>
                <Grid container justify='center' className={classes.filterHeader}>Successful Landing <hr className={classes.horizontal} /></Grid>
                {['True', 'False'].map(value =>
                    <Grid item >
                        <Button
                            style={buttonStyle('land_success', value)}
                            onClick={() => handleSelect('land_success', value)}
                        >
                            {value}
                        </Button>
                    </Grid>
                )}
            </Grid>
            <br />
        </Paper >
    )
}

export default withStyles(styles)(FilterSection);