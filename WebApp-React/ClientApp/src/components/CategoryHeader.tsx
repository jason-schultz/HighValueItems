import React from 'react'
import { ContentItem } from '../models/ContentItem'

type CategoryHeaderProps = {
    text: string,
    items: Array<ContentItem>
}

const getTotal = (arr: Array<ContentItem>) => {
    return arr.reduce((total, item) => { return total += item.value }, 0).toFixed(2)
}

const CategoryHeader = ({text, items}: CategoryHeaderProps) => {
   
    return (<></>
        // <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        //     <GridItem colSpan={2}>
        //         <Heading id="name" fontSize="xl" fontWeight="semibold">{text}</Heading>
        //     </GridItem>
        //     <GridItem colSpan={2} >
        //         <Text id="value" fontWeight="bold" fontStyle="italic">${getTotal(items)}</Text>
        //     </GridItem>
        // </Grid>
    )
}

export default CategoryHeader