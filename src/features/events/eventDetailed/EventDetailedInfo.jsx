import React from 'react';
import { Grid, Segment, Icon, Button } from 'semantic-ui-react'
import {format} from 'date-fns';

export default function EventDetailedInfo({event}){

    const date = new Date(event.date);

    return(
        <Segment.Group>
    <Segment attached="top">
        <Grid>
            <Grid.Column width={1}>
                <Icon size="large" color="teal" name="info"/>
            </Grid.Column>
            <Grid.Column width={15}>
                <p>{event.description}</p>
            </Grid.Column>
        </Grid>
    </Segment>
    <Segment attached>
        <Grid verticalAlign="middle">
            <Grid.Column width={1}>
                <Icon name="calendar" size="large" color="teal"/>
            </Grid.Column>
            <Grid.Column width={15}>
                <span>{format(date, 'MMMM d, yyyy h:mm a')}</span>
            </Grid.Column>
        </Grid>
    </Segment>
    <Segment attached>
        <Grid verticalAlign="middle">
            <Grid.Column width={1}>
                <Icon name="marker" size="large" color="teal"/>
            </Grid.Column>
            <Grid.Column width={11}>
                <span>{event.venue}</span>
            </Grid.Column>
            <Grid.Column width={4}>
                <Button color="teal" size="tiny" content="Show Map"/>
            </Grid.Column>
        </Grid>
    </Segment>
</Segment.Group>
    )
}