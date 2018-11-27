import React, { Component } from 'react';
import { withStyles, Grid, Button, Collapse, Fade, Typography, IconButton } from '@material-ui/core';
import { LinkedinBox, GithubBox } from 'mdi-material-ui';
import {styles} from '../style/aboutStyles.js';

import Resume from './Resume.js';

import khoa from '../assets/khoapic3.jpg';


class About extends Component {

  state = {
    resume: false,
  }

  showResume = () => {
    this.setState({ resume: !this.state.resume });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ resume: !this.state.resume });
    }, 1500);
  }
  render() {
    const { classes } = this.props;
    return (
      <Fade in={true} timeout={600}>
        <Grid
          container
          direction='column'
          className={classes.container}
        >
          <Button className={classes.resumeButton} variant='outlined' color='primary' onClick={this.showResume}>{this.state.resume ? 'Close' : 'Resumé'}</Button>
          <a target='_blank' rel='noopener noreferrer' className={classes.resumeLink} href='https://s3-us-west-2.amazonaws.com/khoascloud/Khoa+Huynh+-+Resume.pdf'>or download Resumé</a>
          <Collapse in={this.state.resume} timeout={1000}>
            <Resume />
          </Collapse>
          <div className={classes.profile}>
            <img className={classes.profilePic} src={khoa} />
            <Typography className={classes.blurb} variant='body1'>

              With a background in both psychology and software development, my aim is to create the best user experience between technology and the end users, with a particular interest in ensuring the best user experience for underrepresented populations.

              <br />
              <br />


              <strong>Interests: </strong> Photography, Cinematography, Hiking, and Pizza.

              <br />
              <br />

              <a href='https://www.linkedin.com/in/khoa-huynh92/' target='_blank' rel='noopener noreferrer'>
                <IconButton className={classes.iconButton}>
                  <LinkedinBox className={classes.linkedIn} />
                </IconButton>
              </a>
              <a target='_blank' href='https://github.com/khuynh92' rel='noopener noreferrer'>
                <IconButton>
                  <GithubBox className={classes.github} />
                </IconButton>
              </a>

            </Typography>

          </div>
        </Grid>
      </Fade>
    );
  }
}

export default withStyles(styles)(About);