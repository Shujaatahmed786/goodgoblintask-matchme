import React from 'react'
import RadioOptionsFromDummy from '../componnets/radioOptions'
import InputFields from '../componnets/InputFields'
import InputFieldsTwo from './InputFields2'
import InputFieldsThree from './InputFields3'
import SchoolInputs from './schoolInput'

const Design = () => {
    return (
        <div className='mx-auto p-4'>
            <div>
                <h1 className='flex cursor-pointer'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                    Tell us more about youself <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>

                </h1>
            </div>
            <div className='flex justify-end'><button>Match Me</button></div>
            <div className='flex'>
                <h3>Home Country</h3>
                <input type="text" placeholder='Search by name' />
                <h3>City</h3>
                <input type="text" placeholder='name' />
                <span><RadioOptionsFromDummy /></span>
            </div>
           <div>
            <h3>High School Achievmeents</h3>
            <div className='flex'>
                <span><InputFields /></span>
                <span><InputFieldsTwo /></span>
                <span><InputFieldsThree /></span>
            </div>

           </div>
           <div>
            <h3>College Preference</h3>
            <span className='flex'>
                <h3>Target Major</h3>
                <input type="text"  placeholder='text' />
                <h3>Location</h3>
                <input type="text" placeholder='text' />
                <h3>Target Course</h3>
                <input type="text" placeholder='text' />
            </span>
            <span>
                <h3>Campus Environment</h3>
                <input type="text" placeholder='aaaaaaaaa' />
                <h3>Additional Criteria</h3>
                <input type="text" placeholder='aaaaaa' />
            </span>
           </div>

        </div>
    )
}

export default Design