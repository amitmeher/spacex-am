import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import logo from '../logo.svg';

const useStyles = makeStyles({
  media: {
    height: 200,
  },
  content: {
    padding: 5,
    height: 50
  },
  content: {
    padding: 2
  }
});

const LaunchCard = props => {
  const { launchDetails } = props;
  const classes = useStyles();
  return (
    <Card>
      <CardMedia
        className={classes.media}
        image={launchDetails.links.flickr_images[0] || logo}
      />
      <CardContent className={classes.content}>
        <Typography variant="subtitle2" noWrap={true} style={{ color: '#315584', fontWeight: 'bold' }}>
          {launchDetails.mission_name} # {launchDetails.flight_number}
        </Typography>
        <Typography variant="body2" noWrap={true} style={{ fontWeight: 'bold' }}>
          Mission Ids: {launchDetails.mission_id.map(
          item =>
            (<ul style={{ color: '#315584', fontWeight: 'bold' }}>
              <li>
                {item}
              </li>
            </ul>)
        )}
        </Typography>
        <Typography variant="body2" noWrap={true} style={{ fontWeight: 'bold' }}>
          Launch Year: {new Date(launchDetails.launch_date_local).getFullYear()}
        </Typography>
        <Typography variant="body2" noWrap={true} style={{ fontWeight: 'bold' }}>
          Successful Launch: {`${launchDetails.launch_success}`}
        </Typography>
        <Typography variant="body2" noWrap={true} style={{ fontWeight: 'bold' }}>
          Successful Landing: {launchDetails.launch_landing ? `${launchDetails.launch_landing}` : 'N/A'}
        </Typography>
      </CardContent>
    </Card >
  );
}

export default LaunchCard;
