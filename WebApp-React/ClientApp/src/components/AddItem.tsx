import React, { FormEvent, useState } from 'react'
import { ContentItem } from '../models/ContentItem'

type AddItemProps = {
    addContentItem: (item: ContentItem) => void
}


const AddItem = ({addContentItem}: AddItemProps) => {
    //  useState hook to keep track of the item values.
    const [item, setItem] = useState<ContentItem>({
        name: "",
        value: 0,
        category: ""
    } as ContentItem)

    const toast = useToast()

    const handleAdd = (item: ContentItem) => {
        return Object.keys(item).map((key:string) => {
            if(key === 'name' || key === 'category')
            {
                if(item[key] === "") 
                {
                    toast({
                        position: 'top',
                        duration: 5000,
                        isClosable: true,
                        description: `Please enter a value for ${key}`,
                        status: 'error'
                    })

                    return false
                }
            }
            return true
        })
    }

    const handleSubmit = (e: FormEvent) => {
        //  Prevent default form submit from firing
        e.preventDefault()
        //  Get out if item doesn't exist
        if (!item) return
        if(!handleAdd(item)) return

        //  Call addContentItem method
        addContentItem(item)
        //  Reset the item in state
        //  Reset name and value, keep the selected option though. (spread operator)
        setItem({
            ...item,
            name: "",
            value: 0,
           })
    }

    //  Quick little function to check if a value is in fact a number
    const isNumber = (n: any) => { return !isNaN(parseFloat(n)) && !isNaN(n-0) }

    const handleChange = (e: any) => {
        //  Sets the value of input item.
        //  Uses spread operator to leave the other values unchanged.
        //  Updates the property based on the name of input element
        //  Input element would be required to have the name property set, or this wouldn't work. 
        setItem({
            ...item,
            [e.target.name]: e.target.value
        })
    }

    const handleItemValueChange = (e: string) => {
        //  Only set the value if this a number
        if(isNumber(e)) 
            setItem({...item, value: +e })
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid templateColumns="repeat(4, 1fr)" gap={4} padding={4}>
                <Input type="text" name="name" placeholder="Item Name" value={item.name} onChange={handleChange} />
                <NumberInput defaultValue={0} min={0} name="value" value={item.value} onChange={handleItemValueChange}>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <Select name="category" value={item.category} onChange={handleChange}>    
                    <option value="">Select...</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Animal">Animal</option>
                </Select>
                <Button variant="outline" colorScheme="blue" type="submit">Add</Button>
            </Grid>
        </form>
    )
}

export default AddItem