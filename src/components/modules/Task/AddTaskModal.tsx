import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
     Dialog,
     DialogClose,
     DialogContent,
     DialogFooter,
     DialogHeader,
     DialogTitle,
     DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { addTask } from "@/redux/features/task/taskSlice";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import type { ITask } from "@/types";
import { format } from "date-fns";
import { CalendarIcon, Plus } from "lucide-react";
import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";


const AddTaskModal = () => {

     const [open, setOpen] = useState(false);

     const users = useAppSelector(selectUsers);

     const form = useForm();

     const dispatch = useAppDispatch();

     const onSubmit: SubmitHandler<FieldValues> = (data) => {
          dispatch(addTask(data as ITask));
          setOpen(false);
          form.reset();
     }

return (

<Dialog open={open} onOpenChange={setOpen}>

     <DialogTrigger asChild>
          <Button>
               Add Task <Plus />
          </Button>
     </DialogTrigger>

     <DialogContent>

     <DialogHeader>
     <DialogTitle>Add Task</DialogTitle>
     </DialogHeader>

     <Form {...form}>

     <form onSubmit={form.handleSubmit(onSubmit)}>

     {/* Form Fields */}
     <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
     <FormItem>
     <FormLabel>Title</FormLabel>
     <FormControl>
          { /* Your form field */}
          <Input {...field} value={field.value || ""}></Input>
     </FormControl>
     </FormItem>
     )}
     />

     <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
     <FormItem className="mt-3">
     <FormLabel>Description</FormLabel >
     <FormControl>
          { /* Your form field */}
          <Textarea className="" {...field} value={field.value || ""}></Textarea>
     </FormControl>
     </FormItem>
     )}
     />

     <FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
     <FormItem className="mt-3">
          <FormLabel>Priority</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
               <FormControl>
               <SelectTrigger>
               <SelectValue className="w-full" placeholder="Select a priority on your based" />
               </SelectTrigger>
               </FormControl>
               <SelectContent>
               <SelectItem value="Low">Low</SelectItem>
               <SelectItem value="Medium">Medium</SelectItem>
               <SelectItem value="High">High</SelectItem>
               </SelectContent>
               </Select>
               <FormMessage />
          </FormItem>
          )}/>


     <FormField
          control={form.control}
          name="assignedTo"
          render={({ field }) => (
     <FormItem className="mt-3">
          <FormLabel>Assign To</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
               <FormControl>
               <SelectTrigger>
               <SelectValue className="w-full" placeholder="Select a user on your based" />
               </SelectTrigger>
               </FormControl>
               <SelectContent>

          {
               users.map((user) => (               <SelectItem value={user._id}>{user.name}</SelectItem>))
          }

               </SelectContent>
               </Select>
               <FormMessage />
          </FormItem>
          )}/>



     <FormField
          control={form.control}
          name="dueDate"
          render={({ field }) => (
          <FormItem className="flex flex-col mt-3">
          <FormLabel>Due Date</FormLabel>
          <Popover>
               <PopoverTrigger asChild>
               <FormControl>
               <Button
                    variant={"outline"}
                    className={cn(
                    "pl-3 text-left font-normal",
                    !field.value && "text-muted-foreground"
                    )}
                    >
                    {field.value ? (
                    format(field.value, "PPP")
                    ) : (
                    <span>Pick a date</span>
                    )}
               <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
               </FormControl>
               </PopoverTrigger>
               <PopoverContent className="w-auto p-0" align="start">
               <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    // disabled={(date) =>
                    // date > new Date() || date < new Date("1900-01-01")
                    // }
                    captionLayout="dropdown"
               />
          </PopoverContent>
          </Popover>
          </FormItem>
          )}
     />


     <DialogFooter className="mt-4">
     <DialogClose asChild>
          <Button type="submit">Save changes</Button>
     </DialogClose>
     </DialogFooter>

     </form>
     </Form>

</DialogContent>
</Dialog>
);
};

export default AddTaskModal;