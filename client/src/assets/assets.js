import logo from './logo_w_name.png'
import logo_icon from './logo.png'
import arrow_icon from './arrow_icon.svg'
import header_img from './header_img.png'
import remove_bg_icon from './remove_bg_icon.svg'
import upload_btn_icon from './upload_btn_icon.svg'
import upload_icon from './upload_icon.svg'
import download_icon from './download_icon.svg'
import image_w_bg from './image_w_bg.png'
import image_wo_bg from './image_wo_bg.png'
import facebook_icon from './facebook_icon.svg'
import google_plus_icon from './google_plus_icon.svg'
import twitter_icon from './twitter_icon.svg'
import student1 from "./student1.jpg"
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import credit_icon from './credit_icon.png'
import linkedin_icon from './linkedin_icon.svg'
import github_icon from './github_icon.svg'

export const assets = {
    logo,
    logo_icon,
    arrow_icon,
    header_img,
    remove_bg_icon,
    upload_icon,
    download_icon,
    image_w_bg,
    image_wo_bg,
    facebook_icon,
    google_plus_icon,
    twitter_icon,
    upload_btn_icon,
    credit_icon,
    linkedin_icon,
    github_icon
}

export const testimonialsData = [
    {
        id: 1,
        text: "I've been using BackDropper for all my school assignments, and not only is it free to use, but it has been incredibly user-friendly, making my work much easier.",
        author: "Irene Cole",
        image: student1,
        jobTitle:'Graphic Design Student'
    },
    {
        id: 2,
        text: "I've been using BackDropper for nearly 6 months, I had a fantastic experience. The quality is top-notch. I highly recommend this app.",
        author: "Donald Jackman",
        image: profile_img_2,
        jobTitle:'UI Deginer'
    },
    {
        id: 3,
        text: "I really enjoy using this app, and I love to incorporate it in all types of projects, including goofy projects. The accessibility of this tool allows me to explore my creativity in a variety of ways.",
        author: "David Hea",
        image: profile_img_1,
        jobTitle:'Web Developer'
  },
    
];

export const plans = [
    {
      id: 'Basic',
      price: 0,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]