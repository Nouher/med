import { Facebook, Instagram, Linkedin, LinkedinIcon, Mail, Phone, Twitter } from 'lucide-react'
import React from 'react'
import { Separator } from './ui/separator'

export default function Bar() {
  return (
    <div className='flex justify-end w-full text-white font-medium text-sm'>
        <div className='flex gap-4'>
            <div className='flex items-center gap-1'>
                <Phone size={15}/>
                <a href='#'>+212 660 626 265</a>
            </div>
            <div className='flex items-center gap-1'>
                <Mail size={15} />
                <a href='#' >medafriquemontage.ma</a>
            </div>
            <Separator orientation='vertical'/>
            <a href="#"><Facebook size={16}/></a>
            <a href="#"><Twitter size={16}/></a>
            <a href="#"><Instagram size={16}/></a>
            <a href="#"><LinkedinIcon size={16}/></a>
        </div>
        
    </div>
  )
}
