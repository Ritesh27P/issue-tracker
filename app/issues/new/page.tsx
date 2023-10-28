'use client';

import axios from 'axios';
import { Button, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

interface IssueFrom {
    title: string;
    description: string;
}

const NewIssuePage = () => {
    const { register, control, handleSubmit } = useForm<IssueFrom>()
    const router = useRouter();
    return (
        <form 
            className='max-w-xl space-y-3' 
            onSubmit={handleSubmit(async (data) => {
                await axios.post('/api/issues', data)
                await router.push('/issues')
            })}>
            <TextField.Root>
                <TextField.Input placeholder='Title' {...register('title')} />
            </TextField.Root>
            <Controller 
                name='description'
                control={control}
                render={({field}) => <SimpleMDE placeholder='description' {...field} />}
            />
            {/* <SimpleMDE placeholder='Description' /> */}
            <Button>Submit</Button>
        </form>
  )
}

export default NewIssuePage;