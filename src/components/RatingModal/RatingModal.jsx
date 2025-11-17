import React from 'react'
import { IconStarFilled } from "@tabler/icons-react"
import TextArea from "../ui/TextArea/TextArea"

const RatingModal = () => {
    return (
        <div className='flex flex-col items-center justify-center p-6 border border-outline gap-2.5 w-fit rounded-lg container mx-auto'>
            <h1 className='font-franklin'>Enjoying the NXTUP Experience?</h1>
            <div className='flex items-center justify-center'>
                <IconStarFilled />
                <IconStarFilled />
                <IconStarFilled />
                <IconStarFilled />
                <IconStarFilled />
            </div>
            <TextArea className="w-full" placeholder="Any suggestions?" />
        </div>
    )
}

export default RatingModal