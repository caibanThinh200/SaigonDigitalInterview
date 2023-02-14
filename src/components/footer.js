import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import { FaInstagramSquare } from "react-icons/fa"
import {AiFillTwitterCircle} from "react-icons/ai"
import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container className={"mt-16"} as="footer">
    <div className='flex flex-wrap gap-y-10'>
      <div className='lg:w-6/12 w-full flex flex-col gap-y-5 lg:pr-72 pr-5'>
        <div className='flex gap-x-2'>
          <div className='text-center rounded-full bg-dark p-3 text-center text-white flex h-[30px] w-[30px] items-center justify-center'>K</div>
          <p className='font-medium text-lg'>Kinka Finance</p>
        </div>
        <p>2021 Award winning Finance Advisor and Lorem ipsum dolor sit amet</p>
        <div className='flex gap-x-5'>
          <BsFacebook size={30} color='#FF8049' />
          <AiFillTwitterCircle size={30} color='#FF8049' />
          <FaInstagramSquare size={30} color='#FF8049' />
        </div>
      </div>
      <div className='lg:w-6/12 w-full'>
        <div className='flex justify-center'>
          <div className='w-4/12'>
            <ul className='list-none flex flex-col leading-10'>
              <li className='font-bold'>Location</li>
              <li>America</li>
              <li>Asia</li>
              <li>Europe</li>
              <li>Africa</li>
            </ul>
          </div>
          <div className='w-4/12'>
            <ul className='list-none flex flex-col leading-10'>
              <li className='font-bold'>Location</li>
              <li>America</li>
              <li>Asia</li>
              <li>Europe</li>
              <li>Africa</li>
            </ul>
          </div>
          <div className='w-4/12'>
            <ul className='list-none flex flex-col leading-10'>
              <li className='font-bold'>Location</li>
              <li>America</li>
              <li>Asia</li>
              <li>Europe</li>
              <li>Africa</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Container>
)

export default Footer
