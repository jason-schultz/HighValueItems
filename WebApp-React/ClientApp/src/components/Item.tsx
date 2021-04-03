import * as React from 'react'
import { ContentItem } from '../models/ContentItem'


type ItemProps = {
    item: ContentItem,
    //onRemove: (item: ContentItem) => void
}

const Item = ({item}: ItemProps) => {
    return (<></>
        // <Grid border="thin" borderColor="black" templateColumns="repeat(4, 1fr)" gap={3}>
        //     <GridItem colSpan={2}>
        //         <Box pl={8}>{item.name}</Box>
        //     </GridItem>
        //     <GridItem marginRight={14} justifySelf="right">
        //             <Box>
        //                 ${item.value.toFixed(2)}
        //                 <IconButton
        //                     marginLeft={2}
        //                     size="xs" 
        //                     aria-label="Remove Item" 
        //                     variant="outline" 
        //                     colorScheme="red" 
        //                     icon={<DeleteIcon />} 
        //                     onClick={() => onRemove(item)}
        //                     />
        //             </Box>
        //     </GridItem>
        // </Grid>
    )
}

export default Item
