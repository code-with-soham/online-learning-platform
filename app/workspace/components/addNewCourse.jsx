import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button'
import { Sparkle } from 'lucide-react'
const AddNewCourse = ({ children }) => {

  const [formData, setFormData] = React.useState({
    courseName: '',
    courseDescription: '',
    noOfChapters: 1, 
    level: '',
    includeVideo: false,
    category: ''
});

  const onHandelInputChange=(field,value)=>{
    setFormData( prev =>({
      ...prev,
      [field]:value
    }));
    console.log(formData);
  }

  const onGenerateCourse=()=>{
    //generate course
    console.log(formData);
  }

  return (
    <Dialog>
  <DialogTrigger asChild>{ children }</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create New Content</DialogTitle>
      <DialogDescription asChild>
        <div>

          <div>
            <label htmlFor="name">Course Name</label>
            <Input id="name" type="text" placeholder="Enter course name" onChange={(event)=>onHandelInputChange('courseName',event.target.value)} className="w-full mt-2 mb-4"/>
          </div>
          
          <div>
            <label htmlFor="description">Course Description (Optional)</label>
            <Textarea id="description" type="text" placeholder="Enter course description" onChange={(event)=>onHandelInputChange('courseDescription',event.target.value)}  className="w-full mt-2 mb-4"/>
          </div>
    
          <div>
            <label htmlFor="name">No of Chapters</label>
            <Input id="name" type="number" placeholder="Enter number of chapters" 
            onChange={(event)=>onHandelInputChange('noOfChapters',event.target.value)} className="w-full mt-2 mb-4"/>
          </div>

          <div className='flex items-center space-x-2 mb-4'>
            <label htmlFor="name">Include Video</label>
            <Switch 
              id="includeVideo"
              onCheckedChange={() => onHandelInputChange('includeVideo',!formData?.includeVideo)}
            />
          </div>

          <div className='mb-4'>
            <Select onValueChange={(value)=>onHandelInputChange('level',value)} >
              <SelectTrigger className="w-full ">
                <SelectValue placeholder="Difficulty Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advance">Advance</SelectItem>
              </SelectContent>
            </Select> 
          </div>
          
          <div>
            <label htmlFor="name">Category</label>
            <Input id="name" type="text" placeholder="Category (Seperated by Comma)" onChange={(event)=>onHandelInputChange('category',event.target.value)}  className="w-full mt-2 mb-4"/>
          </div>
          
          <div>
            <Button className='w-full mt-4' onClick={onGenerateCourse}> <Sparkle/>Create Course</Button>
          </div>
          <div>
          </div>
        </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
  )
}

export default AddNewCourse