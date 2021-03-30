import React, { FormEvent, useContext, useState } from 'react'
import { ContentItemContext } from '../contexts/contenItemContext'
import { ContentItem, ContentItemContextType } from '../models/ContentItem'

const AddItem = () => {
   const { saveItem } = useContext(ContentItemContext) as ContentItemContextType
   const [ formData, setFormData ] = useState<ContentItem | {}>()

   const handleFormData = (e: FormEvent<HTMLInputElement>): void => {
       setFormData({
           ...formData,
           [e.currentTarget.id]: e.currentTarget.value
       })
   }

   const handleSaveItem = (e: FormEvent, formData: ContentItem | any) => {
       e.preventDefault()
       saveItem(formData) 
   }

    return (
        <form onSubmit={(e) => handleSaveItem(e, formData)}>
            <input onChange={handleFormData} type="text" id="name" name="name" placeholder="Item Name" />
            {/* <Grid templateColumns="repeat(4, 1fr)" gap={4} padding={4}>
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
            </Grid> */}
            <button disabled={formData === undefined ? true : false}>Add Item</button>
        </form>
    )
}

export default AddItem