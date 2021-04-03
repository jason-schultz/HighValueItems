import React, { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ContentItem } from '../models/ContentItem'
import { addItem } from './state/contentItemSlice'

const AddItem = () => {
    const dispatch = useDispatch()
   const [ formData, setFormData ] = useState<ContentItem | {}>()

   const handleFormData = (e: FormEvent<HTMLInputElement | HTMLSelectElement>): void => {
       //   Set form data
       //   If currentTarget is 'value', format it as a number.
       //   otherwise leave it alone.
       //   Question.. should the UI care about the format of the form value?
       //   should the UI just pass values, and let the logic figure out the format
       //   This seems kind of smelly, and the form is pretty much tied to this specific use case.
       //   Maybe pull setFormData out, and add some form attributes to decouple the setFormData method
       //   so it's resuable in other parts of the application
       //   But does this make the model more complicated than it needs to be?
       //   Should the model be "smart"? Feel as though models should be fairly dumb.
       setFormData({
           ...formData,
           [e.currentTarget.id]: e.currentTarget.id === 'value' ? +e.currentTarget.value : e.currentTarget.value
       })
   }

   const handleSaveItem = (e: FormEvent, formData: ContentItem | any) => {
       e.preventDefault()
       dispatch(addItem(formData))
   }

    return (
        <form className="m-6" onSubmit={(e) => handleSaveItem(e, formData)}>
            <div className="flex flex-row p-4">
                <div className="flex flex-col mb-4">
                    <label className="mb-2 uppercase font-bold text-lg text-gray-900">Item Name</label>
                    <input className="border py-2 px-3 text-gray-900 focus:outline-none" onChange={handleFormData} type="text" id="name" name="name" placeholder="Item Name" />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="mb-2 uppercase font-bold text-lg text-gray-900">Item Value</label>
                    <input className="border py-2 px-3 text-gray-900 focus:outline-none" onChange={handleFormData} type="number" id="value" name="value"></input>
                </div>
                <div className="flex flex-col mb-4">
                    <label className="mb-2 uppercase font-bold text-lg text-gray-900">Category</label>
                    <select className="border py-2 px-3 text-gray-900 focus:outline-none" onChange={handleFormData} id="category" name="category">
                        <option value="Catch All">Catch All</option>
                        <option value="Kitchen">Kitchen</option>
                        <option value="Garage">Garage</option>
                        <option value="Yard">Yard</option>
                        <option value="Living Room">Living Room</option>
                        <option value="Pets">Pets</option>
                    </select>
                </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:ring focus:ring-blue-200 ring-inset" 
                disabled={formData === undefined ? true : false}>
                Add Item
            </button>
        </form>
    )
}

export default AddItem