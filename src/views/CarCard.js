import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: '100%',
  },
  media: {
    height: 0,
    paddingTop: '45%', // 16:9
  },
};

function CarCard(props) {
  const { classes, id, makeId, name, price, imageUrl, review, make } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title={name}
        />
        {name && <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {make} {name}
          </Typography>
          <Typography variant="subheading" component="h3">
            ${price}
          </Typography>
          <p />
          <Typography>
            {review}
          </Typography>
        </CardContent>}
        {!name && <CardContent>
          <Typography variant="display1" component="h3">
            No Model matching
          </Typography>
        </CardContent>
        }
      </Card>
    </div>
  );
}

CarCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CarCard);