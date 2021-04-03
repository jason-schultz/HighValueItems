import React, { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ContentItem } from '../models/ContentItem'
import { addItem } from './state/contentItemSlice'

const AddItem = () => {
    const dispatch = useDispatch()
//    const { saveItem } = useContext(ContentItemContext) as ContentItemContextType
   const [ formData, setFormData ] = useState<ContentItem | {}>()

   const handleFormData = (e: FormEvent<HTMLInputElement>): void => {
       setFormData({
           ...formData,
           [e.currentTarget.id]: e.currentTarget.value
       })
   }

   const handleSaveItem = (e: FormEvent, formData: ContentItem | any) => {
       e.preventDefault()
       dispatch(addItem(formData))
       //saveItem(formData) 
   }

    return (
        <form className="m-6" onSubmit={(e) => handleSaveItem(e, formData)}>
            <div className="flex flex-row">
                <div className="flex flex-col mb-4 px-4">
                    <label className="mb-2 uppercase font-bold text-lg text-gray-900">Item Name</label>
                    <input className="border py-2 px-3 text-gray-900 focus:outline-none" onChange={handleFormData} type="text" id="name" name="name" placeholder="Item Name" />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="mb-2 uppercase font-bold text-lg text-gray-900">Item Value</label>
                    <input className="border py-2 px-3 text-gray-900 focus:outline-none" onChange={handleFormData} type="number"></input>
                </div>
            </div>
            
            
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
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:ring focus:ring-blue-200 ring-inset" 
                disabled={formData === undefined ? true : false}>
                Add Item
            </button>
        </form>
    )
}

export default AddItem