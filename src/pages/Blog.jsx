import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import "../styles/blog.css"
import BlogPost from '../components/BlogPost'

export default function Blog() {
  return (
    <div className='blog-page'>
        <Header activeLink={"bloggg"} />
            <div className='blog-page-container'>
                <p>Blog</p>
                <div className='blog-container'>
                    <BlogPost 
                        title={"Velit id adipisicing excepteur id ex aute Lorem sit in Lorem."}
                        desc={"Dolor commodo officia labore cillum quis consequat id occaecat Lorem non labore eu ea incididunt. Adipisicing aliqua irure adipisicing sunt sit. Ad adipisicing non excepteur est duis eiusmod laboris ea incididunt est enim ipsum elit magna."}
                    />
                    <BlogPost
                        title={"Eu duis dolor magna ad."}
                        desc={"Eu eiusmod ad ipsum non in pariatur ut ea ut dolor esse dolor ipsum. Aliqua in minim sunt est quis excepteur aliqua est veniam qui. Fugiat ea ad proident sint enim aliquip elit. Commodo sit occaecat id minim consequat esse."}
                    />
                    <BlogPost
                        title={"Incididunt pariatur ut labore ad anim esse non."}
                        desc={"Qui esse esse amet qui amet. Tempor proident excepteur exercitation aliquip dolore et aliquip exercitation labore irure aliqua. Magna ad amet fugiat irure ullamco deserunt."}
                    />
                    <BlogPost 
                        title={"Velit id adipisicing excepteur id ex aute Lorem sit in Lorem."}
                        desc={"Dolor commodo officia labore cillum quis consequat id occaecat Lorem non labore eu ea incididunt. Adipisicing aliqua irure adipisicing sunt sit. Ad adipisicing non excepteur est duis eiusmod laboris ea incididunt est enim ipsum elit magna."}
                    />
                    <BlogPost
                        title={"Eu duis dolor magna ad."}
                        desc={"Eu eiusmod ad ipsum non in pariatur ut ea ut dolor esse dolor ipsum. Aliqua in minim sunt est quis excepteur aliqua est veniam qui. Fugiat ea ad proident sint enim aliquip elit. Commodo sit occaecat id minim consequat esse."}
                    />
                    <BlogPost
                        title={"Incididunt pariatur ut labore ad anim esse non."}
                        desc={"Qui esse esse amet qui amet. Tempor proident excepteur exercitation aliquip dolore et aliquip exercitation labore irure aliqua. Magna ad amet fugiat irure ullamco deserunt."}
                    />
                </div>
            </div>
        <Footer />
    </div>
  )
}