// Imports
import React from 'react';
import { Container, Section } from 'reactbulma';
import { Text, Spacer, Divider, Grid, Image, Display, Card } from '@geist-ui/react';
import styled from 'styled-components'
import HorzLine from './HorzLine';
import Lines from './Lines';
import PreFoot from './PreFoot'
import { TagInput, toaster, InlineAlert } from 'evergreen-ui';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import Images from '../assets/gallery.json'

var SORT_TAGS = [];

// AutoCompleteInput to enable filtering by image tags
function AutoCompleteTagInput() {
    const [values, setValues] = React.useState([])
    const vals = ['Electrical', 'Mechanical', 'Business', 'Challenger', 'C1']
    const allValues = React.useMemo(
        () => vals, []
    )
    const autocompleteItems = React.useMemo(() => allValues.filter((i) => !values.includes(i)), [allValues, values])

    return (
        <TagInput
            inputProps={{ placeholder: "Filter images by..." }}
            values={values}
            autocompleteItems={autocompleteItems}
            onAdd={(newValues) => {
                if(newValues.some((val) => !vals.includes(val))) {
                    toaster.danger("Oops, this tag does not exist. Try using the dropdown.", {zIndex: '999'})
                    return;
                } else {setValues([...values, ...newValues])}
                // Force component to rerender to reflect new changes
                console.log(values)
                SORT_TAGS = values;
            }}
            onRemove={(_value, index) => {
                setValues(values.filter((_, i) => i !== index))
                // Force component to rerender to reflect new changes
                SORT_TAGS = values;
            }}
            width="100%"
            disabled
        />
    )
}

// Get gallery.json and parse data
function RunImageData( props ) {
    const { tags } = props
    let i = Images.length
    let SORTED = [];
    console.log("[DEBUG] Found " + i + " images in the gallery database.")

    var URL_PREFIX = "https://drive.google.com/uc?export=view&id="
    // If there is no sort tags
    if(tags.length == 0) {
        console.log("[DEBUG] No sort tags selected.")
        // Iterate over every image in the database
        for(let j = 0; j < i; j++) {
            // If the image is set to be public
            if(Images[j].public) {
                SORTED.push({
                    url: (URL_PREFIX + Images[j].urlcode),
                    format: (Images[j].format),
                    date: (Images[j].date),
                    tags: (Images[j].tags)
                })
            }
        }
    } else { // If there are certain tags to sort by
        // Iterate over every image in the database
        console.log("[DEBUG] Sort tags selected.")
        for(let j = 0; j < i; j++) {
            // If the image is set to be public
            if(Images[j].public) {
                // If the image contains the tags being sorted
                if(tags.every((val) => Images[j].tags.includes(val))) {
                    SORTED.push({
                        url: (URL_PREFIX + Images[j].urlcode),
                        format: (Images[j].format),
                        date: (Images[j].date),
                        tags: (Images[j].tags)
                    })
                }
            }
        }
    }

    // Return generated subcomponent to be rendered in the main component
    return (
        <Grid.Container gap={2} justify="center" id='gridCont'>
            {SORTED.map(({ url }, index) => (
                <Grid key={index} sm={8}>
                    <Zoom>
                        <Image src={url} />
                    </Zoom>
                </Grid>
            ))}
        </Grid.Container>
    )
}

// Component rendering
class Gallery extends React.Component {
    forceUpdateHandler() {
        this.forceUpdate();
    }
    render() {
        return (
            <div style={{ position: 'relative' }}>
                <Container style={{ postition: 'relative' }}>
                    <Spacer h={2} />
                    <div className='columns'>
                        <div className='column is-one-third'>
                            <AutoCompleteTagInput />
                        </div>
                        <div className='column is-two-thirds'>
                        <InlineAlert intent="warning" marginTop="8px" marginLeft="5px">
                            The ability to filter images by tags is still under construction.
                        </InlineAlert>
                        </div>
                    </div>
                    <Spacer h={2} />
                    <RunImageData tags={SORT_TAGS} />
                </Container>
                <Spacer h={5} />
                <PreFoot message="Interested in reaching out?" redir="/contact" button="Contact Us" />
            </div>
        )
    }
}

export default Gallery;