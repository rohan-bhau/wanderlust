'use client'
import { Button, FieldError, Input, Label, Modal, Surface, TextField,Select, ListBox, TextArea, toast } from "@heroui/react"
import { BiEditAlt } from "react-icons/bi"


const EditDestination = ({ destination }) => {
    console.log(destination.category)
    const {_id,category} = destination

    const onSubmit = async(e) => {
            e.preventDefault()
              const form = e.currentTarget;
            const formData = new FormData(form)
            const updatedData = Object.fromEntries(formData.entries())
            console.log(updatedData)
    
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`, {
                method: "PATCH",
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(updatedData)
            });
    
            const data = await res.json()
            // Toast.success("Travel Destination Added Successfully");
            console.log('data after update', data)

        }

  return (
     <Modal >
        <Button className={'rounded-md hover:bg-blue-600 hover:text-[#f0ebf1] flex gap-2 items-center transition-all'} variant='outline'><BiEditAlt />Edit</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="max-w-3xl w-fit sm:w-xl">
                      <Modal.CloseTrigger />
                      <Modal.Header>
                          <Modal.Heading>Edit Destination</Modal.Heading>
                      </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
        <form onSubmit={onSubmit} className="p-10 space-y-8 w-fit">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Destination Name */}
            <div className="md:col-span-2">
              <TextField name="destinationName" defaultValue={destination.destinationName} isRequired >
                <Label>Destination Name</Label>
                <Input placeholder="Bali Paradise" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            {/* Country */}
            <TextField name="country" defaultValue={destination.country} isRequired>
              <Label>Country</Label>
              <Input placeholder="Indonesia" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Category - Updated Select Component */}
            <div >
                                          <Select
                                     defaultValue={category}
                name="category"
                isRequired
                className="w-full"
                placeholder="Select category"
              >
                <Label>Category</Label>
                <Select.Trigger className="rounded-2xl">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Beach" textValue="Beach">
                      Beach
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Mountain" textValue="Mountain">
                      Mountain
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="City" textValue="City">
                      City
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Adventure" textValue="Adventure">
                      Adventure
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Cultural" textValue="Cultural">
                      Cultural
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Luxury" textValue="Luxury">
                      Luxury
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Price */}
            <TextField name="price" type="number" defaultValue={destination.price} isRequired>
              <Label>Price (USD)</Label>
              <Input type="number" placeholder="1299" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Duration */}
            <TextField name="duration"  defaultValue={destination.duration} isRequired>
              <Label>Duration</Label>
              <Input placeholder="7 Days / 6 Nights" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Departure Date */}
            <div className="md:col-span-2">
              <TextField name="departureDate"  defaultValue={destination.departureDate} type="date" isRequired>
                <Label>Departure Date</Label>
                <Input type="date" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            {/* Image URL - Removed preview */}
            <div className="md:col-span-2">
              <TextField name="imageUrl"  defaultValue={destination.imageUrl} isRequired>
                <Label>Image URL</Label>
                <Input
                  type="url"
                  placeholder="https://example.com/bali-paradise.jpg"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <TextField name="description"  defaultValue={destination.description} isRequired>
                <Label>Description</Label>
                <TextArea
                  placeholder="Describe the travel experience..."
                  className="rounded-3xl"
                />
                <FieldError />
              </TextField>
            </div>
          </div>

          {/* Buttons */}
            <Modal.Footer>
              <Button  type="submit" slot="close">Save</Button>
            </Modal.Footer>

        </form>
              </Surface>
            </Modal.Body>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  )
}

export default EditDestination
