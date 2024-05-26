import { ResolvingMetadata } from 'next';
import React from 'react'

type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params: { slug }}: Props, parent: ResolvingMetadata ){
    const data = await fetch(`http://localhost/${slug}`);
    const element = await data.json();

    const previousImages = (await parent).openGraph?.images || [];

    return {
        title: element.title,
        description: element.description,
        alternates: {
            cannonical: `/elements${slug}`
        },
        openGraph: {
            images: ['/some-specific-image.jpg', ...previousImages ]
        }
    }
}

const Element = () => {
  return (
    <div>Element</div>
  )
}

export default Element